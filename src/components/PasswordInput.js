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
              color="orange.200"
              children={<EmailIcon />}
            />
            <Input
              isDisabled={isLoading ? true : false}
              borderColor={"orange.200"}
              width={"80"}
              type="email"
              placeholder="E-Mail"
              focusBorderColor="orange.300"
            />
          </InputGroup>
          <InputGroup>
            <Input
              isDisabled={isLoading ? true : false}
              type={show ? "text" : "password"}
              borderColor={"orange.200"}
              width={"80"}
              placeholder="Password"
              focusBorderColor="orange.300"
            />
            <InputLeftElement>
              <Button bg={"none"} variant={"unstyled"} onClick={handleShow}>
                {show ? (
                  <ViewIcon color={"orange.200"} />
                ) : (
                  <ViewOffIcon color={"orange.200"} />
                )}
              </Button>
            </InputLeftElement>
          </InputGroup>
          <Button
            onClick={handleLogin}
            isLoading={isLoading ? true : false}
            variant={"solid"}
            colorScheme={"orange"}
            bg={"orange.200"}
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
