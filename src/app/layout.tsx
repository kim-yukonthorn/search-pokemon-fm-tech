import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ApolloClientProvider from "@/components/apollo-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokémon Search",
  description: "Search for Pokémon information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ApolloClientProvider>{children}</ApolloClientProvider>
      </body>
    </html>
  );
}
