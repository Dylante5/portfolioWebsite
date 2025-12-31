import useDocumentMeta from "../hooks/useDocumentMeta";

export default function AppTemplates() {
    useDocumentMeta({
        title: "Templates | Dylan Everett",
        description: "Templates: Reusable UI blocks and layouts built with Flowbite + Tailwind.",
        // canonical: "https://dylanteverett.com/", // TODO: Add canonical URL
    });

    return (
        <div className="mx-auto w-full max-w-6xl md:max-w-7xl space-y-10 my-12 md:my-6 px-6 md:px-0 ">
            <div className="pointer-events-none absolute -inset-6 bg-[url('/pattern-light.svg')]
                dark:bg-[url('/pattern-dark.svg')] opacity-[0.06] dark:opacity-[0.1] w-full" />
            <section className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]
                p-6 shadow-md dark:shadow-[0_0_12px_rgba(255,255,255,0.2)] md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <h1 className="text-2xl font-bold text-center">Templates</h1>
                    <p>TBD</p>
                </div>
            </section>
        </div>
    );
}
