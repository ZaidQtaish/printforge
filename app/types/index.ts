import { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type Model = {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

export type PillProps = {
    children: ReactNode
    className?: string
}

export type Category = {
    slug: string
    displayName: string
}

export type CategoryPageProps = {
    params: Promise<{
        categoryName: string
    }>
}

export type ModelsGridProps = {
    title: string
    models: Model[]
}

export type NavButtonProps = {
    href: string
    children: ReactNode
    isActive: boolean
    variant?: "header" | "sidebar"
}