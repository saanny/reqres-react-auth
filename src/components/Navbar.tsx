import React from "react";
import { Text, Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "../hooks/useTypeSelector";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  const { authToken, user } = useSelector((state) => state.auth);

  let body = null;
  if (!user) {
    body = (
      <>
        <Link as={RouterLink} mr={3} to="/auth/login">
          Login
        </Link>

        <Link as={RouterLink} to="/auth/register">
          Register
        </Link>
      </>
    );
  } else {
    body = (
      <>
        <Text
          style={{
            display: "inline-block",
          }}
        >
          {user.email}
        </Text>
        <Button ml={3}>Log Out</Button>
      </>
    );
  }

  return (
    <Flex bg="#e1e1e1" p={4} ml={"auto"}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
