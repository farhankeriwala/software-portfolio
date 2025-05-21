import React from 'react';
import {cn} from "@/lib/utils";
import {monaSans} from "@/fonts";

const SubHeading = ({text, className}: { text: string, className?: string }) => {
    return (
        <p className={cn(`my-8 text-pretty text-2xl ${monaSans.className} font-medium tracking-tight text-neutral-900 sm:text-3xl lg:text-balance`, className)}>{text}</p>
    );
};

export default SubHeading;