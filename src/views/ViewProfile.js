import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function ViewProfile() {
  const { user, logout } = useContext(AuthContext);
  return <p>Hello {user}!</p>;
}

export default ViewProfile;
