import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-25 min-h-screen px-4 md:px-0">
      <img src="/home-img.png" className="w-full md:w-auto max-w-sm md:max-w-none" />
      <div className="flex flex-col gap-5 max-w-xl">
        <h3 className={`text-sm md:text-base tracking-wide`}>YOUR GO-TO PLATFORM FOR 3D PRINTING FILES</h3>
        <h1 className={`text-3xl md:text-5xl md:leading-[3.25rem] font-bold ${montserratAlternates.className}`}>Discover what's possible with 3D printing</h1>
        <h2 className="text-lg md:text-2xl">Join our community of creators and explore a vast library of user-submitted models</h2>
        <button className="w-40 border-2 p-1.5 font-semibold cursor-pointer hover:bg-gray-200 mt-10">BROWSE MODELS</button>
      </div>
    </main>
  );
}
