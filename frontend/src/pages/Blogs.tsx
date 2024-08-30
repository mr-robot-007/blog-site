import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { IoAdd } from "react-icons/io5";
import useBlogs from "../hooks/useBlogs";
import Header from "../components/Header";

interface blogType {
  title: string;
  author: {
    name: string;
  };
  content: string;
  publishedDate: string;
  id:string;
}

export default function Blogs() {
  const { blogs, loading } = useBlogs();
  const navigate = useNavigate();
  return (
    <>
    <Header type="view" handleSubmit={() => {}} />
    <div className=" m-20 flex flex-col gap-7">
      
      <div className="flex justify-start items-center space-x-4 border-b ">
        <IoAdd onClick={() => navigate("/blog/create")} />
        <button className="relative py-2 text-black font-medium focus:outline-none border-b-2 border-transparent hover:border-transparent">
          For you
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black"></span>
        </button>
        <button className="relative py-2 text-gray-500 font-medium focus:outline-none border-b-2 border-transparent hover:border-gray-300">
          Following
        </button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        blogs.map((blog: blogType, i) => (
          <BlogCard
            key={i}
            title={blog.title}
            authorName={blog.author.name}
            content={blog.content}
            publishedDate={blog.publishedDate}
            blogId={blog.id}
          />
        ))
      )}

      {/* {Array.from({ length: 5 }).map((key, i) => (
        <BlogCard
          key={i}
          authorName="anuj gusain"
          title="this is title"
          content="But here’s the thing. I didn’t want to spend hours writing content in my basement. Nor did I want to hire cheap writers from 3rd world countries.
    I decided to go with the most cost-effective solution: AI.
    For the past eight months, AI has been running my SEO blog. It never called in sick, never missed a deadline, it’s just sitting there quietly, ready for its next task."
          publishedDate="Dec,3,2023"
        />
      ))} */}
    </div>
    
    </>
  );
}
