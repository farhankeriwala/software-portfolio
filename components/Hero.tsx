import React from 'react';
import {Separator} from "@/components/ui/separator";
import Image from "next/image";

const Home = () => {
    return (
        <section className={"container"}>
            <div className={"w-full flex flex-col"}>
                <h1 className={"heading"}>Farhan Keriwala</h1>
                <Image src={'/assets/images/profile.png'} alt={"profile"} width={50} height={50} className={"object-contain"}/>
                <h2 className={"font-bricolageGrotesque font-bold text-6xl"}>MSc Computer Science Student</h2>
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

export default Home;