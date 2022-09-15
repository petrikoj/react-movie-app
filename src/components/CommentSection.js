import React, { useState, useContext, useEffect } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Flex,
  HStack,
  Button,
  Icon,
  Text,
  Avatar,
  Container,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../context/AuthContext";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  query,
  where,
  onSnapshot,
  arrayUnion,
  updateDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "../Config";
import { useLocation } from "react-router-dom";

const CommentSection = () => {
  const { user, setUser, logout } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState(null);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const location = useLocation();

  const sendMessage = async () => {
    setMessage("");
    const messageObject = {
      text: message,
      date: new Date().toLocaleDateString(),
      user: user.email,
    };

    console.log("My message object:", messageObject);
    console.log("Current movie ID:", location.state.id);
    try {
      const q = query(
        collection(db, "comments"),
        where("movieId", "==", location.state.id)
      );

      const querySnapshot = await getDocs(q);
      console.log("querySnapshot", querySnapshot);
      let docId = "";
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        if (doc.id) {
          docId = doc.id;
        }
      });

      if (docId !== "") {
        const commentRef = doc(db, "comments", docId);

        await updateDoc(commentRef, {
          comments: arrayUnion(messageObject),
        });
      } else {
        const docRef = await addDoc(collection(db, "comments"), {
          movieId: location.state.id,
          comments: [messageObject],
        });
      }
    } catch (error) {
      console.log("Error adding document: ", error);
    }
  };

  const readComments = async () => {
    const q = query(
      collection(db, "comments"),
      where("movieId", "==", location.state.id)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const comments = [];
      querySnapshot.forEach((doc) => {
        comments.push(doc.data());
      });
      setComments(comments);
    });
  };
  useEffect(() => {
    readComments();
  }, []);

  return (
    <Box w={"85%"} borderRadius={"lg"}>
      <Box h={"52"} overflowX={"hidden"} overflowY={"auto"}>
        {comments &&
          comments.map((comment, id) => (
            <Box key={id}>
              {comment.comments.map((content, id) => {
                return (
                  <Box
                    key={id}
                    borderRadius={"2xl"}
                    bgColor={"teal.100"}
                    p={"3.5"}
                    m={"2"}
                    flexDir={"column"}
                  >
                    <Flex align={"center"}>
                      <Avatar
                        size={"sm"}
                        bg={"red.500"}
                        icon={<AiOutlineUser />}
                        fontSize={"1.2rem"}
                        m={"1"}
                      />
                      <Text
                        fontSize={"xs"}
                        fontWeight={["normal", "semibold"]}
                        letterSpacing={"wide"}
                      >
                        {content.user}
                      </Text>
                      <Spacer />
                      <Text
                        textAlign={"right"}
                        fontSize={"2xs"}
                        fontWeight={"light"}
                        letterSpacing={"wider"}
                      >
                        {content.date}
                      </Text>
                    </Flex>
                    <Text fontSize={"md"}>{content.text}</Text>
                  </Box>
                );
              })}
            </Box>
          ))}
      </Box>
      <HStack my={"5"}>
        <InputGroup size={"md"}>
          <Input
            placeholder={"Write a comment ..."}
            value={message}
            focusBorderColor={"teal.300"}
            onChange={handleMessageChange}
          />
          <InputRightElement>
            <Button
              variant={"unstyled"}
              colorScheme={"cyan"}
              onClick={sendMessage}
            >
              <Icon as={FiSend} color={"teal.300"} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </HStack>
    </Box>
  );
};

export default CommentSection;
