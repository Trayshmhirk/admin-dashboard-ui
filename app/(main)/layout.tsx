import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <Sidebar />
         <div className="flex-grow flex flex-col">
            <Header />
            <main className="h-full w-full md:max-w-[1140px] p-5">
               {children}
            </main>
         </div>
      </>
   );
};

export default MainLayout;
