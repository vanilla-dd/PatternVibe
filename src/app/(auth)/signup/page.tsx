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
    <div className="mx-auto flex min-h-dvh max-w-96 flex-col items-center justify-center gap-4 bg-basebginvert px-4 font-dmSans">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="font-champ text-4xl font-extrabold md:text-5xl lg:text-6xl">
          PatternVibe.
        </h1>
        <p className="max-w-[30ch] text-center font-dmMono text-base sm:text-lg md:text-xl">
          Continue you&apos;re designing journey
        </p>
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
          <Link href={"/login"} className="text-orange-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
