import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
   CommandSeparator,
   CommandShortcut,
} from "@/components/ui/command";
import {
   LayoutDashboard,
   Newspaper,
   Folders,
   CreditCard,
   Settings,
   User,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
   return (
      <aside className="hidden md:flex w-[300px] flex-shrink-0">
         <Command className="bg-secondary rounded-none">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
               <CommandEmpty>No results found.</CommandEmpty>
               <CommandGroup heading="Suggestions">
                  <CommandItem>
                     <Link href="/" className="flex items-center">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                     </Link>
                  </CommandItem>
                  <CommandItem>
                     <Link href="/post" className="flex items-center">
                        <Newspaper className="mr-2 h-4 w-4" />
                        Posts
                     </Link>
                  </CommandItem>
                  <CommandItem>
                     <Link href="/" className="flex items-center">
                        <Folders className="mr-2 h-4 w-4" />
                        Categories
                     </Link>
                  </CommandItem>
               </CommandGroup>

               <CommandSeparator />

               <CommandGroup heading="Settings">
                  <CommandItem>
                     <User className="mr-2 h-4 w-4" />
                     <span>Profile</span>
                     <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                     <CreditCard className="mr-2 h-4 w-4" />
                     <span>Billing</span>
                     <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                     <Settings className="mr-2 h-4 w-4" />
                     <span>Settings</span>
                     <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
               </CommandGroup>
            </CommandList>
         </Command>
      </aside>
   );
};

export default Sidebar;
