import React from 'react';
import './paginate.css';
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
    console.log(postsPerPage)
    console.log(totalPosts)
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("lkelo")
  console.log(pageNumbers)

  return (
    <div className="page">
    <nav >
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item page-link active' onClick={()=>paginate(number)}>
          
              {number}
           
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
};

export default Pagination;