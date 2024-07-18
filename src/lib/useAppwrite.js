import { useState, useEffect } from "react";

export const useAppwrite = (fn) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const fetchData = async () => {
    setisLoading(true);

    try {
      const response = await fn();

      if (!response) {
        throw Error;
      }

      setPosts(response);
    } catch (error) {
      throw new Error(error);
    } finally {
      setisLoading(false);
    }
  };

  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { posts, setPosts, isLoading, setisLoading, refetch };
};
