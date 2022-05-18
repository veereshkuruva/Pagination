import React from 'react'

const Pagination = ({postPerPage,totalPost,paginate}) => {

    const pageNumber=[];
    for(let i=1;i<=Math.ceil(totalPost/postPerPage);i++){
        pageNumber.push(i);
    }
  return (
    <div>

<nav aria-label="Page navigation example">
  <ul class="pagination">
      {
          pageNumber.map(ele=>(
         <li class="page-item" onClick={()=>paginate(ele)}><a class="page-link" href="javascript:void(0)">{ele}</a></li>
    
          ))
      }
    
  </ul>
</nav>

    </div>
  )
}

export default Pagination