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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Icon,
} from "@chakra-ui/react";
// import { useLocation } from "react-router-dom";
import ViewNoMatch from "./ViewNoMatch";
import { GoGear } from "react-icons/go";

function ViewProfile() {
  const { user } = useContext(AuthContext);
  // const location = useLocation();
  return user !== null ? (
    <>
      <Box mt={"36"} mb={"14"}>
        <Text
          as={"h2"}
          fontFamily={"body"}
          fontSize={"large"}
          fontWeight={"semibold"}
          letterSpacing={"wide"}
        >
          Hello {user.email}!
        </Text>
      </Box>
      <Tabs
        isFitted
        size="lg"
        variant="enclosed"
        colorScheme={"cyan"}
        w={["90%", "50%"]}
      >
        <TabList mb="1em">
          <Tab>Watchlist</Tab>
          <Tab>
            <Icon as={GoGear} />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  ) : (
    <ViewNoMatch />
  );
}

export default ViewProfile;
