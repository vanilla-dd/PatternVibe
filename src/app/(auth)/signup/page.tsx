import OauthForm from "@/components/form/oauth-form";
import { SignupForm } from "@/components/form/signup-form";
import { validateRequest } from "@/lib/helpers/validate-request";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const { user } = await validateRequest();
  if (user) {
    redirect("/");
  }
  return (
    <div className="mx-auto flex min-h-dvh max-w-80 flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="rounded-sm px-4 py-2 text-4xl font-semibold outline hover:text-black/70 hover:outline-black/50">
          Scribble
        </h1>
        <p className="max-w-[30ch] text-center text-xl">placeholder</p>
      </div>
      <SignupForm />
      <div className="flex w-full items-center gap-2">
        <hr className="h-[1px] w-full bg-slate-400" />
        <span className="text-xs font-medium">OR</span>
        <hr className="h-[1px] w-full bg-slate-400" />
      </div>
      <OauthForm />
      <div>
        <p className="text-sm">
          Already have and account?{" "}
          <Link href={"/login"} className="text-violet-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
