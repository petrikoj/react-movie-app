import React from "react";
import { Flex, Image, VStack, Text, Box, HStack } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { RiCopyrightFill } from "react-icons/ri";

const Footer = () => {
  return (
    <Flex
      direction={["column-reverse", "row"]}
      as={"footer"}
      h={["sm", "40", "60"]}
      w={"100%"}
      mb={"0"}
      mt={"36"}
      p={"10"}
      pos={"sticky"}
      bgGradient={"linear(to-tr, teal.100, cyan.100, teal.100, blue.200)"}
      align={"center"}
      justify={"space-evenly"}
    >
      <VStack m={"4"}>
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
      <Box m={"4"}>
        <a
          href={"https://github.com/petrikoj"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <AiFillGithub size={"44"} />
        </a>
      </Box>
      <HStack m={"4"}>
        <RiCopyrightFill size={"24"} />
        <Text fontFamily={"mono"} fontSize={"large"}>
          petrikoj 2022
        </Text>
      </HStack>
    </Flex>
  );
};

export default Footer;
