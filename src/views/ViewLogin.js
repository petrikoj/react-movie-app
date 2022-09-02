import React from "react";
import PasswordInput from "../components/PasswordInput";
import { Text, VStack } from "@chakra-ui/react";

function viewLogin() {
  return (
    <>
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
    </>
  );
}

export default viewLogin;
