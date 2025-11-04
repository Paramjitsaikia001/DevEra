//user registration controller -> first input the email then send otp -> vertifying the email -> then put all user data 
//user login controller
//get current user
//updating user details 
//get the reviews of the user
//find the activity of the user
//update the profile picture and cover picture of the user
//savedroadmaps of the user
import { OTP } from "../models/otp.model.js";
import { User } from "../models/user.model.js";
// import { SavedRoadmap } from "../models/savedRoadmap.model.js";
// import { Activity } from "../models/activity.model.js";
// import { Reviews } from "../models/reviews.model.js";
import { Mailer } from "../utills/sendOTP.js";
import ApiError from "../utills/apiError.js";
import asyncHandler from "../utills/asyncHandler.js";
import apiResponse from "../utills/apiResponse.js";
import generateOTP from "../utills/generateOTP.js";


const sendOTP = asyncHandler(async (req, res) => {

  //get the email from req.body
  //check if the email is empty
  //check if the email is valid format
  //check if the email already exists in the database
  const { email } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required");
  }
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    throw new ApiError(400, "Invalid email format");
  }
  const exitEmail = await User.findOne({ email: email.toLowerCase().trim() });
  if (exitEmail && exitEmail.isEmailVerified) {
    throw new ApiError(400, "email is already exists . please login instead")
  }
  const otp = generateOTP();
  console.log(otp, email);

  await OTP.findOneAndUpdate(
    { email: email.toLowerCase().trim() },
    {
      otp: otp,
      expiredAt: new Date(Date.now() + 5 * 60 * 1000) //otp will expire in 5 minutes
    },
    {
      upsert: true,
      new: true
    }
  );
  try {
    await Mailer(email, otp);
    console.log("OTP sent");
  } catch (error) {
    throw new ApiError(500, "Failed to send OTP email", error.message);
  }

  return res.status(201).json(
    new apiResponse(201, "OTP sent to your email successfully")
  );
})

const verifyOTP = asyncHandler(async (req, res) => {
  //get the email and otp from req.body
  //check if the email and otp are empty
  //check if the email is valid format
  //check if the otp is valid format
  //check if the otp is expired
  //check if the otp is correct
  const { email, otp } = req.body;

  if (!email || !otp) {
    throw new ApiError(400, "Email and OTP are required");
  }

  const existingEmail = await User.findOne({ email: email.toLowerCase().trim() });
  if (existingEmail && existingEmail.isEmailVerified) {
    throw new ApiError(400, "Email is already verified. Please login instead.");
  }
  //find the otp in the OTP collection
  const record = await OTP.findOne({ email: email.toLowerCase().trim() });
  if (!record) {
    throw new ApiError(400, "OTP is expired or not found");
  }

  if (record.otp !== otp) {
    throw new ApiError(400, "Invalid OTP");
  }
  await OTP.deleteOne({ email: email.toLowerCase().trim() });

  // mark the email as verified (create user if it doesn't exist)
  const normalizedEmail = email.toLowerCase().trim();
  await User.findOneAndUpdate(
    { email: normalizedEmail },
    { $set: { email: normalizedEmail, isEmailVerified: true } },
    { upsert: true, new: true }
  );

  

  res.status(200).json(
    new apiResponse(200, "OTP verified successfully. Proceed to registration.")
  )

})

//i'm going to make the register user in several steps like in the fist step -user verify the email  then it click continue button -> second step - user fill personal details like name and set a userName and password then -> third step - user set the role,bio,github , linkedin, portfolio -> forth step - user select the profile picture and cover picture from the stored images -> final user is registered successfully
const getUserDetails = asyncHandler(async (req, res) => {
  //get the email,name,userName,password, from req.body
  //check if the email is verified or not
  //check if the userName is unique or not 
  //check the password is strong or not
  //check if the confirm password match with password or not

  const {email, fullName, userName, password, confirmPassword } = req.body;

  if (
    [email, fullName, userName, password, confirmPassword].some(field => !field)
  ) {
    throw new ApiError(400, "All fields are required");
  }

   const existingEmail = await User.findOne({ email: email.toLowerCase().trim() });
  if (existingEmail && existingEmail.isEmailVerified) {
    throw new ApiError(400, "Email is already verified. Please login instead.");
  }


  //validate userName
  const userNameRegex = /^[a-z_][a-z0-9_]*$/;
  if (!userNameRegex.test(userName)) {
    throw new ApiError(400, "Invalid userName format. userName should start with a letter or underscore and contain only letters, numbers, and underscores.")
  }
  //check if userName is unique
  const existinguserName = await User.findOne(
    { userName: userName.trim() }
  );

  if (existinguserName) {
    throw new ApiError(400, "userName is already taken, Please enter a unique userName.");
  }

  //validate password
  if (password.length < 8) {
    throw new ApiError(400, "Password must be at least 8 characters long.");
  }

  //validate confirm password
  if (password !== confirmPassword) {
    throw new ApiError(400, "Password and Confirm Password do not match.");
  }

  const normalizedEmail = email.toLowerCase().trim();

  const Newuser = await User.create({
    email: normalizedEmail,
    fullName,
    userName: userName.toLowerCase().trim(),
    password,
  })

  const createUser = await User.findById(Newuser._id).select("-password -refreshToken")

  if (!createUser) {
    throw new ApiError(500, "failed to register ,please try again later")
  }
  
  return res.status(201).json(
    new apiResponse(201, "User details is got successfully")
  )
})

export { sendOTP, verifyOTP, getUserDetails };