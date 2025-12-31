import useDocumentMeta from "../hooks/useDocumentMeta.tsx";
import {
    Card,
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
    Avatar,
    Badge,
} from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

const tech = [
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "SQL",
    "Python",
    "Java",
    "C++",
    "HTML",
    "CSS",
    "React",
    "Vite",
    "Tailwind CSS",
    "Flowbite React",
    "Node/Express",
    "Django",
    "Flask",
    "PyQT",
    "Tkinter",
    "CustomTkinter",
];

export default function AppAbout() {
    useDocumentMeta({
        title: "About | Dylan Everett",
        description: "About Dylan Everett: Software Engineer focused on modern UI and full-stack development.",
        // canonical: "https://dylanteverett.com/", // TODO: Add canonical URL
    });

    return (
        <div className="mx-auto w-full max-w-6xl md:max-w-7xl space-y-10 my-12 md:my-6 px-6 md:px-0 ">
            <div className="pointer-events-none absolute -inset-6 bg-[url('/pattern-light.svg')]
                dark:bg-[url('/pattern-dark.svg')] opacity-[0.06] dark:opacity-[0.1] w-full" />
            <section className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]
                p-6 shadow-md dark:shadow-[0_0_12px_rgba(255,255,255,0.2)] md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold tracking-tight md:text-5xl text-center">
                            Dylan Everett
                        </h1>
                        <div className="flex justify-center">
                            <div className="inline-flex rounded-full p-0.75 bg-linear-to-br from-[rgb(var(--text-color))] to-lime-800 md:to-lime-400
                                shadow-md dark:shadow-[0_0_18px_rgba(16,185,129,0.8)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                                <Avatar rounded img="/public/face.jpg" size="xl" className="object-cover contrast-110 saturate-110"/>
                            </div>
                        </div>
                        <p className="w-full text-center text-lg"><strong>Software Engineer focused on modern UI and full-stack development.</strong></p>
                        <li className="w-full text-center">I’ve always enjoyed breaking things down and building them back up better.
                            Over time, that turned into a focus on clean UI systems, reusable components, and projects that solve real problems.</li>
                    </div>
                    <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]
                        p-6 shadow-md dark:shadow-[0_0_12px_rgba(255,255,255,0.2)] md:p-4 grid w-full gap-3 md:max-w-sm">
                        <h2 className="text-2xl font-bold">Tech Stack</h2>
                        <p className="mt-1 text-sm opacity-90">
                          Tools I’m familiar with (and learning) as I grow as a developer.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {tech.map((t) => (
                            <Badge key={t} color="gray">
                              {t}
                            </Badge>
                          ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:grid md:grid-cols-2">
                <div>
                    <h1 className="text-2xl font-bold text-center">Academic and Professional Timeline</h1>
                    <Card className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]
                        p-2 shadow-md dark:shadow-[0_0_12px_rgba(255,255,255,0.2)] md:min-w-11/12 md:max-w-11/12 md:row-span-3 md:mx-auto my-6">
                        <div className="grid gap-3 md:max-w-lg ">
                            <Timeline>
                                <TimelineItem>
                                    <TimelinePoint icon={HiCalendar}
                                        theme={{
                                            marker: {
                                                icon: {
                                                    base: "h-3 w-3 text-rgb(var(--primary)) dark:text-rgb(var(--primary))",
                                                    wrapper: "bg-[rgb(var(--secondary-soft))] dark:bg-[rgb(var(--secondary-soft))]",
                                                },
                                            },
                                        }}
                                    />
                                    <TimelineContent>
                                        <TimelineTime>August 2021</TimelineTime>
                                        <TimelineTitle>Valencia College</TimelineTitle>
                                        <TimelineBody className="opacity-90">
                                            Started my journey in software development at Valencia College.
                                        </TimelineBody>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelinePoint icon={HiCalendar}
                                        theme={{
                                            marker: {
                                                icon: {
                                                    base: "h-3 w-3 text-rgb(var(--primary)) dark:text-rgb(var(--primary))",
                                                    wrapper: "bg-[rgb(var(--secondary-soft))] dark:bg-[rgb(var(--secondary-soft))]",
                                                },
                                            },
                                        }}
                                    />
                                    <TimelineContent>
                                        <TimelineTime>February 2022</TimelineTime>
                                        <TimelineTitle>Olympia Pharmacy</TimelineTitle>
                                        <TimelineBody className="opacity-90">
                                            Started working as a Logistics/Pharmacy Technician at Olympia Pharmacy.
                                        </TimelineBody>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelinePoint icon={HiCalendar}
                                        theme={{
                                            marker: {
                                                icon: {
                                                    base: "h-3 w-3 text-rgb(var(--primary)) dark:text-rgb(var(--primary))",
                                                    wrapper: "bg-[rgb(var(--secondary-soft))] dark:bg-[rgb(var(--secondary-soft))]",
                                                },
                                            },
                                        }}
                                    />
                                    <TimelineContent>
                                        <TimelineTime>July 2023</TimelineTime>
                                        <TimelineTitle>University of Florida</TimelineTitle>
                                        <TimelineBody className="opacity-90">
                                            Finished my AA at Valencia, and continued to pursue my BS in Computer Science at UF.
                                        </TimelineBody>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelinePoint icon={HiCalendar}
                                        theme={{
                                            marker: {
                                                icon: {
                                                    base: "h-3 w-3 text-rgb(var(--primary)) dark:text-rgb(var(--primary))",
                                                    wrapper: "bg-[rgb(var(--secondary-soft))] dark:bg-[rgb(var(--secondary-soft))]",
                                                },
                                            },
                                        }}
                                    />
                                    <TimelineContent>
                                        <TimelineTime>December 2024</TimelineTime>
                                        <TimelineTitle>QMS Specialist 1 at Olympia/Wesley Pharmaceuticals</TimelineTitle>
                                        <TimelineBody className="opacity-90">
                                            Currently working as a QMS Specialist 1 at Olympia/Wesley Pharmaceuticals.
                                        </TimelineBody>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelinePoint icon={HiCalendar}
                                        theme={{
                                            marker: {
                                                icon: {
                                                    base: "h-3 w-3 text-rgb(var(--primary)) dark:text-rgb(var(--primary))",
                                                    wrapper: "bg-[rgb(var(--secondary-soft))] dark:bg-[rgb(var(--secondary-soft))]",
                                                },
                                            },
                                        }}
                                    />
                                    <TimelineContent>
                                        <TimelineTime>December 2025</TimelineTime>
                                        <TimelineTitle>Graduated From the University of Florida</TimelineTitle>
                                        <TimelineBody className="opacity-90">
                                            Graduated from the University of Florida with a BS in Computer Science.
                                        </TimelineBody>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelinePoint icon={HiCalendar}
                                        theme={{
                                            marker: {
                                                icon: {
                                                    base: "h-3 w-3 text-rgb(var(--primary)) dark:text-rgb(var(--primary))",
                                                    wrapper: "bg-[rgb(var(--secondary-soft))] dark:bg-[rgb(var(--secondary-soft))]",
                                                },
                                            },
                                        }}
                                    />
                                    <TimelineContent>
                                        <TimelineTime>August 2026</TimelineTime>
                                        <TimelineTitle>University of West Florida</TimelineTitle>
                                        <TimelineBody className="opacity-90">
                                            Started my journey at the University of West Florida, pursuing an MBA.
                                        </TimelineBody>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </div>
                    </Card>
                </div>
                <div className="md:col-span-1">
                    <h1 className="text-2xl font-bold text-center">Projects</h1>
                    <Card className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]
                        p-2 shadow-md hover:shadow-lg dark:shadow-[0_0_12px_rgba(255,255,255,0.2)] md:min-w-11/12 md:max-w-11/12 md:row-span-1 md:mx-auto my-6 text-left">
                        <h1 className="text-xl font-bold text-center">Codelink (Real Time Collaboration Code Editor)</h1>
                        <p className="opacity-90"></p>
                        <p className="opacity-90">React, Vite, Tailwind, Monaco Editor, Yjs, Node.js, SQLite, Docker, Websockets.</p>
                        <p className="opacity-90">Deployed with Docker, AWS, and GitHub.</p>
                    </Card>
                    <Card className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]
                        p-2 shadow-md hover:shadow-lg dark:shadow-[0_0_12px_rgba(255,255,255,0.2)] md:min-w-11/12 md:max-w-11/12 md:row-span-1 md:mx-auto my-6 text-left">
                        <h1 className="text-xl font-bold text-center">Visual Inspection Web Application</h1>
                        <p className="opacity-90">A web app version of our visual inspection process forms at Olympia/Wesley Pharmaceuticals,
                            both GMP and 21 CFR Part 11 compliant.</p>
                        <p className="opacity-90">Django, PostgreSQL, HTML, CSS, and JavaScript.</p>
                        <p className="opacity-90">Deployed with AWS, and GitHub.</p>
                    </Card>
                    <Card className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]
                        p-2 shadow-md hover:shadow-lg dark:shadow-[0_0_12px_rgba(255,255,255,0.2)] md:min-w-11/12 md:max-w-11/12 md:row-span-1 md:mx-auto my-6 text-left">
                        <h1 className="text-xl font-bold text-center">Preventative Maintenance Planning Application</h1>
                        <p className="opacity-90">A desktop application used for preventative maintenance planning,
                            that follows GMP and 21 CFR part 11 requirements.</p>
                        <p className="opacity-90">Pyside6, PostgreSQL.</p>
                        <p className="opacity-90">Deployed with GitHub.</p>
                    </Card>
                </div>
            </section>
        </div>
    );
}
