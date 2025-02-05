import { Router } from "express";
import postController from "../controllers/post.controller.js";

const postRouter = Router();
const controller = new postController();

postRouter.post("/posts", async (req, res) =>
  controller.addPostController(req, res)
);
export default postRouter;
