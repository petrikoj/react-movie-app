import React from "react";
import PasswordInput from "../components/PasswordInput";
import { Container, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function viewLogin() {
  return (
    <Container mt={"44"} mb={"60"}>
      <VStack>
        <Text
          as={"h4"}
          fontSize={"4xl"}
          fontFamily={"body"}
          fontWeight={"thin"}
          mb={"14"}
        >
          Login
        </Text>
        <PasswordInput />
        <Text fontStyle={"italic"}>
          Not registered yet? Click <Link to={""}>here</Link>.
        </Text>
      </VStack>
    </Container>
  );
}

export default viewLogin;
