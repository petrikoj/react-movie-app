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
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import ViewNoMatch from "./ViewNoMatch";
import { DateConverter } from "../components/Helpers";
import CommentSection from "../components/CommentSection";
import { AuthContext } from "../context/AuthContext";

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
      borderWidth={"thin"}
      borderColor={"blackAlpha.800"}
      borderRadius={"lg"}
    >
      <VStack>
        <Text as={"header"} fontSize={"3xl"} color={"blackAlpha.800"}>
          {location.state.title}
        </Text>
        <Image
          src={`https://image.tmdb.org/t/p/w300_and_h450_face/${location.state.poster_path}`}
          alt={location.state.title}
          border={"1px"}
          borderRadius={"lg"}
          boxShadow={"md"}
        />
        <Stack direction={"row"}>
          <Badge variant={"solid"} colorScheme={"teal"}>
            {releaseDate}
          </Badge>
          <Badge variant={"solid"} colorScheme={"yellow"}>
            {location.state.original_language}
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
        {user && (
          <Button variant={"unstyled"} onClick={handleChange}>
            <ChatIcon boxSize={"6"} pb={"2"} color={"purple.400"} />
          </Button>
        )}
        {show && <CommentSection />}
      </VStack>
    </Container>
  ) : (
    <ViewNoMatch />
  );
};

export default ViewDetails;
