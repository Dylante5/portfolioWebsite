import useDocumentMeta from "../hooks/useDocumentMeta";

export default function AppGames() {
    useDocumentMeta({
        title: "Games | Dylan Everett",
        description: "Games: Interactive projects and experiments focused on UI and fun.",
        // canonical: "https://dylanteverett.com/", // TODO: Add canonical URL
    });

    return (
        <div className="flex flex-col">
            <h1 className="w-full text-center">Games</h1>
        </div>
    );
}

