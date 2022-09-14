import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Button,
  IconButton,
  Image,
  Text,
  VStack,
  HStack,
  Tag,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { AddIcon, ChatIcon } from "@chakra-ui/icons";
import { NeedToLoginAlert, ScrollToTop } from "./Helpers";

const CardsLayout = ({ movie }) => {
  const movieTitle = movie.title;
  const newTitle = movieTitle
    .replace(/\s/g, "-")
    .replace(":", "")
    .toLowerCase();

  return (
    <Container>
      <VStack>
        <Link to={`/movie/${newTitle}`} onClick={ScrollToTop} state={movie}>
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
              <Popover
                arrowSize={"10"}
                closeOnBlur={true}
                preventOverflow={true}
                closeOnEsc={true}
              >
                <PopoverTrigger>
                  <Button
                    size={"xs"}
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
                    color={"blackAlpha.800"}
                  >
                    {movie.vote_average === 0 ? "--" : movie.vote_average}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow bg={"gray.200"} />
                  <PopoverCloseButton size={"md"} color={"red.500"} />
                  {/* <PopoverHeader>What</PopoverHeader> */}
                  <PopoverBody
                    bg={"gray.200"}
                    w={"100%"}
                    color={"blackAlpha.800"}
                    boxShadow={"xl"}
                  >
                    {movie.vote_average === 0 ? (
                      <Text
                        fontSize={"lg"}
                        letterSpacing={"wide"}
                        p={"2"}
                        textAlign={"center"}
                      >
                        Movie not rated yet
                      </Text>
                    ) : (
                      <Text fontSize={"lg"} letterSpacing={"wide"} p={"2"}>
                        Average user rating for this movie on The Movie Database
                      </Text>
                    )}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              {/* <Button
                size={"xs"}
                bg={"gray.200"}
                color={"blackAlpha.800"}
                onClick={NeedToLoginAlert}
              >
                <ChatIcon color={"blackAlpha.800"} />
              </Button> */}
              <IconButton
                size={"xs"}
                bg={"gray.200"}
                ariaLabel={"Add to your favorites"}
                icon={<AddIcon />}
                color={"blackAlpha.800"}
              />
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CardsLayout;
