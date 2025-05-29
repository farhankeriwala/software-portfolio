import {Karla, Mona_Sans} from "next/font/google";

export const monaSans = Mona_Sans({
    variable: "--font-mona-sans",
    subsets: ["latin"],
});

export const karla = Karla({
    variable: "--font-karla",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
})