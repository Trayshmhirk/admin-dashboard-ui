import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
   title: string;
   count: number;
   icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
   return (
      <Card className="w-full bg-slate-100 dark:bg-slate-800 p-4">
         <CardContent className="flex flex-col gap-4">
            <h3 className="text-3xl text-center font-bold text-slate-500 dark:text-slate-200">
               {title}
            </h3>
            <div className="flex gap-4 justify-center items-center">
               {icon}
               <p className="text-2xl font-semibold text-slate-500 dark:text-slate-200">
                  {count}
               </p>
            </div>
         </CardContent>
      </Card>
   );
};

export default DashboardCard;
