const express = require("express");
const {
  createPost,
  getAllPosts,
  getAdminPosts,
  getSinglePost,
  updatePost,
  deletePost,
  getCreatorPosts,
} = require("../controller/PostController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/posts").get(getAllPosts);
router
  .route("/admin/posts")
  .get(isAuthenticatedUser, authorizeRoles("admin","creator"), getAdminPosts);

router
  .route("/post/new")
  .post(isAuthenticatedUser, authorizeRoles("admin","creator"), createPost);

router
  .route("/post/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin","creator"), updatePost)
  .delete(isAuthenticatedUser, authorizeRoles("admin","creator"), deletePost)
  .get(getSinglePost);

router.route("/creator/posts").get(isAuthenticatedUser, authorizeRoles("creator"),getCreatorPosts);

module.exports = router;
