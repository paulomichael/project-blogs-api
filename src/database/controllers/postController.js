const postService = require('../services/postService');

const createBlogPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = 1; // TODO: pegar o id do usuário logado
    const post = await postService.createBlogPost({ title, content, categoryIds }, userId);
//    onsole.log('---------------------> postController:req.user: ', req.user);
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

const getAllBlogPosts = async (req, res, next) => {
  try {
    const allPosts = await postService.getAllBlogPosts();
    return res.status(200).json(allPosts);
} catch (error) {
  next(error);
  }
};

const getBlogPostById = async (req, res, next) => {
try {
  const { id: postId } = req.params;
  const blogPost = await postService.getBlogPostById(postId);
  if (blogPost && blogPost.status) {
    return res.status(blogPost.status).json({ message: blogPost.message });
  }
  console.log('---------> postController.getBlogPostById:blogPost: ', blogPost);
  // return blogPost;
  return res.status(200).json(blogPost);
} catch (error) {
  next(error);
}
};

module.exports = {
  createBlogPost,
  getBlogPostById,
  getAllBlogPosts,
};
