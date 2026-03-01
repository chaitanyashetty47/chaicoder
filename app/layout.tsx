import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "The Chai Coder",
  description: "The Chai Coder helps startups and businesses build scalable tech products. We handle product strategy, UI/UX design, and full-stack development to turn your idea into a launch-ready, growth-focused digital product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
