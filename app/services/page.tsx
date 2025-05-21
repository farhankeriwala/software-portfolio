import React from 'react'
import Heading from "@/components/Headings/Heading";
import SubHeading from "@/components/Headings/SubHeading";

const Page = () => {
    return (
        <main className={"container p-4"}>
            <Heading text={'Services'} className={"text-center"}/>
            <section>
                <SubHeading text={'Web Development'}/>
            </section>
        </main>
    )
}
export default Page
