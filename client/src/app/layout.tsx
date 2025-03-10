import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavbarWrapper from "@/components/shared/header/NavbarWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { TUserSession } from "@/types/session.user.type";
import Footer from "@/components/shared/footer/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sajib",
  description: "Welcome to Sajib  Portfolio",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions)
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarWrapper session={session as TUserSession}/>
          
          {children}
          <Footer/>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
