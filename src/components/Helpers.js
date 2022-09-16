import React from "react";
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Text,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

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

const UserNeedsToLogin = () => {
  const customId = "login-reminder";
  toast.error("You need to be logged in to use this feature.", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    toastId: customId,
    draggablePercent: 60,
  });
};

// Alert Dialog

function ShowAlertDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Delete Customer
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize={"lg"} fontWeight={"bold"}>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme={"red"} onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

// Alert

const ErrorAlert = (error) => {
  const [isShow, setIsShow] = useState[true];
  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);
  };
  return (
    <Alert status={"error"} height={"96"}>
      <AlertIcon boxSize={"lg"} />
      <AlertTitle>{error.code}</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
      <CloseButton
        position={"absolute"}
        right={"3"}
        top={"3"}
        cursor={"pointer"}
        onClick={handleClose}
      />
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
    if (scrolled > 3000) {
      setVisible(true);
    } else if (scrolled <= 3000) {
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

// Protected Route

function ProtectedRoute({ children }) {
  const isLogged = useAuth();
  return <>{isLogged ? children : <Navigate to="/login" />}</>;
}

//

export {
  SpaceReplacer,
  DateConverter,
  ErrorAlert,
  ScrollToTop,
  ScrollButton,
  ShowAlertDialog,
  ProtectedRoute,
  UserNeedsToLogin,
};
