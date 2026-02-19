import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "The Chai Coder",
  description: "The Chai Coder is a startup that helps businesses build their MVPs without the hassle of hiring a full-time developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
