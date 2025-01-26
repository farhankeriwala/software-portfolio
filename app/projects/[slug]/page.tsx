"use server";

import React from "react";
import Heading from "@/components/Headings/Heading";
import Carousel from "@/components/Carousel";
import SubHeading from "@/components/Headings/SubHeading";
import {getProjects} from "@/lib/utils";
import {LinkPreview} from "@/components/ui/aceternity/LinkPreview";
import {Button} from "@/components/ui/shadcn/button";
import {urlFor} from "@/lib/sanity/imageUrl";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/shadcn/tooltip"


interface Feature {
    name: string;
    description: string;
}

const Page = async ({params}: { params: Promise<{ slug: string }> }) => {
    const slug = (await params).slug;
    const projects = await getProjects()
    const project = projects!.filter((project) => project.slug.current === slug)[0];

    return (
        <section className="flex flex-col mx-auto items-center justify-center">
            <Heading text={project.title} className="capitalize"/>
            <div className="w-full">
                <div className={"container my-12"}>
                    <SubHeading text="Description" className="capitalize"/>
                    <p className={"font-poppins text-lg md:text-xl"}>{project.description}</p>
                </div>
                <div className={"container my-12"}>
                    <SubHeading text="Features" className="capitalize"/>
                    <ul className={"container"}>
                        {
                            project.features.map((feature: Feature) => (
                                <li key={feature.name}
                                    className={"list-disc my-2 font-poppins text-base md:text-lg"}><span
                                    className={"font-semibold"}>{feature.name}</span> - {feature.description}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className={"container my-12"}>
                    <SubHeading text="Technologies" className="capitalize"/>
                    <ul className={"container flex items-center gap-4 flex-wrap"}>
                        {
                            project.techStack.map((tech: any, index: number) => (
                                <div className={"mx-auto hover:scale-110 transition-all duration-200"} key={index}>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Image src={urlFor(tech.image.asset).url()} alt={""} width={80}
                                                       height={80}/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                {tech.name}
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>

                            ))
                        }
                    </ul>
                </div>
                {
                    project.github != null && (
                        <div className={"container my-12"}>
                            <SubHeading text={"Links"} className="capitalize"/>
                            <div className={"grid space-x-8 space-y-4 md:grid-cols-2"}>
                                {
                                    project.url != null && (
                                        <LinkPreview url={project.url} quality={100} width={400} height={200}>
                                            <Button variant={"outline"} className={"w-full"}>Live Demo</Button>
                                        </LinkPreview>
                                    )
                                }
                                <LinkPreview url={project.github} quality={100} width={400} height={200}>
                                    <Button variant={"outline"} className={"w-full"}>GitHub Repo</Button>
                                </LinkPreview>
                            </div>
                        </div>
                    )
                }
                <div className="container overflow-hidden w-full h-full">
                    <SubHeading text="Images" className="capitalize"/>
                    <Carousel images={project.images}/>
                </div>
            </div>
        </section>
    );
};

export default Page;
