import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username can't be empty" })
    .max(10, { message: "Username can't be more than 10 character long" }),
  email: z.string().email({ message: "Enter a valid email" }),
  password: z
    .string({ required_error: "Password can't be empty" })
    .min(6, { message: "Should least be 6 characters long" }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z
    .string({ required_error: "Password can't be empty" })
    .min(6, { message: "Should least be 6 characters long" }),
});

export type SignupSchema = z.infer<typeof signupSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
