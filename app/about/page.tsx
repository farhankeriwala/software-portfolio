import React from 'react'
import Heading from "@/components/Headings/Heading";
import EducationTimeline from '@/components/about/EducationTimeline';
import ExperienceTimeline from "@/components/about/ExperienceTimeline";

const About = () => {
    return (
        <div className={""}>
            <Heading text={"About"} className={"text-center"}/>
            <main className={"flex flex-col space-y-12"}>
                <EducationTimeline/>
                <ExperienceTimeline/>
            </main>
        </div>
    )
}

export default About