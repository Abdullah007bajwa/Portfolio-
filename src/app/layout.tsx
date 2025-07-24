'use client';

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { CursorProvider } from "@/components/cursor";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { cn } from "../lib/utils";
import Header from "@/components/Header";
import { AIChatWidget } from "@/components/AIChatWidget";
import LeftSideBar from "@/components/LeftSideBar";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";
import { ProjectSkeleton, TextSkeleton, ButtonSkeleton } from "@/components/skeletons";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // State to track if the page has loaded
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate an async loading process (adjust time as needed)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ViewTransitions>
        <html lang="en" suppressHydrationWarning>
          <head>
            <title>Abdullah&apos;s Portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
              name="description"
              content="Abdullah&apos;s Portfolio showcasing projects, skills, and experience in AI and software development."
            />
          </head>
          <body className={cn("font-sans antialiased", inter.variable)}>
            <CursorProvider>
              <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                <Header />
                {/* Render the left sidebar with social icons and resume button */}
                <LeftSideBar />
                {/* Show loading skeleton until loaded */}
                {!isLoaded ? (
                  <div className="min-h-screen flex flex-col justify-center items-center space-y-4 p-4">
                    <ProjectSkeleton />
                    <TextSkeleton lines={3} />
                    <ButtonSkeleton />
                  </div>
                ) : (
                  <>
                    {children}
                    <AIChatWidget />
                  </>
                )}
              </ThemeProvider>
            </CursorProvider>
          </body>
        </html>
      </ViewTransitions>
    </QueryClientProvider>
  );
}
