import { CiBookmarkPlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  blogId: string;
}
export default function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
  blogId,
}: BlogCardProps) {
  const navigate = useNavigate();
  console.log(blogId);
  return (
    <div
      onClick={() => navigate(`/blog/${blogId}`)}
      className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-gray-300 pb-8 hover:bg-gray-50 rounded-md "
    >
      <div className="flex flex-col ">
        <div className="flex items-center gap-2 ">
          <MdOutlineAccountCircle />
          <span className="font-semibold">{authorName}</span> .{" "}
          <span className="text-gray-500">{publishedDate}</span>
        </div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{content.substring(0, 300)}</p>

        <div className="flex justify-between items-center  mt-8">
          <div className="flex gap-2 items-center ">
            <span className="bg-gray-200 p-1 rounded-lg font-semibold">
              Side Hustle
            </span>
            <span>5 min read</span>
          </div>
          <div className="flex gap-2 items-center text-xl">
            <CiBookmarkPlus />
            <CiCircleMinus />
            <SlOptions />
          </div>
        </div>
      </div>
      <img
        className=" sm:block hidden w-28 h-28 object-cover"
        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*zrJDoogUHHBtosKsx7afOg.png"
        alt=""
      />
    </div>
  );
}
