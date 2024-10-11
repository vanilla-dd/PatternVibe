"use client";

import { logout } from "@/app/(auth)/auth.actions";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { forwardRef } from "react";

const Logout = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(() => {
  return (
    <DropdownMenuItem
      className="hover:cursor-pointer"
      onClick={() => {
        logout();
      }}
    >
      Logout
    </DropdownMenuItem>
  );
});

// Add the display name for debugging
Logout.displayName = "Logout";

export default Logout;
