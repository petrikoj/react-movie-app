import React, { useEffect } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function ViewNoMatch() {
  let redirectHome = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      redirectHome("/");
    }, 2000);
  }, [redirectHome]);
  return (
    <Box mt={"36"} mb={"80"}>
      <VStack>
        <WarningIcon w={"36"} h={"auto"} color={"BlackAlpha.600"} mb={"12"} />
        <Text as={"h2"} fontSize={"x-large"} fontFamily={"heading"}>
          Sorry, no results found.
        </Text>
        <Text fontSize={"large"} fontFamily={"heading"}>
          Let's bring you back home.
        </Text>
      </VStack>
    </Box>
  );
}

export default ViewNoMatch;
