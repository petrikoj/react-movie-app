import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import SearchInput from "./SearchInput";
import { Flex, Heading, Icon, Button, Avatar } from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { GrHomeRounded } from "react-icons/gr";
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
      bgGradient={
        "linear(to-r, blue.200, teal.100, cyan.200, teal.100, blue.200)"
      }
      h={"16"}
      w={"100%"}
      px={"2"}
      zIndex={"banner"}
    >
      {user ? (
        <>
          <Link to={"/"}>
            <Icon
              as={GrHomeRounded}
              boxSize={[5, 7]}
              color={"blackAlpha.800"}
            />
          </Link>
          <SearchInput />
          <Link to={`/profile/${user.email}`} onClick={ScrollToTop}>
            <Avatar
              icon={<BiUser />}
              size={"md"}
              bg={"red.500"}
              color={"blackAlpha.800"}
            />
          </Link>
          <Button onClick={handleLogout} variant={"unstyled"}>
            <Icon as={FiLogOut} boxSize={[5, 7]} color={"blackAlpha.800"} />
          </Button>
        </>
      ) : (
        <>
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
          <SearchInput />
          <Link to={"/login"} onClick={ScrollToTop}>
            <Icon as={BiUser} boxSize={[5, 7]} color={"blackAlpha.800"} />
          </Link>
        </>
      )}
    </Flex>
  );
};

export default Navbar;
