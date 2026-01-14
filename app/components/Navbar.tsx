"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathname = usePathname();

    const getLinkClass = (href: string) =>
        pathname === href
            ? "text-orange-500 border-b-2 border-orange-500"
            : "hover:text-gray-600";

    return (
        <header className="flex justify-between px-10 py-2">
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
            <nav className="flex items-center gap-8 text-lg font-medium text-gray-600">
                <Link href="/3d-models" className={`transition-all duration-300 ${getLinkClass("/3d-models")}`}>3D MODELS</Link>
                <Link href="/about" className={`transition-all duration-300 ${getLinkClass("/about")}`}>ABOUT</Link>
            </nav>
        </header>
    );
}