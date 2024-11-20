import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

type BackButtonProps = {
   text: string;
   link: string;
};

const BackButton = ({ text, link }: BackButtonProps) => {
   return (
      <Link
         href={link}
         className="text-gray-500 hover:underline flex items-center gap-2 font-bold self-start"
         replace
      >
         <ArrowLeftCircle size={18} />
         {text}
      </Link>
   );
};

export default BackButton;
