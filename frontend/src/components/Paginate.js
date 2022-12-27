import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ name, pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <nav aria-label="Page navigation example">
        <Pagination className="pagination justify-content-end">
          {[...Array(pages).keys()].map((x) => (
            <LinkContainer
              key={x + 1}
              to={
                !isAdmin
                  ? keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/page/${x + 1}`
                  : `/admin/${name}/${x + 1}`
              }
            >
              <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
            </LinkContainer>
          ))}
        </Pagination>
      </nav>
    )
  );
};

export default Paginate;
