import React, { useState } from "react";
import { Spinner, Text } from "@chakra-ui/react";
import KEYS from "../Config";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import MovieCards from "../components/MovieCards";
import Pagination from "../components/Pagination";

const ViewSearchResults = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  console.log("location ->", location);
  const {
    data: movies,
    totalPages,
    totalResults,
    loading,
    error,
  } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEYS}&query=${location.state.input}&page=${currentPage}`
  );
  return loading ? (
    <Spinner
      mt={"60"}
      mb={"60"}
      color={"red.200"}
      emptyColor={"pink.50"}
      size={"xl"}
      speed={"0.7s"}
    />
  ) : movies ? (
    <>
      <Text
        as={"h2"}
        fontSize={"2xl"}
        mt={"32"}
        fontWeight={"semibold"}
        textAlign={"center"}
        textTransform={"capitalize"}
        letterSpacing={"wide"}
      >
        {totalResults} Results for: "{location.state.input}":
      </Text>
      <MovieCards movies={movies} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  ) : (
    error && <p>error</p>
  );
};

export default ViewSearchResults;
