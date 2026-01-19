"use client"
import Link from "next/link"
import type { NavButtonProps } from "../types"

export default function NavButton({ href, children, isActive, variant = "header" }: NavButtonProps) {
    const activeClass = isActive
        ? variant === "sidebar"
            ? "text-orange-500 border-l-2 border-orange-500 pl-2.5"
            : "text-orange-500 border-b-2 border-orange-500"
        : "hover:text-gray-600";

    return (
        <Link
            href={href}
            className={`transition-all duration-300 font-medium text-gray-600 whitespace-nowrap ${activeClass}`}>
            {children}
        </Link>
    )
}