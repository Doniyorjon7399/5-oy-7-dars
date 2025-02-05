import { Router } from "express";
import postController from "../controllers/post.controller.js";

const postRouter = Router();
const controller = new postController();

postRouter.post("/posts", async (req, res) =>
  controller.addPostController(req, res)
);
postRouter.get("/posts", async (req, res) =>
  controller.getPostcontroller(req, res)
);
postRouter.get("/posts/:id", async (req, res) =>
  controller.getPostIdcontroller(req, res)
);
export default postRouter;
