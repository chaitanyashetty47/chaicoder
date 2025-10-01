import type { Metadata } from "next";
import { Sansation } from "next/font/google";
import "./globals.css";

const sansation = Sansation({
  variable: "--font-sansation",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

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
      <body
        className={`${sansation.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
