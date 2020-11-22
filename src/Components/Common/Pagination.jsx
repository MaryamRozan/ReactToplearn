import { range } from 'lodash';
import React from 'react';

const Pagination = ({totalCourse,currentPage,perPage,onPageChange}) => {

const countpage=Math.ceil(totalCourse/perPage);
if (countpage===1)return null;
const pages=range(1,countpage+1);
    return ( 
      <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
          {pages.map(page => (
              <li
                  key={page}
                  className={
                      page === currentPage
                          ? "page-item active"
                          : "page-item"
                  }
              >
                  <a
                      className="page-link"
                      style={{ cursor: "pointer" }}
                      onClick={() => onPageChange(page)}
                  >
                      {page}
                  </a>
              </li>
          ))}
      </ul>
  </nav>
     );
}
 
export default Pagination;