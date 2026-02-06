let posts = [
  { id: 1, title: "First Post", content: "Hello Blog!" }
];

// List all posts
app.get('/blog', (req, res) => {
  res.render('blog-list', { posts });
});

// View single post
app.get('/blog/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (!post) return res.send("Post not found");
  res.render('blog-view', { post });
});

// New post form
app.get('/blog/new', (req, res) => {
  res.render('blog-new');
});

// Create post
app.post('/blog', (req, res) => {
  const { title, content } = req.body;
  posts.push({
    id: posts.length + 1,
    title,
    content
  });
  res.redirect('/blog');
});
