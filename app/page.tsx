import {heroCodeBlockCode} from "@/constants";
import Stats from "@/components/Stats";
import {CodeBlock} from "@/components/ui/aceternity/CodeBlock";
import Introduction from "@/components/Introduction";
import Blog from "@/components/blog/Blog";

const Page: React.FC = () => {

    return (
        <section className="flex flex-col items-center justify-center min-h-screen">
            <CodeBlock
                highlightLines={[9, 11, 13, 15, 17]}
                language={"tsx"}
                filename={"FGK.tsx"}
                code={heroCodeBlockCode}
            />
            <Stats/>
            <Introduction/>
            <Blog/>
        </section>
    );
};

export default Page;
