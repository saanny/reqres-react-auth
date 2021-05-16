import React, { useEffect, useState } from "react";
import {
  Stack,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CircularProgress,
} from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import { useActions } from "../hooks/useAction";
import { useSelector } from "../hooks/useTypeSelector";
import { Item } from "./Item";
import { shallowEqual } from "react-redux";
export const Dashboard = () => {
  const { getLists } = useActions();
  const { entities, perPage, total, totalPages, error, loading } = useSelector(
    (state) => state.list
  );

  const [userPages, setUserPage] = useState(1);
  const [pageCount, setPageCount] = useState(totalPages ? totalPages : 0);
  useEffect(() => {
    getLists(userPages);
  }, [userPages]);

  useEffect(() => {
    if (totalPages) {
      setPageCount(totalPages);
    }
  }, [totalPages]);

  const handlePageClick = (data: any) => {
    setUserPage(data.selected + 1);
  };
  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Error!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {loading && (
        <Center mt={4}>
          <CircularProgress isIndeterminate color="gray" />
        </Center>
      )}
      <Stack spacing={8} mt={4}>
        {!error &&
          !loading &&
          entities?.map((user) => {
            return <Item {...user} />;
          })}
      </Stack>
      {pageCount >= 2 ? (
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          breakClassName={"dsh-pagination-li"}
          breakLinkClassName={"dsh-pagination-link"}
          containerClassName={"pagination"}
          pageClassName={"dsh-pagination-li"}
          pageLinkClassName={"dsh-pagination-link"}
          previousClassName={"dsh-pagination-li"}
          previousLinkClassName={"dsh-pagination-link"}
          nextClassName={"dsh-pagination-li"}
          nextLinkClassName={"dsh-pagination-link"}
          activeClassName={"active-pagi"}
        />
      ) : null}
    </>
  );
};
