import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
function App() {

  useEffect(()=>{
    async function fetchData(){
    const response =await axios.get('https://jsonplaceholder.typicode.com/posts')

      setPost(response.data);
    };
    fetchData();
  },[]);
     
  const paginateFun=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }

  const[post,setPost]=useState([]);
  const[currentPage,setCurrentPage]=useState(1);
  const[postPerPage,setPostPerPage]=useState(5);


  // post limiting logic
  const indexOfLastpage=currentPage*postPerPage;
  const indexOfFirstPage=indexOfLastpage-postPerPage;
  const currentPostInPage=post.slice(indexOfFirstPage,indexOfLastpage);

  return (
    <div className="container mt-5">
        <h2 style={{textAlign:'center'}}>Pagination in react</h2>
      <Posts  post = {currentPostInPage}/>
      <div style={{display:'flex',justifyContent:"center",marginTop:'30px'}}>
      <Pagination postPerPage={postPerPage} totalPost={post.length} paginate={paginateFun}/>
      </div>
     
    </div>
  );
}

export default App;
