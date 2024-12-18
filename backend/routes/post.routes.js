import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { createPost, likeUnlikePost, commentOnPost, deletePost, getAllPosts, getLikedPosts, getUserPosts } from '../controllers/post.controller.js';

const route = express.Router();

route.get("/all", protectRoute, getAllPosts);
route.get("/likes/:id", protectRoute, getLikedPosts);
route.get("/user/:username", protectRoute, getUserPosts);
route.post("/create", protectRoute, createPost);
route.post("/like/:id", protectRoute, likeUnlikePost);
route.post("/comment/:id", protectRoute, commentOnPost);
route.delete("/:id", protectRoute, deletePost);

export default route;