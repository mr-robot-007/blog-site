import { useState } from "react";
import Header from "../components/Header";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CreateBlog() {
  const navigate = useNavigate();
  const [focuson, setFocuson] = useState("title");
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });
  console.log(focuson);
  async function handleSubmit() {
    if (blog.title.length < 3 || blog.content.length < 10) {
      alert(
        "title must be atleast 3 characters long and content must be atleast 10 characters long"
      );
      return;
    }
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, blog, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
      if(response.data.id) {
        console.log('blog created successfully');
        navigate('/blogs');
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <Header type="write" handleSubmit={handleSubmit} />
      <div className="m-4 sm:mx-[20%] ">
        <div className="flex items-center gap-3 text-3xl font-extralight">
          <IoIosAddCircleOutline
            size={30}
            className={`font-light ${focuson != "title" ? "opacity-0" : ""} `}
          />{" "}
          <input
            type="text"
            className=" focus:outline-none"
            placeholder="Title"
            onClick={() => setFocuson("title")}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
        </div>
        <div className="flex items-start gap-3 text-3xl mt-10 font-extralight">
          <IoIosAddCircleOutline
            className={`font-light ${focuson != "content" ? "opacity-0" : ""} `}
          />{" "}
          <textarea
            name=""
            id=""
            cols={10}
            rows={10}
            className="w-full focus:outline-none bg-red-100"
            placeholder="Tell your story..."
            onClick={() => setFocuson("content")}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
