import { Badge, Button, Card } from "flowbite-react";
import { HiArrowRight, HiCode, HiCollection, HiLightningBolt } from "react-icons/hi";
import { Link } from "react-router-dom";
import { JSX } from "react";
import useDocumentMeta from "../hooks/useDocumentMeta";

type FeaturedItem = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  icon: JSX.Element;
};

const featured: FeaturedItem[] = [
  {
    title: "Templates",
    description: "Reusable UI blocks and layouts built with Flowbite + Tailwind.",
    href: "/templates",
    tags: ["Flowbite", "Tailwind", "React"],
    icon: <HiCollection className="h-6 w-6" />,
  },
  {
    title: "Games",
    description: "Small interactive projects and experiments focused on UI and fun.",
    href: "/games",
    tags: ["Godot", "UI", "TypeScript"],
    icon: <HiLightningBolt className="h-6 w-6" />,
  },
  {
    title: "Portfolio",
    description: "Projects, write-ups, and what I’m building right now.",
    href: "/about",
    tags: ["Full-stack", "UX", "Performance"],
    icon: <HiCode className="h-6 w-6" />,
  },
];

export default function AppHome() {
  useDocumentMeta({
    title: "Home | Dylan Everett",
    description: "Portfolio Homepage: descriptions, games, and templates.",
    // canonical: "https://dylanteverett.com/", // TODO: Add canonical URL
  });
  return (
    <div className="mx-auto w-full max-w-6xl md:max-w-7xl space-y-10 my-12 md:my-6 px-6 md:px-0 ">
      {/* HERO */}
      <div className="pointer-events-none absolute -inset-6 bg-[url('/pattern-light.svg')]
          dark:bg-[url('/pattern-dark.svg')] opacity-[0.06] dark:opacity-[0.1] w-full" />
      <section className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]
          p-6 shadow-md dark:shadow-[0_0_12px_rgba(255,255,255,0.2)] md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <Badge className="w-fit" color="gray">
              Portfolio • Games • Templates
            </Badge>

            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              Dylan Everett
            </h1>

            <p className="max-w-2xl text-base opacity-90 md:text-lg">
              Building modern web apps with clean UI, smooth theming, and real-world demos —
              including a templates library and a gaming section.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button as={Link} to="/about" color="gray">
                About Me <HiArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button as={Link} to="/templates" color="gray">
                Browse Templates
              </Button>
              <Button as={Link} to="/games" color="gray">
                View Games
              </Button>
            </div>
          </div>

          {/* Quick stats / highlights */}
          <div className="grid w-full gap-3 md:max-w-sm">
            <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4
            shadow-sm transition-shadow hover:shadow-md dark:shadow-[0_0_12px_rgba(255,255,255,0.2)]">
              <div className="text-sm opacity-90">Focus</div>
              <div className="text-lg font-semibold">UI Systems + Full-stack Demos</div>
            </div>
            <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4
            shadow-sm transition-shadow hover:shadow-md dark:shadow-[0_0_12px_rgba(255,255,255,0.2)]">
              <div className="text-sm opacity-90">Currently</div>
              <div className="text-lg font-semibold">Building Templates + Storefront</div>
            </div>
            <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4
            shadow-sm transition-shadow hover:shadow-md dark:shadow-[0_0_12px_rgba(255,255,255,0.2)]">
              <div className="text-sm opacity-90">Portfolio Stack</div>
              <div className="text-lg font-semibold">React • Vite • Tailwind • Flowbite</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SECTIONS */}
      <section className="relative space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold">Explore</h2>
          <p className="text-sm opacity-90">Jump into the sections that matter.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((item) => (
            <Card
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]
                shadow-md hover:shadow-lg dark:shadow-[0_0_12px_rgba(255,255,255,0.2)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <span className="opacity-90">{item.icon}</span>
                    {item.title}
                  </div>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((t) => (
                  <Badge key={t} color="gray">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="pt-4">
                <Button as={Link} to={item.href} color="gray" className="w-full">
                  Go to {item.title} <HiArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-md dark:shadow-[0_0_12px_rgba(255,255,255,0.2)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Want the best stuff first?</h3>
            <p className="text-sm opacity-90">
              Check out the Templates I have available, or Games for interactive builds I have worked on.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button as={Link} to="/templates" color="gray">
              Templates
            </Button>
            <Button as={Link} to="/games" color="gray">
              Games
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
