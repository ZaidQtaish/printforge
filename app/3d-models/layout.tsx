"use client";

import { getAllCategories } from "../lib/catergories"
import NavButton from "../components/NavButton"
import { usePathname } from "next/navigation"

export default function ModelsNavigation({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const categories = getAllCategories();
    return (
        <main className="max-w-7xl mx-auto md:flex md:mx-0 md:gap-20 md:px-10 md:max-w-full">
            <aside className="w-full md:w-48 md:sticky md:top-55 md:h-fit">
                <nav className="flex gap-4 overflow-x-auto md:flex-col md:gap-3 md:py-4">
                    <NavButton href="/3d-models" isActive={pathname === "/3d-models"} variant="sidebar">ALL</NavButton>
                    {categories.map(category =>
                        <NavButton
                            key={category.slug}
                            href={`/3d-models/categories/${category.slug}`}
                            isActive={pathname === `/3d-models/categories/${category.slug}`}
                            variant="sidebar"
                        >
                            {category.displayName.toUpperCase()}
                        </NavButton>)}
                </nav>
            </aside>
            {children}
        </main>
    )
}