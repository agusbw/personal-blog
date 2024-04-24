import { Montserrat, Schoolbell } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const schoolbell = Schoolbell({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-schoolbell",
});
