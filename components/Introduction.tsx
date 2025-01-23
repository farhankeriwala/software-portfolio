import React from 'react';
import Image from "next/image";

const Introduction = () => {
    return (
        <section className={"container bg-neutral-100 p-12 rounded-2xl"}>
            <div className={"grid gap-12 md:grid-cols-2"}>
                <div>
                    <Image src={'/assets/images/headshot.png'} alt={"headshot"} width={500} height={500} className={"rounded-3xl object-contain"}/>
                </div>
                <p className={"font-poppins text-lg sm:text-xl md:text-2xl"}>Hi there, I'm Farhan, an Penultimate Year MSc Computer Science Student at Queen Mary University of London</p>
            </div>
        </section>
    );
};

export default Introduction;