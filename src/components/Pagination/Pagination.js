import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss"

const Pagination = ({ info, pageNumber, setPageNumber }) => {

  let pageChange = (data) => {
    setPageNumber(data.selected + 1);
  };

  // const prev = () => {
  //   if(pageNumber === 1) return
  //   setPageNumber((page) => page - 1);
  // };

  // const next = () => {
  //   setPageNumber((page) => page + 1);
  // };
  return (
    <ReactPaginate
    className="pagination justify-content-center my-4 gap-4"
    nextLabel="Próximo"
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    previousLabel="Anterior"
    previousClassName="btn btn-primary"
    nextClassName="btn btn-primary"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    activeClassName="active"
    pageCount={info?.pages}
    onPageChange={pageChange}

    />
  );
};

export default Pagination;
