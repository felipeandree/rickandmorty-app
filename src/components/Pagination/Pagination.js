import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  // const prev = () => {
  //   if(pageNumber === 1) return
  //   setPageNumber((page) => page - 1);
  // };

  // const next = () => {
  //   setPageNumber((page) => page + 1);
  // };
  return (
    <ReactPaginate
      className='pagination justify-content-center'
      nextLabel='Próxima'
      previousLabel='Anterior'
      nextClassName='btn btn-primary'
      previousClassName='btn btn-primary'
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
