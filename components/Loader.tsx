import React from 'react';
import Image from "next/image";

const Loader: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-200 bg-opacity-75 z-50">
            <Image src={'/assets/icons/traffic.svg'} alt={'loading'} width={100} height={100} className={"animate-spin"}/>
        </div>
    );
};

export default Loader;
