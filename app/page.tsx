import {heroCodeBlockCode} from "@/constants";
import Stats from "@/components/Stats";
import {CodeBlock} from "@/components/ui/aceternity/CodeBlock";
import Introduction from "@/components/Introduction";

const Page: React.FC = () => {

    return (
      <section className="flex flex-col items-center justify-center min-h-screen">
        <CodeBlock
          highlightLines={[9, 11, 13, 15, 17]}
          language={"tsx"}
          filename={"Home.tsx"}
          code={heroCodeBlockCode}
        />
        <Stats />
        <Introduction />        
      </section>
    );
};

export default Page;
