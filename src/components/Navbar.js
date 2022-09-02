import React from "react";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      as={"nav"}
      position={"fixed"}
      justify={"space-around"}
      align={"center"}
      bgGradient={"linear(to-tr, purple.200, red.200, yellow.200)"}
      h={"14"}
      w={"100%"}
      px={"2"}
    >
      <Link to={"/"}>
        <Heading as={"h4"} fontSize={"xl"}>
          Movie API Project
        </Heading>
      </Link>

      <Flex className="nav-links">
        <Link to={"/login"}>
          <Icon as={BiUser} w={"6"} h={"8"} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
