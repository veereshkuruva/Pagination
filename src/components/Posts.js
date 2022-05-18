
import React from "react";


const Posts=({post})=>{
    return(

<ul className="list-group">

    {
       post.map((post)=>(
        <li key={post.id} className="list-group-item">{post.title}</li>
        
      
        ))};
  
</ul>
  

    );
}
export default Posts;