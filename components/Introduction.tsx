import React from 'react';
import Image from "next/image";

const Introduction = () => {
    return (
        <section className={"container bg-neutral-100 p-12 rounded-2xl"}>
            <div className={"grid gap-12 md:grid-cols-2 items-center justify-center"}>
                <div className='flex items-center justify-center'>
                    <Image src={'/assets/images/headshot.png'} alt={"headshot"} width={550} height={550} className={"rounded-ee-3xl rounded-ss-3xl object-contain"}/>
                </div>
                <p className={"font-poppins text-base sm:text-lg md:text-xl lg:text-2xl"}>
                    Hi there I&apos;m Farhan, an aspiring Software Engineer and Quantum Analyst having currently completed my final semester of my BSc
                    in Computer Science at Queen Mary University of London. <br/><br/>With a strong grasp on Web and
                    Object-Oriented Programming, I&apos;m passionate about developing innovative solutions and building
                    robust applications.
                </p>
            </div>
        </section>
    );
};

export default Introduction;