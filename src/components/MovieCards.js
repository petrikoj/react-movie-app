import React, { useState, useEffect } from "react";
import KEYS from "../Config";
import { Box, SimpleGrid } from "@chakra-ui/react";
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
    <Box>
      <SimpleGrid columns={[1, null, 3, 4, 5]} spacing={"4"}>
        {console.log(movies)}
        {!loader ? (
          movies.map((movie, id) => {
            return (
              <Box key={id}>
                {/* To do: Find a way to integrate key/id into CardsLayout */}
                <CardsLayout movie={movie} />
              </Box>
            );
          })
        ) : (
          <p>loading ...</p>
        )}{" "}
        {error && <p>{error}</p>}
      </SimpleGrid>
    </Box>
  );
}

export default MovieCards;
