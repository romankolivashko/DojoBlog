import { useState, useEffect } from "react";
import BlogList from "./BlogList";

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//       { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//       { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//       { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPeding] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          console.log(res);
          if(!res.ok){
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data)
          setIsPeding(false);
          setError(null);
        })
        .catch(err => {
          // console.log(err.message);
          setIsPeding(false);
          setError(err.message)
        })
    }, []);

    return (
      <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <BlogList blogs = {blogs} title = "All Blogs" /> }
      </div>
    );
}
 
export default Home;
