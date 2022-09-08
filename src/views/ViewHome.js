import React, { useState } from "react";
import MovieCards from "../components/MovieCards";
import { Text, Spinner } from "@chakra-ui/react";
import KEYS from "../Config";
import useFetch from "../hooks/useFetch";
import Pagination from "../components/Pagination";

function ViewHome() {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: movies,
    totalPages,
    totalResults,
    loading,
    error,
  } = useFetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${KEYS}&region=DE&page=${currentPage}`
  );
  return (
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
        Movies Currently Playing in German Theaters ({totalResults}):
      </Text>
      {!loading ? (
        <>
          <MovieCards movies={movies} />
          <Pagination totalPages={totalPages} />
        </>
      ) : (
        <Spinner
          color={"red.200"}
          emptyColor={"pink.50"}
          size={"xl"}
          speed={"0.7s"}
        />
      )}
      {error && <p>{error}</p>}
    </>
  );
}

export default ViewHome;
