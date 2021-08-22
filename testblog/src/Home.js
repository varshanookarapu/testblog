import { useState,useEffect } from 'react';
import useFetch from './useFetch';
import BlogList from './BlogList';


const Home = () => {

const { data:blogs , isLoading, error} =useFetch('http://localhost:8000/blogs')        
    /*  const [count,setCount]=useState(0)
       <h1>{count}</h1>
    <button onClick={click}>clickme</button>    
                     
        const click=()=>{
         setCount+1;
        }  */        
  // <BlogList blogs={blogs.filter((blog)=>blog.author !=='Dan brown')} title="Connely's Blogs"/>      

  /*const handleDelete=(id)=>{
  const newBlogs=blogs.filter(blog=>blog.id !== id);
  setData(newBlogs)
    }*/


    return ( 

     <div className="home">
     <h1>My Home Page</h1>
     {error && <div>{error}</div>}
     {isLoading && <div>Loading...</div>}  
     {blogs && <BlogList blogs={blogs} title="All Blogs"  /> }
     </div>
     

   
    );
}
 
export default Home; 