import { getModelById } from "@/app/lib/models";
import Image from "next/image";
import Pill from "@/app/components/Pill";
import { Heart } from 'lucide-react'

export default async function ModelDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const model = await getModelById(id);

    if (!model) {
        return <div>Model not found</div>;
    }

    return (
        <section className="mt-10 mx-5">
            <div className="flex items-center gap-9 flex-col md:flex-row">
                <Image
                    src="/placeholder.png"
                    width={600}
                    height={600}
                    alt={model.name}
                    className="object-cover rounded"
                />
                <div className="flex flex-col gap-4.5">
                    <div className="flex items-center text-gray-600 gap-1">
                        <Heart size={30} className="mr-1 text-gray-500" />
                        <span className="text-xl">{model.likes}</span>
                    </div>
                    <h2 className="text-3xl font-bold">{model.name}</h2>
                    <div className="flex flex-wrap gap-2">
                        <Pill>{model.category}</Pill>
                    </div>
                    <p className="mb-8 text-xl max-w-2xl">{model.description}</p>
                    <p>Added on {new Date(model.dateAdded).toLocaleDateString()}</p>
                </div>
            </div>
        </section>
    );
}