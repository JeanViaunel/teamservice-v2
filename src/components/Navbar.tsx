"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { UserButton, SignOutButton, SignInButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export default function App() {
  return (
    <Navbar isBordered className="h-30px fixed top-0 left-0 right-0 z-50">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
          <p className="hidden sm:block font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="px-0 m-0">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedIn>
          <Button>
            <SignOutButton />
          </Button>
        </SignedIn>
        <SignedOut>
          <Button>
            <SignInButton />
          </Button>
        </SignedOut>
      </NavbarContent>
    </Navbar>
  );
}
