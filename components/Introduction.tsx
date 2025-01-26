import React from 'react';
import Image from "next/image";

const Introduction = () => {
    return (
        <section className={"container bg-neutral-100 p-12 rounded-2xl"}>
            <div className={"grid gap-12 md:grid-cols-2 items-center justify-center"}>
                <div className='flex items-center justify-center'>
                    <Image src={'/assets/images/headshot.png'} alt={"headshot"} width={500} height={500} className={"rounded-3xl object-contain"}/>
                </div>
                <p className={"font-poppins text-base sm:text-lg md:text-xl lg:text-2xl"}>Hi there I&apos;m Farhan, an aspiring Software Engineer and Quantum Analyst currently pursuing an MSc in Computer Science at Queen Mary University of London. <br/>With a strong focus on Web and Object-Oriented Programming, I&apos;m passionate about developing innovative solutions and building robust applications. <br/>Looking ahead into 2025, I plan to dive deeper into Machine Learning, Deep Learning, and Neural Networks, while also working on my own compiler and exploring Security Engineering.</p>
            </div>
        </section>
    );
};

export default Introduction;