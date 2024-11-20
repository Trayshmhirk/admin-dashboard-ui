import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

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
         <body className="min-h-screen w-full flex">
            <ThemeProvider
               attribute="class"
               defaultTheme="light"
               enableSystem={true}
               storageKey="dashboard-theme"
            >
               <Sidebar />

               <div className="flex-grow flex flex-col">
                  <Header />
                  <main className="h-full w-full md:max-w-[1140px] p-5">
                     {children}
                  </main>
               </div>

               <Toaster />
            </ThemeProvider>
         </body>
      </html>
   );
}
