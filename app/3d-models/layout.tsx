import ModelsSidebar from "../components/ModelsSidebar";

export default function ModelsNavigation({ children }: { children: React.ReactNode }) {
    return (
        <main className="max-w-7xl mx-auto md:flex md:mx-0 md:gap-25 md:px-13 md:max-w-full">
            <ModelsSidebar />
            {children}
        </main>
    )
}