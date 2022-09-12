import React, { useEffect } from "react";
import { Box, Text, VStack, Image } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function ViewNoMatch() {
  let redirectHome = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      redirectHome("/");
    }, 3500);
  }, [redirectHome]);
  return (
    <Box mt={"36"} mb={"80"}>
      <VStack>
        {/* <WarningIcon w={"36"} h={"auto"} color={"BlackAlpha.600"} mb={"12"} /> */}
        <Image
          src={
            "https://camo.githubusercontent.com/2515d63ed9f010c45188fb16aa813f67c886fcb713f8395964abcbd22bd791ef/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f41394563427a64367438445a652f67697068792e676966"
          }
          alt={"404"}
          m={"10"}
          p={"3.5"}
        />
        <Text as={"h2"} fontSize={"x-large"} fontFamily={"heading"}>
          Sorry, no results found.
        </Text>
        <Text fontSize={"large"} fontFamily={"heading"}>
          Let's take you back home.
        </Text>
      </VStack>
    </Box>
  );
}

export default ViewNoMatch;
