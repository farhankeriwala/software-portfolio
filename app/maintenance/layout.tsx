import type { Metadata } from "next";
import { Poppins, Lato, Bricolage_Grotesque } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolageGrotesque",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farhan Keriwala",
  description: "Farhan Keriwala's Software Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${poppins.variable} ${bricolageGrotesque.variable} flex flex-col min-h-screen antialiased`}
      >
        <main className="flex-grow container mx-auto">{children}</main>
        <footer className={"container mb-12 mt-20"}>
        <div
            className={"flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-y-4 py-8"}>
            <p className={"font-poppins text-ld font-medium"}>© 2025 Farhan Keriwala. All rights reserved.</p>
        </div>
    </footer>
      </body>
    </html>
  );
}
