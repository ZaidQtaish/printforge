import Image from "next/image"

import { Layers, Globe, Flag } from "lucide-react"

export default function About() {
    return (
        <main>
            <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-55 min-h-screen px-4 md:px-0">
                <Image
                    src="/home-img-square.png"
                    alt="PrintForge Community - A group of makers collaborating on 3D printing projects"
                    width={500}
                    height={500}
                    className="w-half md:w-150 max-w-sm md:max-w-none rounded"
                />
                <div className="flex flex-col gap-6 max-w-xl">
                    <h3 className="text-sm md:text-base tracking-wide">ABOUT PRINTFORGE</h3>
                    <h1 className="text-3xl md:text-5xl md:leading-[3.25rem] font-bold">Empowering<br />makers worldwide</h1>
                    <p className="text-lg md:text-xl text-gray-900">
                        Founded in 2023, PrintForge has quickly<br />become the go-to platform for 3D printing enthusiasts,makers,
                        and professional designers to share and discover amazing STL<br />files for 3D printing.
                        <br className="mb-7" />
                        Our mission is to foster a vibrant community<br />where creativity meets technology,
                        enabling <br /> anyone to bring their ideas to life through 3D <br /> printing.
                    </p>
                </div>
            </section>

            <section>
                <div className="flex justify-evenly py-30 border-t border-b border-gray-300">
                    <div className="flex flex-col w-1/5">
                        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900"><Layers />100K+ Models</h2>
                        <p className="text-lg mt-2">Access our vast library of<br />community-created 3D models, from practical tools to artistic creations.</p>
                    </div>
                    <div className="border h-30 text-gray-600 opacity-80"></div>
                    <div className="flex flex-col w-1/5">
                        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900"><Globe />Active Community</h2>
                        <p className="text-lg mt-2">Join thousands of makers who share<br /> tips, provide feedback, and collaborate on projects.</p>
                    </div>
                    <div className="border h-30 text-gray-600 opacity-80"></div>
                    <div className="flex flex-col w-1/5">
                        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900"><Flag />Free to Use</h2>
                        <p className="text-lg mt-2">Most models are free to download, with optional premium features for power users.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-col items-center py-15 gap-10">
                    <h1 className="text-5xl md:text-5xl font-bold">Our vision</h1>
                    <p className="text-lg md:text-2xl text-gray-900">
                        At PrintForge, we believe that 3D printing is revolutionizing<br />
                        the way we create, prototype,and manufacture. Our platform<br />
                        serves as a bridge between designers and makers,enabling<br />
                        the sharing of knowledge and creativity that pushes the<br />
                        boundaries of what's possible with 3D printing.
                    </p>
                    <div className="border w-60 text-gray-400 opacity-80"></div>
                    <p className="text-lg md:text-2xl text-gray-900 mb-3">
                        Whether you're a hobbyist looking for your next weekend<br />
                        project, an educator seeking teaching materials, or a<br />
                        professional designer wanting to share your creations,<br />
                        PrintForge provides the tools and community to support your<br />
                        journey in 3D printing.
                    </p>
                </div>
            </section>
        </main>
    );
}
