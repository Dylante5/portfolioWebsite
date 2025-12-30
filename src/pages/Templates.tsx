import useDocumentMeta from "../hooks/useDocumentMeta";

export default function AppTemplates() {
    useDocumentMeta({
        title: "Templates | Dylan Everett",
        description: "Templates: Reusable UI blocks and layouts built with Flowbite + Tailwind.",
        // canonical: "https://dylanteverett.com/", // TODO: Add canonical URL
    });

    return (
        <div className="flex flex-col">
            <h1 className="w-full text-center">Templates</h1>
        </div>
    );
}
