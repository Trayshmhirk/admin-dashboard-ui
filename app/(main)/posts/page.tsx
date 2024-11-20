import BackButton from "@/components/BackButton";
import PostTable from "@/components/posts/PostTable";
import PostsPagination from "@/components/posts/PostsPagination";

const PostsPage = () => {
   return (
      <div className="flex flex-col gap-4">
         <BackButton text="Go back" link="/" />
         <PostTable />
         <PostsPagination />
      </div>
   );
};

export default PostsPage;
