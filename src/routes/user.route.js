import { Router } from "express";
import userController from "../controllers/user.controller.js";

const controller = new userController();
const userRouter = Router();

userRouter.post("/users", async (req, res) =>
  controller.addUserControler(req, res)
);

export default userRouter;
