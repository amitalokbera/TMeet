"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Check } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

export default function ModeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderIcon = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    return currentTheme === "dark" ? (
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    ) : (
      <Sun className="h-[1.2rem] w-[1.2rem]" />
    );
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="ghost" radius="full" className="w-10 h-10" isIconOnly>
          {renderIcon()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="light"
          onClick={() => setTheme("light")}
          startContent={theme === "light" && <Check className="w-4 h-4" />}
        >
          Light
        </DropdownItem>
        <DropdownItem
          key="dark"
          onClick={() => setTheme("dark")}
          startContent={theme === "dark" && <Check className="w-4 h-4" />}
        >
          Dark
        </DropdownItem>
        <DropdownItem
          key="system"
          onClick={() => setTheme("system")}
          startContent={theme === "system" && <Check className="w-4 h-4" />}
        >
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
