import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.simonjin.ca"),
  title: {
    default: "Simon (Shenghua) Jin — Robotics @ CMU · Software & Robotics",
    template: "%s · Simon Jin",
  },
  description:
    "Robotics student at Carnegie Mellon's School of Computer Science (incoming transfer from SFU Computing Science) building computer vision, ROS 2, embedded systems, and full-stack software. Seeking software engineering and robotics internships.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Simon Jin — Portfolio",
    title: "Simon (Shenghua) Jin — Robotics @ CMU · Software & Robotics",
    description:
      "Robotics student at Carnegie Mellon's School of Computer Science (incoming transfer from SFU) building computer vision, ROS 2, embedded systems, and full-stack software.",
    images: ["/images/portrait/portrait.jpg"],
  },
  twitter: {
    card: "summary",
    images: ["/images/portrait/portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.remove('dark');else document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen overflow-hidden`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
