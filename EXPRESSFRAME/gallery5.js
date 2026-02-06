app.use(express.static('public'));

app.get('/gallery', (req, res) => {
  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
  res.render('gallery', { images });
});
