import React from "react";
import { Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as={"footer"}
      h={"44"}
      w={"100%"}
      mb={"0"}
      mt={"20"}
      p={"2.5"}
      pos={"sticky"}
      bgGradient={"linear(to-bl, orange.300, orange.200)"}
    >
      This is my footer
    </Flex>
  );
};

export default Footer;
