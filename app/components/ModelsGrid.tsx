import ModelCard from "./ModelCard"
import { ModelsGridProps, Model } from "../types"
import SearchBar from "./SearchBar"

export default function ModelsGrid({ title, models, searchDefaultValue }: ModelsGridProps) {
    return (
        <div className="container px-4 py-8 mx-auto">
            <div className="flex flex-col-reverse gap-5 md:flex-row md:justify-between">
                <h1 className="mb-8 text-3xl font-bold">{title}</h1>
                <SearchBar defaultValue={searchDefaultValue} />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {models.map((model: Model) => (
                    <ModelCard key={model.id} model={model} />
                ))}
            </div>
        </div>
    )
}