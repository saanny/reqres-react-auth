import React from "react";
import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  let body = null;

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

  return (
    <Flex bg="#e1e1e1" p={4} ml={"auto"}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
