import { TypewriterEffectSmooth } from "@/components/ui/TypeWritter";
import { heroTypeWriterWords } from "@/constants";

const Page = async () => {

    return (
        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)]">
            <div className="text-center flex flex-col items-center">
                <h1 className="md:text-4xl font-bricolageGrotesque font-semibold mb-2 lg:text-6xl text-2xl">Farhan
                    Keriwala</h1>
                <p className="md:text-2xl text-lg font-lato font-semibold text-emerald-600">Upcoming Software Engineer |
                    Aspirational Quantum Analyst</p>
                <TypewriterEffectSmooth words={heroTypeWriterWords} className={"my-12 font-lato"}/>
            </div>
        </section>
    );
};

export default Page;
