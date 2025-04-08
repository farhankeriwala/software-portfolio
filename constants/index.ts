export const navItems: NavItem[] = [
    {
        href: "/",
        label: "Home",
        icon: '/assets/icons/home.svg'
    },
    {
        href: "/about",
        label: "About",
        icon: '/assets/icons/user.svg'

    },
    {
        href: "/projects",
        label: "Projects",
        icon: '/assets/icons/gallery.svg'
    },
    {
        href: "/contact",
        label: "Contact",
        icon: '/assets/icons/contact.svg'
    },
]

export const socialMediaItems: SocialMediaItem[] = [
    {
        url: 'https://www.instagram.com/farhan.keriwala/',
        label: 'Instagram',
        icon: '/assets/icons/instagram.svg'
    },
    {
        url: 'https://www.facebook.com/',
        label: 'Facebook',
        icon: '/assets/icons/facebook.svg'
    },
    {
        url: 'https://www.linkedin.com/in/farhankeriwala/',
        label: 'LinkedIn',
        icon: '/assets/icons/linkedin.svg'
    },
    {
        url: 'https://github.com/farhankeriwala',
        label: 'GitHub',
        icon: '/assets/icons/github.svg'
    },
]

export const heroTypeWriterWords = [
    {
        text: "I'm",
    },
    {
        text: "Farhan",

    },
    {
        text: "Keriwala",

    },
];

export const heroCodeBlockCode = `import React from 'react';
import {Separator} from "@/components/ui/separator";
import Image from "next/image";

const Home = () => {
    return (
        <section className={"container"}>
            <div className={"w-full flex flex-col"}>
                <h1 className={"heading"}>Farhan Keriwala</h1>
                <Image src={'/assets/images/profile.png'} alt={"profile"} width={50} height={50} className={"object-contain"}/>
                <h2 className={"font-bricolageGrotesque font-bold text-6xl"}>BSc Computer Science Student</h2>
                <div className={"flex items-center space-x-8"}>
                    <h3 className={"font-lato font-semiBold text-xl text-neutral-950"}>Upcoming Software Engineer</h3>
                    <Separator/>
                    <h3 className={"font-lato font-semiBold text-xl text-neutral-950"}>Aspiring Quantum Analyst</h3>
                    <Separator/>
                    <h3 className={"font-lato font-semiBold text-xl text-neutral-950"}>Freelance Web Developer</h3>
                </div>
            </div>
        </section>
    );
};

export default Home;`

export const experienceItems = [
    {
        position: 'Lab Demonstrator',
        company: 'Queen Mary University of London',
        time: 'Sep 2024 - Present',
        description: 'Guiding and supporting students through various lab assignments and coursework projects. Additionally, I collaborate closely with module organisers, lecturers, and leads to meticulously plan and execute each session, aiming to guarantee a meaningful and enriching learning experience for all students.'
    }
]