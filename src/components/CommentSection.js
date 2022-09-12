import React from "react";
import { Textarea, Box } from "@chakra-ui/react";

function CommentSection() {
  return (
    <Box w={"80%"} borderRadius={"lg"}>
      <Textarea size={"md"}></Textarea>
    </Box>
  );
}

export default CommentSection;
