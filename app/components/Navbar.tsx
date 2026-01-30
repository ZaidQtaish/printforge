"use client";

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import NavButton from "./NavButton"

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 flex justify-between px-10 py-2">
            <Link href="/">
                <div className="relative">
                    {/* Desktop logo */}
                    <Image
                        src="/printforge-logo.svg"
                        alt="PrintForge Logo"
                        width={200}
                        height={80}
                        className="w-[200px] h-auto hidden md:block"
                    />
                    {/* Mobile logo */}
                    <Image
                        src="/printforge-logo-icon.svg"
                        alt="PrintForge Logo"
                        width={40}
                        height={40}
                        className="w-[40px] h-auto block md:hidden"
                    />
                </div>
            </Link>
            <nav className="flex items-center gap-8 text-base md:text-lg">
                <NavButton href="/3d-models" isActive={pathname.startsWith("/3d-models")}>3D MODELS</NavButton>
                <NavButton href="/about" isActive={pathname === "/about"}>ABOUT</NavButton>
            </nav>
        </header>
    );
}