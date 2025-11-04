import { get } from "mongoose";
import { sendOTP,verifyOTP,getUserDetails } from "../controllers/user.controller.js";
import {Router} from "express";

const authRouter =Router();

authRouter.post("/send-otp",sendOTP);
authRouter.post("/verify-otp",verifyOTP);
authRouter.post("/register",getUserDetails);
export default authRouter;