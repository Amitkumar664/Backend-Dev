const users = []; // {id, username, role}
const posts = []; // {id, userId, content}

// Auth check
const isAuthenticated = (req, res, next) => {
    if (!req.session.user) {
        return res.status(401).json({ message: "Not logged in" });
    }
    next();
};

// Role check
const requireRole = (role) => {
    return (req, res, next) => {
        if (req.session.user.role !== role && req.session.user.role !== 'admin') {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    };
};

// Owner or moderator
const isOwnerOrModerator = (req, res, next) => {
    const post = posts.find(p => p.id == req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const user = req.session.user;

    if (post.userId === user.id || user.role === 'moderator' || user.role === 'admin') {
        req.post = post;
        return next();
    }

    return res.status(403).json({ message: "Unauthorized" });
};

// Create post
app.post('/posts', isAuthenticated, (req, res) => {
    const newPost = {
        id: posts.length + 1,
        userId: req.session.user.id,
        content: req.body.content
    };
    posts.push(newPost);
    res.json(newPost);
});

// Edit post
app.put('/posts/:id', isAuthenticated, isOwnerOrModerator, (req, res) => {
    req.post.content = req.body.content;
    res.json(req.post);
});

// Delete post
app.delete('/posts/:id',
    isAuthenticated,
    requireRole('moderator'),
    (req, res) => {
        const index = posts.findIndex(p => p.id == req.params.id);
        posts.splice(index, 1);
        res.json({ message: "Deleted" });
    }
);