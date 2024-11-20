import ThemeToggler from "@/components/ThemeToggler";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="relative h-screen w-screen flex justify-center items-center">
         <div className="absolute bottom-7 right-5">
            <ThemeToggler />
         </div>

         {children}
      </div>
   );
};

export default AuthLayout;
