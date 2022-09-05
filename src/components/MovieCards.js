import React, { useState, useEffect } from "react";
import KEYS from "../Config";
import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardsLayout from "./CardsLayout";
// import "../App.css";

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
    <Box mx={"10"} mt={"44"}>
      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacingX={"4"} spacingY={"8"}>
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
          <Spinner
            color={"orange.200"}
            emptyColor={"yellow.100"}
            size={"xl"}
            speed={"0.7s"}
          />
        )}{" "}
        {error && <p>{error}</p>}
      </SimpleGrid>
    </Box>
  );
}

export default MovieCards;
