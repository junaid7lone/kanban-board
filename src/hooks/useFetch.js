import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApiData = () => {
    setLoading(true);
    try {
      axios
        .get(API_URL)
        .then((res) => {
          if (res.status !== 200) {
            throw new Error({ message: "Something went wrong" });
          }

          setData(res?.data);
        })
        .catch((err) => {
          throw new Error(err);
        });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchApiData();
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return { data, loading, error, refetch };
};

export default useFetch;
