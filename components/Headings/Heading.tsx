import React from 'react';
import {cn} from "@/lib/utils";
import {monaSans} from "@/fonts";

const Heading = ({text, className}: { text: string, className?: string }) => {
    return (
        <p className={cn(`my-10 text-pretty text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl lg:text-balance ${monaSans.className}`, className)}>{text}</p>
    );
};

export default Heading;