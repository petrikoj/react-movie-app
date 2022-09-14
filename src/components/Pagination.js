import React from "react";
import { Button, Box, HStack } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { ScrollToTop } from "./Helpers";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  function goToNextPage() {
    setCurrentPage((currentPage) => currentPage + 1);
    ScrollToTop();
  }

  function goToPreviousPage() {
    setCurrentPage((currentPage) => currentPage - 1);
    ScrollToTop();
  }

  return (
    <Box mt={"4"}>
      <HStack>
        {currentPage === 1 ? (
          <Button variant={"ghost"} isDisabled />
        ) : (
          <Button
            onClick={goToPreviousPage}
            variant={"ghost"}
            colorScheme={"blackAlpha"}
          >
            <ArrowBackIcon />
          </Button>
        )}
        {currentPage <= totalPages && (
          <Box>
            {currentPage}/{totalPages}
          </Box>
        )}
        {currentPage !== totalPages && currentPage <= totalPages && (
          <Button
            onClick={goToNextPage}
            variant={"ghost"}
            colorScheme={"blackAlpha"}
          >
            <ArrowForwardIcon />
          </Button>
        )}
      </HStack>
    </Box>
  );
};

export default Pagination;
