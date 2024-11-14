"use client";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import navbarData from "@/data/navbarData";
import { Button } from "./button";
import { useState } from "react";
import { SidebarClose, SidebarOpen } from "lucide-react";

export default function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);

  function toggleNavbar() {
    setNavbarOpen((prev) => !prev);
  }

  return (
    <header className="container mx-auto flex w-full flex-row items-center justify-between py-4">
      <Link
        href="/"
        className="flex flex-row items-center gap-1 text-xl font-semibold"
      >
        <Image
          src="/logo.png"
          alt=""
          width={100}
          height={100}
          className="w-8"
        />
        Estatein
      </Link>

      <nav
        role="navigation"
        className={`fixed right-0 top-0 z-50 flex min-h-screen w-2/3 bg-background pt-12 ring-1 ring-slate-900 transition-all md:static md:min-h-0 md:w-auto md:translate-x-0 md:pt-0 md:ring-0 ${isNavbarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <Tabs className="w-full" defaultValue={navbarData[0].role}>
          <TabsList className="flex h-auto flex-col md:flex-row">
            {navbarData.map((item) => (
              <TabsTrigger key={item.role} value={item.role} className="w-full">
                <Link href={`${item.url}`} onClick={toggleNavbar}>
                  {item.role}
                </Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <button
          aria-label="Open menu button"
          onClick={toggleNavbar}
          className="md:hidden"
        >
          <SidebarOpen className="absolute right-5 top-5" />
        </button>
      </nav>

      <div className="flex flex-row items-center gap-4">
        <Button variant="secondary" aria-label="Contact us button">
          <Link href={"/*"}>Contact Us</Link>
        </Button>
        <button onClick={toggleNavbar} className="md:hidden">
          <SidebarClose />
        </button>
      </div>

      {isNavbarOpen && (
        <div
          className="absolute inset-0 z-40 bg-black bg-opacity-65 md:hidden"
          onClick={toggleNavbar}
        />
      )}
    </header>
  );
}
