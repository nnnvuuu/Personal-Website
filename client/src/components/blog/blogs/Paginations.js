import React,{useState, useEffect} from 'react';
import  {Pagination,PageItem} from 'react-bootstrap';



const _Pagination =({postsPerPage, totalPosts, paginate, currentPage}) => {

let active =currentPage;
let items = [];
for (let number = 1; number <= Math.ceil(totalPosts / postsPerPage); number++) {
  items.push(number);
}


  return(
    <nav>
      <Pagination className="row justify-content-center mt-5" size="lg">
         {items.map(item=>(
            <Pagination.Item 
             key={item} 
             active={active===item}
             onClick={()=> paginate(item)} 
             href ="#">
                 {item}
            </Pagination.Item>
         ))}     
      </Pagination>
    </nav>

  );
 



}
export default _Pagination;












// import React,{useState, useEffect} from 'react';
// import  {Pagination,PageItem} from 'react-bootstrap';


// const _Pagination =({postsPerPage, totalPosts,paginate}) => {


// let active = 1;
// let items = [];
// for (let number = 1; number <= Math.ceil(totalPosts / postsPerPage); number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }


//   return(
//     <nav>
//       <Pagination>
//          {items.map(item=>(
//            <li key={item} className="page-item">
//               <a onClick={()=> paginate(item)} href ="!#" className="page-link">
//                   {item}
//               </a>  
//            </li>
//          ))}
//       </Pagination>
//     </nav>

//   );



// }
// export default _Pagination;