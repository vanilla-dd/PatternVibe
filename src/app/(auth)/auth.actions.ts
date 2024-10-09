"use server";
// Todo: Error handling

import { db } from "@/lib/db";
import { hash, verify } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { userTable } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import {
  LoginSchema,
  loginSchema,
  SignupSchema,
  signupSchema,
} from "@/lib/helpers/validators";
import { validateRequest } from "@/lib/helpers/validate-request";
import { lucia } from "@/lib/helpers/lucia";

export async function signupAction(
  formData: SignupSchema
): Promise<ActionResult> {
  const { email, password, username } = signupSchema.parse(formData);

  const passwordHash = await hash(password, {
    // recommended minimum parameters
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });

  // TODO: check if username is already used
  const [user] = await db
    .insert(userTable)
    .values({
      password: passwordHash,
      username: username,
      email: email,
    })
    .returning();

  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  console.log("done");
  return redirect("/");
}

export async function loginAction(
  formData: LoginSchema
): Promise<ActionResult> {
  const { email, password } = loginSchema.parse(formData);

  const [existingUser] = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, email));
  if (!existingUser) {
    return {
      error: "Incorrect username or password",
    };
  }

  const validPassword = await verify(existingUser.password, password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  if (!validPassword) {
    return {
      error: "Incorrect username or password",
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/");
}

export async function logout(): Promise<ActionResult> {
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/login");
}

interface ActionResult {
  error: string;
}
