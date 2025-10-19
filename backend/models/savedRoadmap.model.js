import mongoose, { Schema } from "mongoose";

const savedRoadmapSchema = new Schema(
    {
        userId: {
            type: Schema.types.ObjectId,
            required:true
        },
        roadmapRoute:{
            type:Schema.types.ObjectId,
            required:true
        }
    },
    {
        timestamps:true
    }
)

export const SavedRoadmap=mongoose.model("SavedRoadmap",savedRoadmapSchema)