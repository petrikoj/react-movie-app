import React from "react";
import { Box, Flex, HStack, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <Flex
        as={"nav"}
        position={"fixed"}
        justify={"center"}
        align={"center"}
        bgGradient={"linear(to-tr, purple.200, red.200, yellow.200)"}
        h={"14"}
        w={"100%"}
      >
        <HStack>
          <Heading as={"h4"} fontSize={"xl"}>
            Movie API Project
          </Heading>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
