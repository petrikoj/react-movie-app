import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  InputGroup,
  Input,
  InputRightElement,
  VStack,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const LogInInput = () => {
  const { logIn, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [isLoading, setIsLoading] = useState(false);

  const handleLogIn = () => {
    logIn(email, password);
    setIsLoading(true);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Box>
      <Center>
        <VStack spacing={"4"}>
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              color="red.200"
              children={<EmailIcon />}
            />
            <Input
              isDisabled={isLoading ? true : false}
              borderColor={"red.200"}
              width={"80"}
              type={"email"}
              value={email}
              placeholder={"E-Mail"}
              focusBorderColor={"teal.200"}
              onChange={handleEmailChange}
            />
          </InputGroup>
          <InputGroup>
            <Input
              isDisabled={isLoading ? true : false}
              type={show ? "text" : "password"}
              value={password}
              borderColor={"red.200"}
              width={"80"}
              placeholder={"Password"}
              focusBorderColor={"teal.200"}
              onChange={handlePasswordChange}
            />
            <InputRightElement>
              <Button bg={"none"} variant={"unstyled"} onClick={handleShow}>
                {show ? (
                  <ViewIcon color={"red.200"} />
                ) : (
                  <ViewOffIcon color={"red.200"} />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            onClick={handleLogIn}
            isLoading={isLoading ? true : false}
            variant={"solid"}
            colorScheme={"teal"}
            bg={"red.200"}
            size={"sm"}
            shadow={"sm"}
            w={["80", "24"]}
          >
            Log in
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default LogInInput;
