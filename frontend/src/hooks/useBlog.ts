import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface BlogType {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
  created_at: string;
  updated_at: string;
  publishedDate: string;
}

function useBlog(id: string | undefined) {
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        });
        if (response.data.blog) setBlog(response.data.blog);
        else setBlog(null);
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    }
    fetchBlogs();
  }, [id]);

  return { blog, loading };
}

export default useBlog;
