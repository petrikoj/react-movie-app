import React from "react";
import PasswordInput from "../components/PasswordInput";
import { Container, Text, VStack } from "@chakra-ui/react";

function viewLogin() {
  return (
    <Container mt={20} mb={"60"}>
      <VStack>
        <Text
          as={"h4"}
          fontSize={"4xl"}
          fontFamily={"body"}
          fontWeight={"thin"}
          mt={"20"}
        >
          Login
        </Text>
        <PasswordInput />
      </VStack>
    </Container>
  );
}

export default viewLogin;
