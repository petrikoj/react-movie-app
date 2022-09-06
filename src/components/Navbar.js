import React from "react";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <Flex
      as={"nav"}
      position={"fixed"}
      align={"center"}
      justify={"space-evenly"}
      bgGradient={"linear(to-br, pink.200, red.300)"}
      h={"16"}
      w={"100%"}
      px={"2"}
    >
      <Link to={"/"}>
        <Heading
          as={"h4"}
          fontSize={{ base: "md", md: "lg", lg: "x-large" }}
          color={"blackAlpha.800"}
        >
          Movie API Project
        </Heading>
      </Link>
      <SearchInput />

      <Flex className="nav-links">
        <Link to={"/login"}>
          <Icon as={BiUser} w={"7"} h={"9"} color={"blackAlpha.800"} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
