const postService = require('../services/postService');

const createBlogPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = 1; // TODO: pegar o id do usuário logado
    const post = await postService.createBlogPost({ title, content, categoryIds }, userId);
//    console.log('---------------------> postController:req.user: ', req.user);
    // if (post && post.status) {
    if (post.status) {
      return res.status(post.status).json({ message: post.message });
    }
//    console.log('-------> postController.createBlogPost:post: ', post);
    return res.status(201).json(post);
} catch (error) {
  next(error);
  }
};

module.exports = {
  createBlogPost,
};
