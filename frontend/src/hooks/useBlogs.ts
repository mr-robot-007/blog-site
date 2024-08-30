import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";

function useBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      async function fetchBlogs() {
        try {
          setLoading(true);
          const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          });
          if (response.data.blogs) setBlogs(response.data.blogs);
        } catch (e) {
          console.log(e);
        }
  
        setLoading(false);
      }
      fetchBlogs();
    }, []);

    return { blogs, loading };
}

export default useBlogs
