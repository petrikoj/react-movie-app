import React from "react";
import MovieCards from "../components/MovieCards";
import { Heading } from "@chakra-ui/react";
import KEYS from "../Config";
import useFetch from "../hooks/useFetch";

const ViewSearchResults = (input) => {
  const {
    data: movies,
    loading,
    error,
  } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEYS}&query=${input}`
  );
  return (
    <>
      <Heading>Results for "{input}"</Heading>
      <MovieCards movies={movies} />
    </>
  );
};

export default ViewSearchResults;
