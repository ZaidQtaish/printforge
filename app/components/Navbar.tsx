import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
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
                <Link href="/3d-models" className="hover:text-gray-600 transition">3D MODELS</Link>
                <Link href="/about" className="hover:text-gray-600 transition">ABOUT</Link>
            </nav>
        </header>
    );
}