import React, { useEffect, useState } from 'react'
import Card from './Components/Card'



const App = () => {
 
  const [posts, setPosts] = useState([]);
  const fetchData = async() => {
   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
   let postData = await response.json();
   setPosts(postData);
  } 

  useEffect(()=>{
    fetchData();
  },[])

  // console.log(posts);

  return (
    <div>
      {posts.map((post)=>{
          return <Card data = {post}/>
      })}
      
    </div>
  )
}

export default App