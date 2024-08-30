import { CiSearch } from "react-icons/ci";
import { LuPenSquare } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
export default function Header({
  type,
  handleSubmit
}: {
  type: string;
  handleSubmit: () => void;
}) {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/signin");
  }
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex gap-3 items-center ">
        <h1 className="text-3xl font-bold" onClick={() => navigate("/blogs")}>Silly Blog</h1>
        {type == "view" ? (
          <div className="border px-2 py-1 bg-gray-200 font-light rounded-2xl flex gap-2 items-center">
            <CiSearch />
            <input
              className="bg-gray-200 focus:outline-none border-gray-200 b-0 hidden sm:block"
              type="text"
              placeholder="Search"
            />
          </div>
        ) : (
          <p className="font-light">Draft in Anuj Gusain</p>
        )}
      </div>
      <div className="flex items-center gap-3">
        {type == "view" ? (
          <p
            className="flex gap-1 items-center"
            onClick={() => console.log("write")}
          >
            <LuPenSquare /> <span className="hidden sm:block">Write</span>
          </p>
        ) : (
          <p
            className="flex gap-1 items-center"
            onClick={() => console.log("write")}
          >
            <span
              className="bg-green-500 text-white rounded-xl px-2 py-1"
              onClick={handleSubmit}
            >
              Publish
            </span>
          </p>
        )}

        <SlOptions />
        <FaRegBell />
        <RiAccountCircleFill className="text-2xl" />
        <IoIosLogOut className="text-xl" onClick={handleLogout}/>
        
      </div>
    </div>
  );
}
