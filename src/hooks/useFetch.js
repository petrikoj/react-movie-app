import { useEffect, useState } from "react";
import MovieCards from "../components/MovieCards";

function useFetch(url) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setMovies(result);
    } catch (error) {
      setError(error);
    }
  };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return { movies, error, fetchData };
}

export default useFetch;
