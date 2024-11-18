import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
   return (
      <div className="flex flex-col md:flex-row justify-between gap-5 p-5">
         <DashboardCard
            title="Post"
            icon={
               <Newspaper
                  className="text-slate-500 dark:text-slate-200"
                  size={35}
               />
            }
            count={100}
         />
         <DashboardCard
            title="Categories"
            icon={
               <Folder
                  className="text-slate-500 dark:text-slate-200"
                  size={35}
               />
            }
            count={1000}
         />
         <DashboardCard
            title="Users"
            icon={
               <User className="text-slate-500 dark:text-slate-200" size={35} />
            }
            count={635}
         />
         <DashboardCard
            title="Comments"
            icon={
               <MessageCircle
                  className="text-slate-500 dark:text-slate-200"
                  size={35}
               />
            }
            count={1500}
         />
      </div>
   );
}
