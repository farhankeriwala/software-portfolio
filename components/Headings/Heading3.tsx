import React from 'react';
import {cn} from "@/lib/utils";

const Heading3 = ({text, className}: { text: string, className?: string }) => {
    return (
        <p className={cn("my-8 text-pretty text-md sm:text-xl font-lato font-medium tracking-tight text-neutral-900 lg:text-balance", className)}>{text}</p>
    );
};

export default Heading3;