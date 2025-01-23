"use client";

import {navItems, socialMediaItems} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {Separator} from "../ui/separator";
import {usePathname} from "next/navigation";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const path = usePathname();
  return (
      <header className={"container w-full sticky top-0 left-0 z-50 bg-opacity-25 bg-white backdrop-blur-md backdrop-filter"}>
        <nav
            className={"mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"}>
          <div className={"flex lg:flex-1"}>
            <Link href="/" className={"-m-1.5 p-1.5"}>
              <span className={"sr-only"}>FGK</span>
              <h1 className={"font-bricolageGrotesque font-medium text-center text-neutral-900 text-5xl"}>
                FGK
              </h1>
            </Link>
          </div>
          <div className={"hidden md:flex items-center space-x-4"}>
            {path != '/maintenance' && navItems.map((item: NavItem) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 text-neutral-900 text-lg hover:bg-neutral-200 px-4 py-2 rounded-lg ${
                        path === item.href ? "bg-neutral-100" : ""
                    }`}
                >
                  <Image src={item.icon} alt={item.label} width={20} height={20}/>
                  <span>{item.label}</span>
                </Link>
            ))}
          </div>
          <div className={"block md:hidden"}>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <Image
                    src={"/assets/icons/menu.svg"}
                    alt="menu"
                    width={28}
                    height={28}
                />
              </SheetTrigger>
              <SheetContent className={"md:hidden"}>
                <SheetHeader className={"md:hidden"}>
                  <SheetTitle className={"md:hidden"}>
                    <Link href="/" className={"-m-1.5 p-1.5"}>
                      <span className={"sr-only"}>FGK</span>
                      <h1 className={"font-bricolageGrotesque font-medium text-center text-neutral-900 text-5xl"}>
                        FGK
                      </h1>
                    </Link>
                  </SheetTitle>
                  <Separator/>
                  <div className={"mt-2 flex flex-col space-y-2"}>
                    {navItems.map((item: NavItem) => (
                        <Link
                            onClick={() => setOpen(false)}
                            key={item.href}
                            href={item.href}
                            className={`flex items-center space-x-2 text-neutral-900 text-lg hover:bg-neutral-200 px-4 py-2 rounded-lg ${
                                path === item.href ? "bg-neutral-100" : ""
                            }`}
                        >
                          <Image
                              src={item.icon}
                              alt={item.label}
                              width={20}
                              height={20}
                          />
                          <span>{item.label}</span>
                        </Link>
                    ))}
                  </div>
                </SheetHeader>
                <Separator className={"my-6"}/>
                <SheetFooter className={"flex flex-col space-y-2"}>
                  {socialMediaItems.map((item: SocialMediaItem) => (
                      <Link
                          key={item.label}
                          href={item.url}
                          className={"flex items-center space-x-2 text-neutral-900 text-lg hover:bg-neutral-100 px-4 py-2 rounded-lg"}
                      >
                        <Image
                            src={item.icon}
                            alt={item.label}
                            width={20}
                            height={20}
                        />
                        <span>{item.label}</span>
                      </Link>
                  ))}
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
  );
};

export default Header;