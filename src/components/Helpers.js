import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  Button,
  CloseButton,
  Box,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

// Replacing the Spaces in URLs //

function SpaceReplacer(string) {
  let addHyphens = string.replace(" ", "-");
  return addHyphens;
}

// Converting dates //

function DateConverter(string) {
  let date = new Date(string);
  let newDate = date.toLocaleDateString();
  return newDate;
}

// Alert in case of userIsLogged === false //

function NeedToLoginAlert() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });
  return (
    isVisible && (
      <Alert status={"success"}>
        <AlertIcon />
        <Box>
          <AlertTitle>Ooops!</AlertTitle>
          <AlertDescription>
            You need to be logged in order to use this feature. Do you want to
            log in or create an account?
          </AlertDescription>
        </Box>
        <CloseButton
          alignSelf={"flex-start"}
          position={"relative"}
          right={"-1"}
          top={"-1"}
          onClick={onClose}
        />
      </Alert>
    )
  );
}

export { SpaceReplacer, NeedToLoginAlert, DateConverter };
