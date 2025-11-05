import { get } from "mongoose";
import { sendOTP,verifyOTP,register ,login,getCurrentUser} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {Router} from "express";

const authRouter =Router();

authRouter.post("/send-otp",sendOTP);
authRouter.post("/verify-otp",verifyOTP);
authRouter.post("/register",register);
authRouter.post("/login",login)
authRouter.get("/current-user",verifyJWT,getCurrentUser)

export default authRouter;