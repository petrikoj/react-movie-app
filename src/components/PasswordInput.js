import React, { useState } from "react";
import {
  InputGroup,
  Input,
  InputLeftElement,
  VStack,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function PasswordInput() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = () => {
    setIsLoading(true);
    console.log("Not functional yet!");
  };

  return (
    <Box>
      <Center>
        <VStack spacing={"4"}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="red.200"
              children={<EmailIcon />}
            />
            <Input
              isDisabled={isLoading ? true : false}
              borderColor={"red.200"}
              width={"80"}
              type="email"
              placeholder="E-Mail"
              focusBorderColor="teal.300"
            />
          </InputGroup>
          <InputGroup>
            <Input
              isDisabled={isLoading ? true : false}
              type={show ? "text" : "password"}
              borderColor={"red.200"}
              width={"80"}
              placeholder="Password"
              focusBorderColor="teal.300"
            />
            <InputLeftElement>
              <Button bg={"none"} variant={"unstyled"} onClick={handleShow}>
                {show ? (
                  <ViewIcon color={"red.200"} />
                ) : (
                  <ViewOffIcon color={"red.200"} />
                )}
              </Button>
            </InputLeftElement>
          </InputGroup>
          <Button
            onClick={handleLogin}
            isLoading={isLoading ? true : false}
            variant={"solid"}
            colorScheme={"teal"}
            bg={"red.200"}
            size={"sm"}
            shadow={"sm"}
          >
            Log in
          </Button>
        </VStack>
      </Center>
    </Box>
  );
}

export default PasswordInput;
