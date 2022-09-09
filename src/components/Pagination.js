import React from "react";
import { Button, Box, HStack } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  function goToNextPage() {
    setCurrentPage((currentPage) => currentPage + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((currentPage) => currentPage - 1);
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
        <Box>
          {currentPage}/{totalPages}
        </Box>
        {currentPage !== totalPages && (
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
