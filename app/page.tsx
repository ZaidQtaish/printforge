import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-25 min-h-screen px-4 md:px-0">
      <Image
        src="/home-img.png"
        alt="3D printing models and designs"
        width={500}
        height={500}
        className="w-full md:w-auto max-w-sm md:max-w-none"
      />
      <div className="flex flex-col gap-5 max-w-xl">
        <p className={`text-md md:text-lg tracking-wide`}>YOUR GO-TO PLATFORM FOR 3D PRINTING FILES</p>
        <h1 className="text-3xl md:text-5xl md:leading-[3.25rem] font-bold">Discover what's possible with 3D printing</h1>
        <p className="text-lg md:text-2xl">Join our community of creators and explore a vast library of user-submitted models</p>
        <Link href="/3d-models">
          <button className="text-sm md:text-base w-42 border-2 p-1.5 font-semibold cursor-pointer hover:bg-gray-200 mt-10">BROWSE MODELS</button>
        </Link>
      </div>
    </main>
  );
}
