import { PiHandsClappingThin } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import { SlCloudUpload } from "react-icons/sl";
import { CiBookmarkPlus } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";
import Header from "../components/Header";
import useBlog from "../hooks/useBlog";
import { useNavigate, useParams } from "react-router-dom";


export default function Blog() {
  const blogId = useParams().id;
  const { blog, loading } = useBlog(blogId);
  const navigate = useNavigate();
  if (loading == false && blog == undefined)
    return (
      <h1>
        Blog not found.{" "}
        <span className="text-blue-600" onClick={() => navigate("/")}>
          Go to home
        </span>
      </h1>
    );
  return (
    <>
      <Header type="view" handleSubmit={() => {}} />
      <div className=" m-4 sm:mx-[20%] ">
        <h1 className="text-2xl font-bold">
          {loading
            ? "loading"
            : blog?.title ||
              "How much doesn it cost to host a Django application? a 2024 tutorialf for beginners."}
        </h1>
        <div className="flex items-center gap-2 my-4">
          <img
            className="w-10 h-10 rounded-full"
            src="https://miro.medium.com/v2/resize:fill:110:110/1*Ib17NOwNBJKjjdee61nNBQ.jpeg"
            alt=""
          />
          <div className="flex flex-col ">
            <p>
              {loading ? "loading" : blog?.author?.name || "Anuj Gusain"} {". "}
              <span className="text-green-600">Follow</span>
            </p>
            <span className="text-gray-500 text-sm">
              {" "}
              5 min read .{" "}
              {loading ? "loading" : blog?.publishedDate || "May 22, 2022"}
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className=" flex items-center gap-2 font-light">
            <PiHandsClappingThin /> 37 {". "}
            <FaRegComment /> 5
          </div>
          <div className=" flex items-center gap-5 font-light">
            <CiBookmarkPlus />
            <MdOutlinePlayCircle />
            <SlCloudUpload />
            <SlOptions />
          </div>
        </div>

        <img
          className="w-full object-fill my-8"
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*lFpCgsNTL_JX1Ixa"
        />

        <div>
          {loading
            ? "loading"
            : blog?.content ||
              `First, I’ll not cover all options for hosting a Django application,
          I’ll only show you some things I have done so that you may use this or
          not. Let's go straight to the point. AWS To host your Django
          application on AWS, you can use an EC2 instance. First, you need to
          understand what type of instance you need. You have a free option, for
          one year, with a “t2.micro” instance. This size is enough for a
          portfolio, for example, that does not receive more than dozens of
          viewers per day. But if your website, has more access or has more
          complex processes, you may need to use a more complex instance, you
          can choose based on your demand, for example, instances focused on
          more memory, a larger bandwidth, or even more CPUs. You can check some
          options here. Some prices:`}
        </div>
      </div>
    </>
  );
}
