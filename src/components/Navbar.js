import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import SearchInput from "./SearchInput";
import { Flex, Heading, Icon, Button, Avatar } from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { ScrollToTop } from "./Helpers";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    ScrollToTop();
  };
  return (
    <Flex
      as={"nav"}
      position={"fixed"}
      align={"center"}
      justify={"space-evenly"}
      // bgGradient={"linear(to-br, pink.200, red.300)"}
      bgGradient={"linear(to-r, yellow.100, cyan.100, red.200)"}
      h={"16"}
      w={"100%"}
      px={"2"}
      zIndex={"banner"}
    >
      {user ? (
        <Link to={"/*"} onClick={ScrollToTop}>
          <Avatar
            icon={<BiUser />}
            size={"md"}
            bg={"red.500"}
            color={"blackAlpha.800"}
          />
        </Link>
      ) : (
        <Link to={"/"}>
          <Heading
            as={"h4"}
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            color={"blackAlpha.800"}
            wordBreak={"break-word"}
          >
            Movie API Project
          </Heading>
        </Link>
      )}
      <SearchInput />

      <Flex className="nav-links" align={"center"} justify={"center"}>
        {user ? (
          <Button onClick={handleLogout} variant={"unstyled"}>
            <Icon as={FiLogOut} boxSize={[5, 7]} color={"blackAlpha.800"} />
          </Button>
        ) : (
          <Link to={"/login"} onClick={ScrollToTop}>
            <Icon as={BiUser} boxSize={"6"} color={"blackAlpha.800"} />
          </Link>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
