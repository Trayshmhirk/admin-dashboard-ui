import type { Metadata } from "next";
import "./globals.css";
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
               {children}
               <Toaster />
            </ThemeProvider>
         </body>
      </html>
   );
}
