import { Urbanist } from "next/font/google";
import NavBar from "@/components/nav/nav";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});


export const metadata = {
  title: "Shft",
  description: "Plan, publish, swap and track shifts easily!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
