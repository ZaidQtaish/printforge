import type { CategoryPageProps } from "@/app/types"
import { getCategoryBySlug } from "@/app/lib/catergories";
import ModelsGrid from "@/app/components/ModelsGrid";
import { getModels } from "@/app/lib/models";

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { categoryName } = await params;
    const category = getCategoryBySlug(categoryName);
    const renderedModels = await getModels(categoryName);
    return (
        <ModelsGrid title={category.displayName || "3D Models"} models={renderedModels} />
    )
}