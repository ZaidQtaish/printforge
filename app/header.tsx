export default function Header() {
    return (
        <header className="flex justify-between px-10 py-2">
            <a href="/">
                <div className="relative">
                    {/* Desktop logo */}
                    <img
                        src="/printforge-logo.svg"
                        alt="PrintForge Logo"
                        className="w-[200px] h-auto hidden md:block"
                    />
                    {/* Mobile logo */}
                    <img
                        src="/printforge-logo-icon.svg"
                        alt="PrintForge Logo"
                        className="w-[40px] h-auto block md:hidden"
                    />
                </div>
            </a>
            <nav className="flex items-center gap-8 text-lg font-medium text-gray-600">
                <a href="/products" className="hover:text-gray-600 transition">3D MODELS</a>
                <a href="/about" className="hover:text-gray-600 transition">ABOUT</a>
            </nav>
        </header>
    );
}