import React, { useState, useEffect } from "react";
import KEYS from "../Config";
import CardsLayout from "./CardsLayout";

function MovieCards() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${KEYS}&region=DE`
      );
      const result = await response.json();
      setMovies(result.results);
      setLoader(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {console.log(movies)}
      <h2>Currently playing:</h2>
      {!loader ? (
        movies.map((movie, i) => {
          return (
            <>
              <CardsLayout movie={movie} i={i} />
            </>
          );
        })
      ) : (
        <p>loading ...</p>
      )}{" "}
      {error && <p>{error}</p>}
    </div>
  );
}

export default MovieCards;
