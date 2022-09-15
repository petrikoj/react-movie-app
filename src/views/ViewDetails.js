import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Image,
  Text,
  Stack,
  VStack,
  Badge,
  Button,
  Spacer,
  HStack,
  Center,
} from "@chakra-ui/react";
import ViewNoMatch from "./ViewNoMatch";
import { DateConverter } from "../components/Helpers";
import CommentSection from "../components/CommentSection";
import { AuthContext } from "../context/AuthContext";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log("Logging the location -->", location);
  const releaseDate = DateConverter(location.state.release_date);

  const [show, setShow] = useState(false);
  const handleChange = () => {
    setShow(!show);
  };

  return location.state !== null ? (
    <Container
      mt={"32"}
      pt={"2"}
      pb={"4"}
      w={["xs", "sm", "md", "3xl"]}
      borderWidth={"thin"}
      borderColor={"blackAlpha.800"}
      borderRadius={"lg"}
    >
      <VStack>
        <Text
          as={"header"}
          textAlign={"center"}
          fontSize={"3xl"}
          color={"blackAlpha.800"}
        >
          {location.state.title}
        </Text>
        <Image
          src={`https://image.tmdb.org/t/p/w300_and_h450_face/${location.state.poster_path}`}
          alt={location.state.title}
          border={"1px"}
          borderRadius={"lg"}
          boxShadow={"md"}
        />
        <Stack direction={["column", "row"]} p={"1.5"}>
          <Badge variant={"outline"} colorScheme={"green"}>
            Release date: {releaseDate}
          </Badge>
          <Badge variant={"outline"} colorScheme={"gray"}>
            Original Language: {location.state.original_language}
          </Badge>
        </Stack>
        <Text
          as={"section"}
          fontFamily={"IBM Plex Sans"}
          fontSize={"larger"}
          lineHeight={"8"}
          color={"blackAlpha.800"}
          // textAlign={"justify"}
        >
          {location.state.overview}
        </Text>
        {user &&
          (show ? (
            <Button variant={"outline"} bg={"teal.100"} onClick={handleChange}>
              <ChevronUpIcon />
            </Button>
          ) : (
            <Button variant={"outline"} bg={"teal.100"} onClick={handleChange}>
              <Center>
                <Text fontSize={"md"} letterSpacing={"wide"}>
                  Comments
                </Text>
                <ChevronDownIcon />
              </Center>
            </Button>
          ))}
        {user && show && <CommentSection />}
      </VStack>
    </Container>
  ) : (
    <ViewNoMatch />
  );
};

export default ViewDetails;
