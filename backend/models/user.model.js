import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            trim: tru, e,
            index: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            trim: tru, e,
            index: true,
        },
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
        fullName: {
            type: String,
            unique: false,
            required: true,
            index: true,
        },
        password: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            required: false,
            index: true,
        },
        github: {
            type: String,
            required: false,
            index: true,
        },
        portfolio: {
            type: String,
            required: false,
            index: true,
        },
        Linkedin: {
            type: String,
            required: false,
            index: true,
        },
        Role: {
            type: String,
            enum: ['Student', 'Organisation', 'Developer', 'Employee'],
            default: 'Developer'
        },
        reviews: {
            type: Schema.types.ObjectId,
            ref: "Reviews"
        },
        activity: {
            type: Schema.types.ObjectId,
            ref: "Activity"
        },
        savedRoadmap: {
            type: Schema.types.ObjectId,
            ref: "Saved"
        },
        joinedDate: {
            type: Date,
            default: Date.now()
        },
        refreshToken:{
            type:String
        }
        

    },
    {
        timestamps: true
    }
)

//hashing the password before saving the document using bcrypt
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next()
})

//now we need to compare the userInputed password with the hashed password
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

//generating the access token -
userSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {

            _id: this._id,
            userName: this.userName,
            email: this.email,
            fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACESS_TOKEN_EXPIN
        }
    )
}

userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        {

            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIN
        }
    )
}

export const User=mongoose.model("User",userSchema)