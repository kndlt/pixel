import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixel - Digital Forest Spirit",
  description: "A mystical AI chat interface where you commune with Pixel, the ancient spirit of the digital forest.",
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
