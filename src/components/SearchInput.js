import React, { useState } from "react";
import {
  InputGroup,
  Input,
  Button,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import KEYS from "../Config";
import "../App.css";

function SearchInput() {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    console.log(input);
  };
  const handleSearch = () => {
    useFetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEYS}&query=${searchInput}`
    );
  };
  return (
    <Stack>
      <InputGroup>
        <Input
          className={"search-input"}
          type={"search"}
          value={searchInput}
          onChange={handleChange}
          w={"80"}
          border={"0"}
          placeholder="Search for a movie ..."
          _placeholder={{ fontFamily: "heading", color: "orange.300" }}
          borderRadius={"lg"}
          focusBorderColor={"blackAlpha.700"}
          _hover={{ borderColor: "black.200" }}
          bg={"whiteAlpha.100"}
        />
        <InputRightElement>
          <Button onClick={handleSearch}>Search</Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
}

export default SearchInput;
