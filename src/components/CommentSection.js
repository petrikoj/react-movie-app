import React, { useState, useContext, useEffect } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Box,
  HStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../Config";

function CommentSection() {
  const { user, setUser, logout } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState(null);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const sendMessage = async () => {
    setMessage("");
    const messageObject = {
      text: message,
      date: new Date().toLocaleDateString(),
      user: user.email,
    };
    console.log("My message object:", messageObject);
    try {
      const docRef = await addDoc(collection(db, "comments"), messageObject);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log("Error adding document: ", error);
    }
  };

  const readComments = async () => {
    const q = query(collection(db, "comments"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const comments = [];
      querySnapshot.forEach((doc) => {
        comments.push(doc.data());
      });
      setComments(comments);
    });

    // const querySnapshot = await getDocs(collection(db, "comments"));
    // const comments = [];
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id);
    //   console.log(doc.data());
    //   comments.push(doc.data());
    // });
    // setComments(comments);
  };
  useEffect(() => {
    readComments();
  }, []);

  return (
    <Box w={"80%"} borderRadius={"lg"}>
      <Box h={"52"} overflowX={"hidden"} overflowY={"auto"}>
        {comments &&
          comments.map((comment) => (
            <Box borderRadius={"2xl"} bgColor={"yellow.200"} p={"3"} m={"2"}>
              <p>{comment.date}</p>
              <p>{comment.user}</p>
              <p>{comment.text}</p>
            </Box>
          ))}
      </Box>
      <HStack my={"5"}>
        <InputGroup size={"md"}>
          <Input
            placeholder={"Write a comment ..."}
            value={message}
            focusBorderColor={"cyan.500"}
            onChange={handleMessageChange}
          />
          <InputRightElement>
            <Button
              variant={"unstyled"}
              colorScheme={"teal"}
              onClick={sendMessage}
            >
              <Icon as={FiSend} color={"cyan.500"} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </HStack>
    </Box>
  );
}

export default CommentSection;
