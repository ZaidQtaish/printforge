import modelsData from "../data/models.json";
import type { Model } from "../types";

export async function getAllModels() : Promise<Model[]> {
    return modelsData as Model[];
}

export async function getModelById(id: string): Promise<Model | undefined> {
    const foundModel = modelsData.find((model) => model.id === Number(id));
    return foundModel || undefined;
}

export async function getModelsByCategory(categorySlug: string): Promise<Model[]> {
    const filteredModels = modelsData.filter((model) => model.category === categorySlug);
    return filteredModels;
}