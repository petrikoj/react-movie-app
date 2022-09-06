import React, { useState } from "react";
import {
  InputGroup,
  Input,
  Button,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import "../App.css";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import KEYS from "../Config";

const SearchInput = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => setInput(e.target.value);
  console.log(input);

  return (
    <Stack>
      <InputGroup>
        <Input
          className={"search-input"}
          type={"search"}
          value={input}
          onChange={handleChange}
          w={"80"}
          border={"0"}
          placeholder="Search for a movie ..."
          _placeholder={{ fontFamily: "body", color: "pink.400" }}
          borderRadius={"lg"}
          focusBorderColor={"blackAlpha.700"}
          _hover={{ borderColor: "black.200" }}
          bg={"whiteAlpha.100"}
        />
        <InputRightElement>
          <Button size={"md"} variant={"unstyled"}>
            <SearchIcon color={"blackAlpha.800"} />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};

export default SearchInput;
