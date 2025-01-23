import React from 'react';
import ContactForm from "@/components/ContactForm";
import Heading from "@/components/Headings/Heading";

const Page = () => {
    return (
        <section className={"container"}>
            <Heading text={"Contact"} className={"text-center"}/>
            <ContactForm/>
        </section>
    );
};

export default Page;