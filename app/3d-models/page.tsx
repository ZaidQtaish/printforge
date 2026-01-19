import { getAllModels } from "../lib/models";
import ModelsGrid from "../components/ModelsGrid";

export default async function Page() {
    const models = await getAllModels()
    return <ModelsGrid title="3D Models" models={models} />
}