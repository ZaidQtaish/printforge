"use client";

import NavButton from "../components/NavButton"
import { getAllCategories } from "../lib/catergories"
import { usePathname } from "next/navigation"

export default function ModelsSidebar() {
    const pathname = usePathname();
    const categories = getAllCategories();

    return (
        <aside className="w-full md:w-48 md:sticky md:top-1/2 md:-translate-y-1/2 md:h-fit">
            <nav className="flex gap-4 overflow-x-auto md:flex-col md:gap-4 md:py-4 lg:text-lg md:text-base">
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
    )
}