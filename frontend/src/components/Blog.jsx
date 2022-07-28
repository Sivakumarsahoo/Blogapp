const Blog = ({ blog }) => {
  return (
    <div className='my-4 shadow-md p-4 rounded-md'>
      <h1 className='text-4xl font-bold'>{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  );
};
export default Blog;
