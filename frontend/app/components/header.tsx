"use client";

import { usePathname } from "next/navigation";
import ModeToggle from "./modeToggle";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function Header() {
  const pathname = usePathname();
  const isRootPath = pathname === "/";

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-3xl font-bold">
            TMeet
          </Link>
          <nav className="flex items-center space-x-4">
            <ModeToggle />
            {isRootPath && (
              <Link href="/login" tabIndex={-1}>
                <Button variant="ghost" className="text-base border-none">
                  Sign In
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
