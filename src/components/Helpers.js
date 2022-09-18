import React, { useState, useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";
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
  Spinner,
  useToast,
} from "@chakra-ui/react";

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
  toast.error("Login required", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    toastId: customId,
    draggablePercent: 60,
  });
};

//

const ConfirmUserLogin = () => {
  const customId = "login-confirmed";
  toast.success("Login successful", {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 2000,
    toastId: customId,
    draggablePercent: 60,
  });
};

// Logout successful

const ConfirmUserLogout = () => {
  const customId = "logout-confirmed";
  toast.success("Logout successful", {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 2000,
    toastId: customId,
    draggablePercent: 60,
  });
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
  const { loading, user } = useContext(AuthContext);
  // const isLoggedIn = useAuth();
  return (
    <>
      {loading ? (
        <Spinner
          color={"red.200"}
          emptyColor={"pink.50"}
          size={"xl"}
          speed={"0.7s"}
          mt={"56"}
          mb={"96"}
        />
      ) : user ? (
        children
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

//

export {
  DateConverter,
  ProtectedRoute,
  SpaceReplacer,
  ScrollToTop,
  ScrollButton,
  UserNeedsToLogin,
  ConfirmUserLogout,
  ConfirmUserLogin,
};
