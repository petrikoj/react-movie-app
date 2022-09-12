import React from "react";
import RegistrationInput from "../components/RegistrationInput";
import { Container, Text, VStack } from "@chakra-ui/react";

function ViewRegistration() {
  return (
    <Container mt={"44"} mb={"72"}>
      <VStack>
        <Text
          as={"h4"}
          fontSize={"4xl"}
          fontFamily={"body"}
          fontWeight={"thin"}
          mb={"14"}
        >
          Create a new account
        </Text>
        <RegistrationInput />
      </VStack>
    </Container>
  );
}

export default ViewRegistration;
