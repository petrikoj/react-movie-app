import React, { useState } from "react";
import { InputGroup, Input, InputRightElement, Stack } from "@chakra-ui/react";
import "../App.css";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => setInput(e.target.value);
  console.log(input);

  return (
    <Stack>
      <InputGroup>
        <Input
          className={"search-input"}
          type={"text"}
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
          <Link
            to={`/search/${input.toLowerCase().replace("-")}`}
            state={{ input: input }}
          >
            <SearchIcon color={"blackAlpha.800"} />
          </Link>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};

export default SearchInput;
