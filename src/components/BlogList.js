import React from 'react';
import BlogItem from './BlogItem';
import '../index.css';
const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog, index) => (
        <div key={index}>
          <BlogItem blog={blog}/>
        </div>
      ))}
    </div>
  );
};
export default BlogList;