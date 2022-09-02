import React from "react";
import { Container, Image, Text, VStack, Tag, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CardsLayout = ({ movie }) => {
  const movieTitle = movie.title;
  const formattedMovieTitle = movieTitle.replace(/\s/g, "_");
  return (
    <Container>
      <VStack>
        <Link to={`/movie/${formattedMovieTitle}`} state={movie}>
          <Image
            border={"1px"}
            borderRadius={"lg"}
            boxShadow={"md"}
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
            alt={movie.title}
          />
          <Text textAlign={"center"} fontWeight={"semibold"}>
            {movie.title}
          </Text>
        </Link>
      </VStack>
      <Tooltip
        hasArrow
        label={"Average TMDB Voting"}
        fontSize={"md"}
        fontFamily={"Rubik"}
        fontWeight={"semibold"}
        bg={"gray.200"}
      >
        <Tag
          bg={
            movie.vote_average >= 8
              ? "green.300"
              : movie.vote_average >= 7
              ? "cyan.200"
              : movie.vote_average >= 6
              ? "yellow.300"
              : "red.400"
          }
          fontWeight={"semibold"}
        >
          {movie.vote_average}
        </Tag>
      </Tooltip>
    </Container>
  );
};

export default CardsLayout;
