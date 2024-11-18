import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
            <aside>Sidebar</aside>

            <div className="w-full flex flex-col">
               <Header />
               <main className="">{children}</main>
            </div>
         </body>
      </html>
   );
}
