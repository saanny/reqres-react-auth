import React, { useEffect } from "react";
import { useActions } from "../hooks/useAction";
import { useSelector } from "../hooks/useTypeSelector";
import { useParams } from "react-router-dom";
import { Heading, Text, Avatar, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
interface SingleProps {}
type UserParams = {
  id: string;
};
export const Single: React.FC<SingleProps> = () => {
  const { id } = useParams<UserParams>();

  const { getUser } = useActions();
  const { userForEdit } = useSelector((state) => state.list);

  useEffect(() => {
    if (id) {
      getUser(parseInt(id));
    }
  }, [id]);
  return (
    <>
      <Link to="/">Back To Dashboard</Link>
      {userForEdit ? (
        <Box p={5} shadow="md" borderWidth="1px">
          <Avatar src={userForEdit.avatar} />
          <Heading fontSize="xl">
            {userForEdit.first_name} {userForEdit.last_name}
          </Heading>
          <Text mt={4}>{userForEdit.email}</Text>
        </Box>
      ) : null}
    </>
  );
};
