import Link from "next/link"
import Image from "next/image"
import { Model } from "../types";
import Pill from "./Pill";
import { Heart } from 'lucide-react'

export default function ModelCard({ model }: { model: Model }) {
    return (
        <Link href={`/3d-models/${model.id}`} className="flex flex-col border border-gray-400 rounded-lg overflow-hidden shadow hover:shadow-xl transition h-full">
            <div className="relative w-full h-48">
                <Image
                    src="/placeholder.png"
                    alt={model.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-2">{model.name}</h2>
                <p className=" mb-3 flex-grow">{model.description}</p>
                <div className="flex flex-wrap gap-2">
                    <Pill>{model.category}</Pill>
                </div>
                <div className="flex items-center mt-3 text-gray-600">
                    <Heart className="w-5 h-5 mr-1 text-gray-400" />
                    <span>{model.likes}</span>
                </div>
            </div>
        </Link>
    );
}