import { useEffect, useState } from 'react';
import { API } from '../backend';
import Blog from '../components/Blog';
import Navbar from '../components/Navbar';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      //call api
      fetch(`${API}/blogs`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setIsLoading(false);
          if (data.error) {
            alert(data.error);
            return;
          }

          setBlogs(data);
        });
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    <div className='flex justify-center items-center min-h-screen'>
      Loading...
    </div>;
  }
  return (
    <div>
      <Navbar />
      <div className='container max-w-[1080px] w-[95%] mt-4 mx-auto'>
        <h2>All Blogs</h2>
        <ul>
          {!isLoading && blogs.map((blog) => {
            return <Blog blog={blog} key={blog._id} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default BlogList;
