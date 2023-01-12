const Post = require("../models/PostModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
const Features = require("../utils/Features");
const cloudinary = require("cloudinary");

// Create Post
exports.createPost = catchAsyncErrors(async (req, res, next) => {
    let images = [];
  
    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }
  
    const imagesLinks = [];
  
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "posts",
      });
  
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
  
    req.body.images = imagesLinks;
    req.body.user = req.user.id;
  
    const post = await Post.create(req.body);
  
    res.status(201).json({
      success: true,
      post,
    });
  });


// get all posts
exports.getAllPosts = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 8;

  const postsCount = await Post.countDocuments();

  const feature = new Features(Post.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  const posts = await feature.query;
  res.status(200).json({
    success: true,
    posts,
    postsCount,
    resultPerPage,
  });
});

// Get All post (Admin)
exports.getAdminPosts = catchAsyncErrors(async (req, res, next) => {
  const posts = await Post.find();

  res.status(200).json({
    success: true,
    posts,
  });
});

// Get All post (Creator)
exports.getCreatorPosts = catchAsyncErrors(async (req, res, next) => {
  const posts = await Post.find({user: req.user._id});

  res.status(200).json({
    success: true,
    posts,
  });
});

// Update Post -- Admin
exports.updatePost = catchAsyncErrors(async (req, res, next) => {
  let post = await Post.findById(req.params.id);
  if (!post) {
    return next(new ErrorHandler("Post is not found with this id", 404));
  }

  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Delete image from cloudinary
    for (let i = 0; i < post.images.length; i++) {
      await cloudinary.v2.uploader.destroy(post.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "posts",
      });
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    req.body.images = imagesLinks;
  }

  post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });
  res.status(200).json({
    success: true,
    post,
  });
});

// Delete a Post
exports.deletePost = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(new ErrorHandler("Post is not found with this id", 404));
  }

  // Deleting images from cloudinary
  for (let i = 0; 1 < post.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      post.images[i].public_id
    );
  }

  await post.delete();

  res.status(200).json({
    success: true,
    message: "post deleted successfully",
  });
});

// single Post details
exports.getSinglePost = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return next(new ErrorHandler("Post is not found with this id", 404));
  }

  res.status(200).json({
    success: true,
    post,
  });
});