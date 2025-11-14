"use client";

import { Moon, Sun, Bell } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ThemeToggle } from "./theme-toggle";
import { PiDropboxLogo } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export default function Navbar() {

  // 🔥 Smooth scroll function
  function scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 px-4">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <PiDropboxLogo className="text-primary" size={20} />
          <span className="font-semibold text-lg text-primary">Logopipsum</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-muted-foreground">

          <a className="hover:text-foreground transition-colors cursor-pointer">Home</a>

          <a
            onClick={() => scrollToSection("market-update")}
            className="hover:text-foreground transition-colors cursor-pointer"
          >
            Market
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-foreground transition-colors cursor-pointer">
              <span onClick={() => scrollToSection("trade")}>Trade</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              <DropdownMenuItem>Spot</DropdownMenuItem>
              <DropdownMenuItem>Futures</DropdownMenuItem>
              <DropdownMenuItem>Margin</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a className="hover:text-foreground transition-colors cursor-pointer">BNPL</a>

        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <TfiHeadphoneAlt className="text-muted-foreground hover:text-foreground" />
          <Bell className="text-muted-foreground hover:text-foreground" />
          <ThemeToggle />

          <p className="text-muted-foreground hover:text-foreground cursor-pointer">wallet</p>

          <div className="flex items-center space-x-2">
            <span className="hidden md:inline text-sm text-foreground">Hi User</span>
          <p
  className="bg-primary p-2 text-white flex items-center justify-center"
  style={{ borderRadius: "50%", width: 40, height: 40 }}
>
  S
</p>

          </div>

        </div>

      </div>
    </header>
  );
}
