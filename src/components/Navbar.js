import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import SearchInput from "./SearchInput";
import { Flex, Heading, Icon, Button } from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  return (
    <Flex
      as={"nav"}
      position={"fixed"}
      align={"center"}
      justify={"space-evenly"}
      // bgGradient={"linear(to-br, pink.200, red.300)"}
      bgGradient={"linear(to-tr, yellow.100, cyan.100, red.200)"}
      h={"16"}
      w={"100%"}
      px={"2"}
    >
      <Link to={"/"}>
        <Heading
          as={"h4"}
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          color={"blackAlpha.800"}
        >
          Movie API Project
        </Heading>
      </Link>
      <SearchInput />

      <Flex className="nav-links">
        {user ? (
          <Button onClick={handleLogout} variant={"unstyled"}>
            <Icon as={FiLogOut} boxSize={[4, 6]} color={"blackAlpha.800"} />
          </Button>
        ) : (
          <Link to={"/login"}>
            <Icon as={BiUser} boxSize={"6"} color={"blackAlpha.800"} />
          </Link>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
