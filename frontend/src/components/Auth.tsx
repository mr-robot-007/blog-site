import { SignupType } from "@anujgusain1083/medium-common-app";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export default function Auth({ type }: { type: "signup" | "signin" }) {
  const [postInputs, setPostInputs] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();


  async function sendRequest() {
    console.log(postInputs);
    const url = `${BACKEND_URL}/api/v1/user/${
      type == "signup" ? "signup" : "signin"
    }`;
    console.log(url);
    try {
      const response = await axios.post(url, postInputs);
      const jwt = response.data.jwt;
      console.log(jwt);
      if (jwt) {
        localStorage.setItem("token", `Bearer ${jwt}`);
        navigate("/blogs");
      }
    } catch (e) {
      //alert user here request failed
      console.log(e);
      alert("Error while signing/up");
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center w-screen lg:w-auto ">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          {type == "signup" ? "Create an account" : "Log in to your account"}
        </h1>
        <span className="text-slate-500 font-light">
          {type == "signup"
            ? "Already have an account?"
            : "Don’t have an account?"}{" "}
          <Link
            to={type == "signup" ? "/signin" : "/signup"}
            className="text-gray-700 underline"
          >
            {type == "signup" ? "Login" : "Sign up"}
          </Link>
        </span>
      </div>
      <div className="w-[50%] flex flex-col gap-3 pt-4">
        {type == "signup" && (
          <LabelledInput
            label="Name"
            placeholder="John"
            onChange={(e) => {
              setPostInputs({ ...postInputs, name: e.target.value });
            }}
          />
        )}
        <LabelledInput
          label="Email"
          placeholder="john@example.com"
          onChange={(e) => {
            setPostInputs({ ...postInputs, email: e.target.value });
          }}
        />
        <LabelledInput
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => {
            setPostInputs({ ...postInputs, password: e.target.value });
          }}
        />

        <button
          type="button"
          onClick={sendRequest}
          className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {type === "signup" ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
}

interface LabelledInputProps {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function LabelledInput({
  label,
  placeholder,
  type = "text",
  onChange,
}: LabelledInputProps) {
  return (
    <div className="">
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm  font-bold text-gray-900 "
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}
