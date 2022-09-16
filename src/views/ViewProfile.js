import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Box,
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
// import { useLocation } from "react-router-dom";
import ViewNoMatch from "./ViewNoMatch";

function ViewProfile() {
  const { user } = useContext(AuthContext);
  // const location = useLocation();
  return user !== null ? (
    <Box mt={"44"} mb={"20"}>
      <h2>Hello {user.email}!</h2>
    </Box>
  ) : (
    <ViewNoMatch />
  );
}

export default ViewProfile;
