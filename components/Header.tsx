import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
   return (
      <header className="w-full bg-primary dark:bg-slate-700 text-primary-foreground py-3 px-6 flex items-center justify-between">
         <Link href="/" className="text-xl font-medium">
            Logo
         </Link>

         <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
               <Avatar>
                  <AvatarImage
                     src="https://github.com/shadcn.png"
                     alt="shadcn"
                  />
                  <AvatarFallback className="text-black font-medium">
                     FM
                  </AvatarFallback>
               </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
               <DropdownMenuLabel>My Account</DropdownMenuLabel>
               <DropdownMenuSeparator />
               <DropdownMenuItem>
                  <Link href="/profile">Profile</Link>
               </DropdownMenuItem>
               <DropdownMenuItem>
                  <Link href="/auth">Log out</Link>
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </header>
   );
};

export default Header;
