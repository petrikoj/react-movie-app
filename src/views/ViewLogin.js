import React from "react";
import LogInInput from "../components/LogInInput";
import { Container, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ViewLogin() {
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
        <LogInInput />
        <Text fontStyle={"italic"}>
          Not registered yet?{" "}
          <Link fontStyle={"bold"} to={"/registration"}>
            Click here
          </Link>
          .
        </Text>
      </VStack>
    </Container>
  );
}

export default ViewLogin;
