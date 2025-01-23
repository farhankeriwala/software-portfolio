import React from 'react';
import {cn} from "@/lib/utils";

const SubHeading = ({text, className}: { text: string, className?: string }) => {
    return (
        <p className={cn("my-8 text-pretty text-2xl font-lato font-medium tracking-tight text-neutral-900 sm:text-3xl lg:text-balance", className)}>{text}</p>
    );
};

export default SubHeading;