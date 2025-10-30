import mongoose,{Schema} from "mongoose";
import { use } from "react";

const activitySchema=new Schema(
    {
        userId:{
            type:Schema.Types.ObjectId,
            required:true
        },
        recentRoadmapOpened:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

export const Activity = mongoose.model("Activity", activitySchema)