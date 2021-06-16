import React from "react";

const Pagination = ({ paginate }) => {
  const page = [1, 2];

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item" onClick={() => paginate(page[0])}>
          <p className="page-link">{page[0]}</p>
        </li>
        <li className="page-item" onClick={() => paginate(page[1])}>
          <p className="page-link">{page[1]}</p>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
