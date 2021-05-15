import React from "react";
import { Link } from "react-router-dom";
import { Heading, Text, Avatar, Box } from "@chakra-ui/react";
interface ItemProps {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export const Item: React.FC<ItemProps> = ({
  id,
  email,
  first_name,
  last_name,
  avatar,
}) => {
  return (
    <>
      <Link to={`/user/${id}`}>
        <Box key={id} p={5} shadow="md" borderWidth="1px">
          <Avatar src={avatar} />
          <Heading fontSize="xl">
            {first_name} {last_name}
          </Heading>
          <Text mt={4}>{email}</Text>
        </Box>
      </Link>
    </>
  );
};
