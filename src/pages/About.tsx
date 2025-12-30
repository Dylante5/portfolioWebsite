import useDocumentMeta from "../hooks/useDocumentMeta.tsx";
import {
    Button,
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
    Avatar,
} from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

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
                        <Avatar rounded img="/public/face.jpg" size="xl" className="p-6"/>
                        <p className="w-full text-center"><strong>Software Engineer focused on modern UI and full-stack development.</strong></p>
                        <li className="w-full">Placeholder</li>
                    </div>
                    <div className="grid w-full gap-3 md:max-w-sm">
                        <Timeline>
                            <TimelineItem>
                                <TimelinePoint />
                                <TimelineContent>
                                    <TimelineTime>August 2021</TimelineTime>
                                    <TimelineTitle>Valencia College</TimelineTitle>
                                    <TimelineBody>
                                        Started my journey in software development at Valencia College.
                                    </TimelineBody>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelinePoint />
                                <TimelineContent>
                                    <TimelineTime>February 2022</TimelineTime>
                                    <TimelineTitle>Olympia Pharmacy</TimelineTitle>
                                    <TimelineBody>
                                        Started working as a Logistics/Pharmacy Technician at Olympia Pharmacy.
                                    </TimelineBody>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelinePoint />
                                <TimelineContent>
                                    <TimelineTime>July 2023</TimelineTime>
                                    <TimelineTitle>University of Florida</TimelineTitle>
                                    <TimelineBody>
                                        Finished my AA at Valencia, and continued to pursue my BS in Computer Science at UF.
                                    </TimelineBody>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelinePoint />
                                <TimelineContent>
                                    <TimelineTime>December 2024</TimelineTime>
                                    <TimelineTitle>QMS Specialist 1 at Olympia/Wesley Pharmaceuticals</TimelineTitle>
                                    <TimelineBody>
                                        Currently working as a QMS Specialist 1 at Olympia/Wesley Pharmaceuticals.
                                    </TimelineBody>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </section>
        </div>
  );
}
