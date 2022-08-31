import React from "react";
import { Container, Image, Text } from "@chakra-ui/react";

const CardsLayout = ({ movie }) => {
  return (
    <Container>
      <Image
        borderRadius={"lg"}
        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        alt=""
      />
      <Text>{movie.title}</Text>
    </Container>
  );
};

export default CardsLayout;
