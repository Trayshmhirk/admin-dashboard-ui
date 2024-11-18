import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
   title: "Admin Dashboard UI",
   description: "An Admin Dashboard",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className="min-h-screen flex">
            <Sidebar />

            <div className="w-full flex flex-col">
               <Header />
               <main className="h-full w-full md:max-w-[1140px]">
                  {children}
               </main>
            </div>
         </body>
      </html>
   );
}
