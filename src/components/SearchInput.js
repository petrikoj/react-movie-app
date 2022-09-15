import React, { useState } from "react";
import { InputGroup, Input, InputRightElement, Stack } from "@chakra-ui/react";
import "../App.css";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { SpaceReplacer } from "./Helpers";

const SearchInput = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => setInput(e.target.value);
  const formattedInput = SpaceReplacer(input);

  const handleResetAndScrollTop = () => {
    setInput("");
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <Stack>
      <InputGroup>
        <Input
          className={"search-input"}
          type={"text"}
          value={input}
          onChange={handleChange}
          w={["28", "60", "80"]}
          border={"0"}
          placeholder={"Search for a movie ..."}
          _placeholder={{ fontFamily: "body", color: "red.500" }}
          borderRadius={"lg"}
          focusBorderColor={"blackAlpha.700"}
        />
        <InputRightElement>
          <Link
            to={`/search/${formattedInput}`}
            state={{ input: input }}
            onClick={handleResetAndScrollTop}
          >
            <SearchIcon color={"blackAlpha.800"} />
          </Link>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};

export default SearchInput;
