'use client'

import {socialMediaItems} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";

const Footer = () => {
    const path = usePathname();
    return (

        <footer className={"container my-10"}>
            {
                path != "/maintenance" ? (
                    <div
                        className={"flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-y-4"}>
                        <p className={"font-poppins text-center flex flex-col md:block text-ld font-medium"}>© 2025 Farhan Keriwala. All rights
                            reserved. <Link href={"/privacy-policy"} className={"underline hover:text-blue-600"}>Privacy Policy</Link>
                        </p>
                        <div>
                            {
                                path != "/maintenance" && (
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
                                )
                            }
                        </div>
                    </div>
                ) : (<div
                    className={"flex flex-col-reverse md:flex-row items-center justify-center gap-y-4 py-8"}>
                    <p className={"font-poppins text-ld text-center font-medium"}>© 2025 Farhan Keriwala. All rights
                        reserved.</p>

                </div>)
            }
        </footer>);
};

export default Footer;
