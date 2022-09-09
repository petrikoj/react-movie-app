import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Button,
  Image,
  Text,
  VStack,
  HStack,
  Tag,
  Tooltip,
} from "@chakra-ui/react";
import { AddIcon, ChatIcon } from "@chakra-ui/icons";
import { NeedToLoginAlert } from "./Helpers";

const CardsLayout = ({ movie }) => {
  const movieTitle = movie.title;
  const newTitle = movieTitle
    .replace(/\s/g, "-")
    .replace(":", "")
    .toLowerCase();

  return (
    <Container>
      <VStack>
        <Link to={`/movie/${newTitle}`} state={movie}>
          <Image
            border={"1px"}
            borderRadius={"lg"}
            boxShadow={"md"}
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
            alt={movie.title}
            mt={"3"}
            mb={"1.5"}
          />
        </Link>
        <Box>
          <VStack>
            <Text
              textAlign={"center"}
              fontWeight={"semibold"}
              fontSize={"lg"}
              color={"blackAlpha.800"}
            >
              {movie.title}
            </Text>
            <HStack>
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
                      : movie.vote_average >= 5
                      ? "purple.100"
                      : "gray.400"
                  }
                  fontWeight={"semibold"}
                  size={"md"}
                  color={"blackAlpha.800"}
                >
                  {movie.vote_average === 0 ? "-" : movie.vote_average}
                </Tag>
              </Tooltip>
              <Button
                size={"xs"}
                bg={"gray.200"}
                color={"blackAlpha.800"}
                onClick={NeedToLoginAlert}
              >
                <ChatIcon color={"blackAlpha.800"} />
              </Button>
              <Button size={"xs"} bg={"gray.200"}>
                <AddIcon color={"blackAlpha.800"} />
              </Button>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CardsLayout;
