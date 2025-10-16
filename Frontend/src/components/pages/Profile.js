import React, { useState } from "react";
import { Github, BriefcaseBusiness, GraduationCap, CalendarDays } from "lucide-react"
import { Link } from "react-router-dom";
export default function Profile() {
    // Dummy user data
    const user = {
        fullName: "Paramjit Saikia",
        username: "paramjit",
        bio: "learing coding. wrting code and solvinig problem by using technology",
        email: "paramjit@example.com",
        github: "https://github.com/paramjit",
        portfolio: "https://paramjit.dev",
        joinDate: "Jan 2025",
        role: "student",
        isMentor: true,
        savedRoadmaps: [
            "Frontend Development",
            "AI/ML Development",
            "Web Development"
        ]
    };

    const [isSavedRoadmaps, setSavedRoadmaps] = useState(true)
    const [isReviews, setReview] = useState(false)
    const [isActivity, setActivity] = useState(false)

    const SavedRoadmapHandler = () => {
        if (isSavedRoadmaps === false) {
            if (isReviews === true) {
                setReview(!isReviews)
            } else if (isActivity === true) {
                setActivity(!isActivity)
            }

                setSavedRoadmaps(!isSavedRoadmaps)
        }
    }

    const IsReviewsHandler = () => {
        if (isReviews === false) {
            if (isSavedRoadmaps === true) {
                setSavedRoadmaps(!isSavedRoadmaps)
            } else if (isActivity === true) {
                setActivity(!isActivity)
            }

                setReview(!isReviews)
        }

    }
    const IsActivityHandler = () => {
        if (isActivity === false) {
            if (isSavedRoadmaps === true) {
                setSavedRoadmaps(!isSavedRoadmaps)
            } else if (isReviews === true) {
                setReview(!isReviews)
            }

                setActivity(!isActivity)
        }
    }

    console.log(isSavedRoadmaps, isReviews,isActivity)

    return (
        <section className="flex flex-col lg:w-[80%] w-[100%] h-[100%]">
            <div className="w-full flex flex-col gap-8">
                {/* Profile Details */}
                <div className="profiledetails flex flex-col relative">


                    <div className="relative pb-6">
                        <div className="header w-full relative">
                            <div className="cover w-full h-[28vh] bg-red-400 ">
                            </div>
                            <div className="profilepic w-[10rem] h-[10rem] rounded-full bg-white absolute border-[5px] border-primary-bg -bottom-16 left-3">

                            </div>
                            <div className="profilepic text-white  rounded-full border-2 font-bold border-[#ffffff] py-2 px-3 absolute right-0 m-2 cursor-pointer">
                                <p>Edit profile</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-10 px-8 relative">
                        <div className="nameusername flex items-baseline gap-3">
                            <div className="names flex flex-col">
                                <span className="font-extrabold text-3xl text-white">{user.fullName}</span>
                                <span className="text-xl text-[#cdcdcd]">@{user.username}</span>
                            </div>
                            <div className="professionalDetail bg-black py-1 px-3 rounded-full transition-transform duration-300">
                                <div className="student flex text-[#9590df] font-semibold gap-1 font-xl">
                                    <div className="intro flex gap-1">

                                        <GraduationCap />
                                        <p>Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bio text-white w-[30vw]">
                            <p>{user.bio}</p>
                        </div>
                        <div className="linksandjoineddate flex flex-col gap-3">

                            <div className="linkes flex gap-3 ">

                                <span className="flex bg-[#fff] w-fit py-2 px-3 rounded-md gap-2 cursor-pointer hover:text-white hover:bg-black transition-colors duration-200">
                                    <Github />
                                    <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 ">
                                        Github
                                    </a>
                                </span>
                                <span className="flex bg-[#fff] w-fit py-2 px-3 rounded-md gap-2 cursor-pointer hover:text-white hover:bg-black transition-colors duration-200">
                                    <BriefcaseBusiness />
                                    <a href={user.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                                        Personal Portfolio
                                    </a>
                                </span>
                            </div>
                            <div className="joinedate flex gap-2 text-[#9590df] items-center ">
                                <CalendarDays />
                                <p className=" text-md font-[500] font-[Inter]">Joined {user.joinDate}</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Saved Roadmaps */}
                <div className="border-b border-[#000]  w-full flex ">
                    <div
                        onClick={SavedRoadmapHandler}
                        className="savedroadmaps w-1/3 flex flex-col items-center hover:bg-[#4e4e81] justify-center cursor-pointer">

                        <h2 className={`${isSavedRoadmaps === false ? "text-[#a8a6a6]" : "text-white"}  py-3 text-xl font-semibold font-[Inter] ]`}>Saved Roadmaps</h2>
                        <div className={`${isSavedRoadmaps === false ? "bg-transparent" : "bg-primary-dark"} underline w-[50%] rounded-full h-2 `}></div>
                    </div>
                    <div
                        onClick={IsReviewsHandler}
                        className="reviews w-1/3 flex flex-col items-center hover:bg-[#4e4e81]">
                        <h2 className={`${isReviews === false ? "text-[#a8a6a6]" : "text-white"} cursor-pointer text-xl font-semibold font-[Inter] py-3`}>Reviews</h2>
                        <div className={`${isReviews === false ? "bg-transparent" : "bg-primary-dark"} underline w-[50%] rounded-full h-2 `}></div>
                    </div>
                    <Link
                        onClick={IsActivityHandler}
                        className="reviews w-1/3 flex flex-col items-center hover:bg-[#4e4e81]">
                        <h2 className={`${isActivity === false ? "text-[#a8a6a6]" : "text-white"} cursor-pointer text-xl font-semibold font-[Inter] py-3`}>Activity</h2>
                        <div className={`${isActivity === false ? "bg-transparent" : "bg-primary-dark"} underline w-[50%] rounded-full h-2 `}></div>
                    </Link>
                </div>


            </div>
        </section>
    );
}