import { getAllModels } from "../lib/models";

export default async function ModelsPage() {
    const models = await getAllModels();
    return models.map((model) => (
        <div key={model.id} className="p-4 border rounded-lg m-4">
            <h2 className="text-2xl font-bold mb-2">{model.name}</h2>
            <p className="mb-2">{model.description}</p>
            <p className="text-sm text-gray-500">Likes: {model.likes}</p>
        </div>
    ));
}