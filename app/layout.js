import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CursorAurora from "@/components/CursorAurora";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Nikhil | Full Stack Developer",
  description:
    "Portfolio of Nikhil — a Full Stack Developer building modern web applications with React, Next.js, Node.js & more. Open to internship opportunities.",
  keywords: [
    "Nikhil",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Node.js",
    "Web Developer",
  ],
  authors: [{ name: "Nikhil", url: "https://github.com/nikkhillll" }],
  openGraph: {
    title: "Nikhil | Full Stack Developer",
    description:
      "Building end-to-end web experiences with React, Next.js, Node.js & more.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
  <html
  lang="en"
  className={`${poppins.variable} antialiased`}
>
    <body className={`${poppins.className} min-h-screen bg-background text-foreground relative`}>
        <CursorAurora />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
