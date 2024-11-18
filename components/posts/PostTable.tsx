import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
   TableCaption,
} from "@/components/ui/table";
import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/post";

type PostTableProps = {
   limit?: number;
   title?: string;
};

const PostTable = ({ limit, title }: PostTableProps) => {
   // sort post in desc order  based on date
   const sortedPosts: Post[] = [...posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
   );

   // filter posts by limit
   const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

   return (
      <div className="flex flex-col gap-4">
         <h3 className="text-2xl font-semibold">{title ? title : "Posts"}</h3>

         <Table>
            <TableCaption>A list of recent posts.</TableCaption>

            <TableHeader>
               <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Author</TableHead>
                  <TableHead className="text-right hidden md:table-cell">
                     Date
                  </TableHead>
                  <TableHead className="text-center">View</TableHead>
               </TableRow>
            </TableHeader>

            <TableBody>
               {filteredPosts.slice(0, limit).map((post: Post) => (
                  <TableRow key={post.id}>
                     <TableCell>{post.title}</TableCell>
                     <TableCell className="hidden md:table-cell">
                        {post.author}
                     </TableCell>
                     <TableCell className="text-right hidden md:table-cell">
                        {post.date}
                     </TableCell>
                     <TableCell className="text-center">
                        <Link
                           href={`/post/${post.id}`}
                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
                        >
                           Edit
                        </Link>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
   );
};

export default PostTable;
