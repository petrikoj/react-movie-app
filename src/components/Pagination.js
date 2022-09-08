import React, { useState } from "react";
import { Button, Box, HStack } from "@chakra-ui/react";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((currentPage) => currentPage + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((currentPage) => currentPage - 1);
  }

  return (
    <Box>
      <HStack>
        {currentPage === 1 ? (
          <Button isDisabled />
        ) : (
          <Button onClick={goToPreviousPage}>prev</Button>
        )}
        <Button>
          <span>{currentPage}</span>
        </Button>
        {currentPage !== totalPages && (
          <Button onClick={goToNextPage}>next</Button>
        )}
      </HStack>
    </Box>
  );
};

export default Pagination;
