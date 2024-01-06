import express from "express";
import { createBlog, deleteBlogById, getAllBlog, getBlogById, updateBlogById } from "../controller/blogController.js";

export const BlogRouter = express.Router();

BlogRouter.get("/Blogs", getAllBlog);

BlogRouter.get("/Blogs/:id",getBlogById );

BlogRouter.post("/Blogs", createBlog);

BlogRouter.put("/Blogs/:id",updateBlogById );

BlogRouter.delete("/Blogs/:id",deleteBlogById );
