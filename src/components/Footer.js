import React from "react";
import { Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as={"footer"}
      h={"36"}
      w={"100%"}
      mb={"0"}
      mt={"20"}
      pos={"sticky"}
      bgGradient={"linear(to-tr, purple.200, red.200, yellow.200)"}
    >
      This is my footer
    </Flex>
  );
};

export default Footer;
