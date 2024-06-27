import express from "express";
import { loginUser, signupUser } from "../controllers/userController.js";

const userRouter = express.Router();
// Routes regarding user signup and login
userRouter.post("/signup", signupUser);
userRouter.post("/login", loginUser);

export default userRouter;