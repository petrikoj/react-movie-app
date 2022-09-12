import React from "react";
import { Flex, Image, VStack, Text, Box, HStack } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { RiCopyrightFill } from "react-icons/ri";

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
      // bgGradient={"linear(to-tl, pink.200, red.300)"}
      bgGradient={"linear(to-tl, yellow.100, cyan.100, red.200)"}
      align={"center"}
    >
      <Box>
        <VStack>
          <Text textAlign={"center"} fontFamily={"mono"} fontSize={"medium"}>
            Data provided by:
          </Text>
          <a
            href={"https://www.themoviedb.org/"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <Image
              w={"40"}
              h={"auto"}
              src={
                "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
              }
              alt={"The Movie Database Logo"}
            />
          </a>
        </VStack>
      </Box>
      <Box>
        <HStack>
          <RiCopyrightFill size={"24"} />
          <Text fontFamily={"mono"} fontSize={"large"}>
            petrikoj 2022
          </Text>
        </HStack>
      </Box>
      <Box>
        <a
          href={"https://github.com/petrikoj"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <AiFillGithub size={"44"} />
        </a>
      </Box>
    </Flex>
  );
};

export default Footer;
