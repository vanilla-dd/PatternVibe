import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ChampBlack = localFont({
  src: [
    {
      path: "./fonts/Champ-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Champ-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-champ-black",
});
const DMMono = localFont({
  src: [
    {
      path: "./fonts/DMMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-dm-mono",
});
const DMSans = localFont({
  src: [
    {
      path: "./fonts/DMSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/DMSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/DMSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ChampBlack.variable} ${DMSans.variable} ${DMMono.variable} font-dmSans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
