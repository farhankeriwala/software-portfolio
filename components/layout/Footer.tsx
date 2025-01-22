import {socialMediaItems} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (<footer className={"container mb-12 mt-20"}>
        <div
            className={"flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-y-4 py-8"}>
            <p className={"font-poppins text-ld font-medium"}>© 2025 Farhan Keriwala. All rights reserved.</p>
            <div className={"flex items-center space-x-6 md:space-x-8"}>
                {socialMediaItems.map((item: SocialMediaItem) => (<Link
                    href={item.url}
                    key={item.label}
                    className={"hover:scale-105"}
                    target="_blank"
                >
                    <Image src={item.icon} alt={item.label} width={28} height={28}/>
                </Link>))}
            </div>
        </div>
    </footer>);
};

export default Footer;
