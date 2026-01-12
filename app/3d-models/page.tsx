import { getAllModels } from "../lib/models";
import ModelCard from "../components/ModelCard";

export default async function ModelsPage() {
    const models = await getAllModels();

    return (
        <section className="mt-10 mx-5">
            <h2 className="text-3xl font-semibold mb-2 ml-4.5">3D Models</h2>
            <div className="max-full px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {models.map((model) => <ModelCard key={model.id} model={model} />)}
            </div>
        </section>
    );
}