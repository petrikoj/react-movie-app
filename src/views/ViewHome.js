import React from "react";
import Navbar from "../components/Navbar";
import MovieCards from "../components/MovieCards";
import { Box } from "@chakra-ui/react";

function ViewHome() {
  return (
    <Box>
      <Navbar />
      <Box as={"h1"} fontSize={"2xl"}>
        Currently playing:
      </Box>
      <MovieCards />
    </Box>
  );
}

export default ViewHome;
