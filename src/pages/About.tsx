import useDocumentMeta from "../hooks/useDocumentMeta.tsx";

export default function AppAbout() {
    useDocumentMeta({
        title: "About | Dylan Everett",
        description: "About Dylan Everett: Software Engineer focused on modern UI and full-stack development.",
        // canonical: "https://dylanteverett.com/", // TODO: Add canonical URL
    });

    return (
        <div className="mx-auto w-full max-w-6xl md:max-w-7xl space-y-10 my-12 md:my-6 px-6 md:px-0">
            <section className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-md dark:shadow-[0_0_12px_rgba(255,255,255,0.2)] md:p-10">
                <h1 className="w-full text-center">About</h1>
            </section>
        </div>
  );
}
