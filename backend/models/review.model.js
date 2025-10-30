import mongoose ,{Schema} from "mongoose";

const reviewSchema = new Schema(
    {
        reviewMSG:{
            type:String,
            required:true
        },
        userId:{
            type:Schema.Types.ObjectId,
            required:true
        },
        roadmapId:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

export const Review = mongoose.model("Review", reviewSchema)