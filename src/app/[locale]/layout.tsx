import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header/header";
import Aside from "@/components/shared/aside/aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebGoatNEXT",
  icons: "favicon.ico"
};

type RootLayoutProps = {
    children: React.ReactNode;
    params: {
        locale: never
    }
}
export default function RootLayout({
    children,
    params,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={params.locale}>
    <body className={inter.className}>
    <Header/>
    <main className={"flex"}>
        <Aside/>
        {children}
    </main>
    </body>
    </html>
  );
}
