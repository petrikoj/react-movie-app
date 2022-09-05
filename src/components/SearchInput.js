import React from "react";
import { Input } from "@chakra-ui/react";
import "../App.css";

function SearchInput() {
  return (
    <Input
      className={"search-input"}
      type={"search"}
      w={"80"}
      border={"0"}
      placeholder="Search for a movie ..."
      _placeholder={{ fontFamily: "heading" }}
      borderRadius={"lg"}
      focusBorderColor={"blackAlpha.700"}
      _hover={{ borderColor: "black.200" }}
      bg={"whiteAlpha.100"}
      appearance={"none"}
    />
  );
}

export default SearchInput;
