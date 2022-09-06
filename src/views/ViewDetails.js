import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Image, Text, VStack } from "@chakra-ui/react";

const ViewDetails = (movie) => {
  const location = useLocation();
  console.log("console.log ->", location);
  return (
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
      </VStack>
    </Container>
  );
};

export default ViewDetails;
