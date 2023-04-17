import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPost from "./pages/BlogPost";
import { React, useEffect, useState } from "react";
import { blogList } from "./config/Api";

function App() {
  const [blogs, setBlogs] = useState([]);

  const getBlogContent = (title) => {
    console.log("=============", title)
    const blog = blogs.filter((blog) => blog.title === title)
    return blog[0]
  }

  // get content from buttercms
  useEffect(() => {
    blogList().then((res) => {
        console.log(res)
        setBlogs(res);
    })
  } , []);

  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage setBlogs={setBlogs} blogs={blogs}/>} />
          <Route path="/blog/:id" element={<BlogPost content={getBlogContent}/>} />
        </Routes>
      </div>
    </div>
  );
}
export default App;