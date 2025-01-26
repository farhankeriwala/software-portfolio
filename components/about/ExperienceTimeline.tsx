import React from 'react';
import SubHeading from "@/components/Headings/SubHeading";
import {formatSanityDate, getExperience} from "@/lib/utils";
import Image from "next/image";
import {urlFor} from "@/lib/sanity/imageUrl";

const ExperienceTimeline = async () => {
    const experiences = await getExperience()
    return (
        <div>
            <SubHeading text={"Experience"}/>
            <ol className="relative border-s border-neutral-200 dark:border-neutral-700">
                {
                    experiences ? experiences.map((experience => (
                        <li key={experience._id} className="mb-10 ms-6">
                            <span
                                className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8 ring-white dark:ring-neutral-900 dark:bg-blue-900">
                                <Image src={urlFor(experience.companyLogo.asset).url()} alt={""} width={200} height={200}/>
                            </span>
                            <h3 className="flex items-center mb-1 text-xl font-semibold text-neutral-900 dark:text-white">{experience.position} - {experience.company}</h3>
                            <time
                                className="block mb-2 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">{formatSanityDate(experience.startDate)} - {experience.endDate ? formatSanityDate(experience.endDate) : "Present"}
                            </time>
                            <p className="mb-4 text-base font-normal text-neutral-500 dark:text-neutral-400">{experience.description}</p>

                        </li>
                    )))
                        : <div>
                            <p>No experience to show</p>
                        </div>
                }
            </ol>
            <a href="/assets/resume.pdf"
               download={"farhan_keriwala_resume.pdf"}
               className="inline-flex items-center px-4 py-2 my-12 text-sm font-medium text-neutral-900 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-neutral-100 focus:text-blue-700 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-600 dark:hover:text-white dark:hover:bg-neutral-700 dark:focus:ring-neutral-700">
                <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                    <path
                        d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                </svg>
                Download Resume</a>
        </div>
    );
};

export default ExperienceTimeline;