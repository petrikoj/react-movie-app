import { ArrowUpIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  Button,
  CloseButton,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

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
  return isVisible ? (
    <Alert status={"error"}>
      <AlertIcon />
      <Box>
        <AlertTitle>Ooops!</AlertTitle>
        <AlertDescription>
          You need to be logged in order to use this feature. Do you want to log
          in or create an account?
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
  ) : (
    <Button onClick={onOpen}>Show Alert</Button>
  );
}

// Alert

const ErrorAlert = ({ error }) => {
  return (
    <Alert status={"error"}>
      <AlertIcon boxSize={"lg"} />
      <AlertTitle>{error.code}</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  );
};

// Scroll to top function

function ScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
}

// Scroll to top Btn

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 4500) {
      setVisible(true);
    } else if (scrolled <= 4500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <IconButton
      icon={<ChevronUpIcon />}
      onClick={scrollToTop}
      display={visible ? "inline" : "none"}
      // style={{ display: visible ? "inline" : "none" }}
      position={"fixed"}
      width={"16"}
      variant={"solid"}
      bottom={"20"}
      fontSize={"3xl"}
      zIndex={"1"}
      cursor={"pointer"}
      color={"blackAlpha.900"}
      bgColor={"gray.100"}
      opacity={"0.5"}
    />
  );
};

//

export {
  SpaceReplacer,
  NeedToLoginAlert,
  DateConverter,
  ErrorAlert,
  ScrollToTop,
  ScrollButton,
};
