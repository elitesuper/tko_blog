import {React,  useState, useEffect } from 'react';
import EmptyList from '../components/EmptyList';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import { blogList } from '../config/Api';

const HomePage = ({setBlogs, blogs}) => {
  const [searchKey, setSearchKey] = useState('');
  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };
 // Search for blog by category
 const handleSearchResults = () => {
  const filtered = blogs.filter((blog) => {
    return blog.tags[0].name.toLowerCase().includes(searchKey.toLowerCase());
  });
  setBlogs(filtered);
};
  // Clear search and show all blogs
  const handleClearSearch = () => {
    blogList().then((res) => {
      setBlogs(res);
    })
    setSearchKey("");
  };

  return (
    <div>
      {/* Page Header */}
      <Header />
      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs}/>}

      {/*Page Footer */}
      <Footer />
    </div>
  );
};
export default HomePage;
