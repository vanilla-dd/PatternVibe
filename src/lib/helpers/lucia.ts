import { Lucia } from "lucia";
import { DrizzlePgAdapter } from "../db";

export const lucia = new Lucia(DrizzlePgAdapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      id: attributes.id,
      username: attributes.username,
      email: attributes.email,
      image: attributes.image,
      role: attributes.role,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  id: string;
  username: string;
  email: string;
  image: string;
  role: "user" | "admin";
}
