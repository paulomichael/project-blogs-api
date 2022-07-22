const postService = require('../services/postService');

const createBlogPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { userId } = req;
    // console.log('------------------------> postController.createBlogPost:req.userId:', req.userId);
    const post = await postService.createBlogPost({ title, content, categoryIds }, userId);
    if (post && post.status) {
      return res.status(post.status).json({ message: post.message });
    }
//    const token = jwt.sign({ data: email }, secret, jwtConfig);
//    return res.status(201).json({ token });
    return res.status(201).json(post);
} catch (error) {
  next(error);
  }
};

// const getAllUsers = async (req, res, next) => {
//   try {
//     const allUsers = await userService.getAllUsers();
//    if (allUsers && allUsers.status) {
//      return res.status(allUsers.status).json({ message: allUsers.message });
//    }
//    res.status(200).json(allUsers);
// } catch (error) {
//   next(error);
// }
// };
// 
// const getUserById = async (req, res, next) => {
//   try {
//     const { id: userId } = req.params;
//     const user = await userService.getUserById(userId);
//    if (user && user.status) {
//      return res.status(user.status).json({ message: user.message });
//    }
//    res.status(200).json(user);
// } catch (error) {
//   next(error);
// }
// };

module.exports = {
  createBlogPost,
//  getAllUsers,
//  getUserById,
};
