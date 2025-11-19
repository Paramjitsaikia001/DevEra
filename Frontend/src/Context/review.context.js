import { createContext, useEffect, useState } from "react";
import { Api } from "../utils/api";

const ReviewContext = createContext()

export const ReviewProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const addReviews = async ({ reviewMSG, roadmapId }) => {
        setLoading(true)
        setError(null)
        try {
            const res = await Api.post("/reviews/create-review", { reviewMSG, roadmapId })
            console.log(res.data);
            
            return res.data
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const getReviewsById = async ({ roadmapId }) => {
        setLoading(true)
        setError(null)
        try {
            const res = await Api.post(`/reviews/get-reviews-roadmapid/${roadmapId}`)
            return res.data
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const getReviewsByUser = async ({ userId }) => {
        setLoading(true)
        setError(null)
        try {
            const res = await Api.post("/reviews/get-reviews-user", { userId })
            return res.data
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const getAllReviews = async () => {
        setLoading(true)
        setError(null)
        try {
            const res = await Api.get("/reviews")
            console.log(res.data.data);
            
            return res.data.data
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }

    }

    useEffect(()=>{
        getAllReviews()
    },[])

    return (
        <ReviewContext.Provider
        value={{
            loading,
            error,
            addReviews,
            getReviewsById,
            getReviewsByUser,
            getAllReviews
        }}
        >{children}</ReviewContext.Provider>
    )
}

    export default ReviewContext