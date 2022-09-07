import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import CardsLayout from "./CardsLayout";
// import "../App.css";

const MovieCards = ({ movies }) => {
  return (
    <Box
      mx={"10"}
      mt={"12"}
      borderWidth={"thin"}
      borderRadius={"lg"}
      borderColor={"blackAlpha.800"}
      pt={"4"}
      pb={"4"}
      boxShadow={"sm"}
    >
      <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} spacingX={"4"} spacingY={"8"}>
        {movies.map((movie, id) => {
          return (
            <Box key={id}>
              {/* To do: Find a way to integrate key/id into CardsLayout */}
              <CardsLayout movie={movie} />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default MovieCards;
