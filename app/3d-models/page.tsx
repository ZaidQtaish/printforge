import { getModels } from "../lib/models";
import ModelsGrid from "../components/ModelsGrid";
import type { SearchParams } from "../types";

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
    const models = await getModels();

    const searchQuery = (await searchParams)?.query?.toLowerCase() || ""

    const filteredModels = searchQuery
        ? models.filter(model =>
            model.name.toLowerCase().includes(searchQuery) ||
            model.description?.toLowerCase().includes(searchQuery)
        )
        : models;

    return (
        <main>
            <ModelsGrid title="3D Models" models={filteredModels} searchDefaultValue={searchQuery} />
        </main>
    )
}