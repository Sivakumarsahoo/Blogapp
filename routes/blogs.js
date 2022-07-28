const router = require('express').Router();
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json('Blog not found!');
    }

    return res.status(200).json(blog);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();

    if (!blogs) {
      return res.status(404).json('Blogs not found!');
    }

    return res.status(200).json(blogs);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, author } = req.body;

    if (!title || !description || !author) {
      return res.status(400).json('All fields are required!');
    }

    const newBlog = new Blog(req.body);

    await newBlog.save();

    return res.status(201).json('Blog created successfully!');
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

module.exports = router;