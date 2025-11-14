import React, { useState } from 'react'
import ProfileImage from "../../assets/images/appLogo.png"
import ProfileAndcover from '../../hooks/profileAndcover';
import { CircleCheckBig } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdditionalDetails = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedCover, setSelectedCover] = useState(null);
  console.log(selectedCover);



  const { ProfilePics: profileOptions, CoverPics: coverOptions, loading } = ProfileAndcover()

  if (loading) {
    return <h1>loading</h1>
  }

  return (
    <div className='flex justify-center items-center w-[100%] h-[100vh]'>
      <div className=' text-white   w-[95%] h-[90vh] bg-primary-dark rounded-[2rem] shadow-lg shadow-black/20'>

        <div className="sections flex justify-center items-center w-full h-[90%]">


          <div className="profilepicx w-[20%] h-full flex flex-col justify-center items-center gap-8">

            <h2 className=" text-xl w-full text-center font-extralight italic">Select Profile Picture</h2>
            <div className="flex flex-col gap-10 mb-6">
              {profileOptions.map((profilepic) => (
                <div
                  onClick={() => setSelectedProfile(profilepic.id)}
                  className={`relative flex transition-transform duration-300  rounded-full images w-40 h-40`}>
                  <img
                    key={profilepic.id}
                    src={profilepic.url}
                    alt={profilepic.tittle}
                    className={`w-full h-full rounded-full object-cover cursor-pointer `}
                    onClick={() => setSelectedProfile(profilepic.id)}
                  />
                  <div className={`bg-black/50 top-0 text-white flex text-4xl font-bold rounded-full absolute w-full object-cover h-full z-20 ${selectedProfile === profilepic.id ? "" : "hidden"}`}>
                    <CircleCheckBig className='text-white font-bold w-8 h-8 m-2' strokeWidth={3.5} /> </div>
                </div>
              ))}
            </div>
          </div>

          <div className="line h-[90%] rounded-full w-[2px] bg-white"></div>

          <div className="coverImages w-[70%] flex-col items-center justify-center h-full py-2">

            <h2 className=" text-xl w-full text-center font-extralight italic">Select Cover Photo</h2>
            <div className="w-full h-full justify-center items-center flex flex-col gap-12">
              {coverOptions.map((coverImage) => (
                <div
                  onClick={() => setSelectedCover(coverImage.id)}
                  className={`relative flex transition-transform duration-300  rounded-xl images w-[70%] h-40`}>

                  <img
                    key={coverImage.id}
                    src={coverImage.url}
                    alt={coverImage.tittle}
                    className={`relative h-full w-full object-cover rounded-xl cursor-pointer `}



                  />
                  <div className={`bg-black/50 top-0 text-white flex text-4xl font-bold rounded-xl absolute w-full object-cover h-full z-20 ${selectedCover === coverImage.id ? "" : "hidden"}`}>
                    <CircleCheckBig className='text-white font-bold w-8 h-8 m-2' strokeWidth={3.5} /> </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4 w-full justify-between px-8">
          <Link
            to="/traintoexcellency/Frontend-build/home"
           className="px-4 py-2 bg-gray-200 text-gray-950 rounded-sm">Skip</Link>
          <Link
          to="/traintoexcellency/Frontend-build/home"
          
          className="px-4 py-2 bg-blue-500 text-white rounded-sm">Next</Link>
        </div>
      </div>
    </div>
  )
}

export default AdditionalDetails