import React from "react";
import { Box, Link, Flex, Button } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  let body = null;

  body = (
    <>
      <Link mr={2}>Login</Link>

      <Link>Register</Link>
    </>
  );

  return (
    <Flex bg="#e1e1e1" p={4} ml={"auto"}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
