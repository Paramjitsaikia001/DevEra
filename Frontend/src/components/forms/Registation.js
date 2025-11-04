import React, { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { buttonStyles, inputStyles, textStyles } from '../../utils/styles';
import SampleRoadmapImage from "../../assets/images/sampleroadmap.png"
import Logo from '../ui/Logo';
const Registration = () => {
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [passwordType, setpasswordTtype] = useState("password")
  const [ConfirmpasswordType, setConfirmpasswordTtype] = useState("password")
  const [otp, setOtp] = useState("")
  const [showOTPsection, setShowotpsection] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setError('');
    // Submit the form data to your server or API
    console.log(e)
  };


  //hide and show password toggle
  const hideShowPassword = () => {
    if (passwordType === "password") {

      setpasswordTtype("text")
    } else {
      setpasswordTtype("password")
    }
  }

  const hideShowConfirmPassword = () => {
    if (ConfirmpasswordType === "password") {

      setConfirmpasswordTtype("text")
    } else {
      setConfirmpasswordTtype("password")
    }
  }

  const showOTPHandler = () => {
    setShowotpsection(!showOTPsection)
  }
  return (
    <section className='flex justify-center items-center w-[100%] h-[100vh]'>
      <div className='flex w-[95%] h-[90vh] bg-primary-dark rounded-xl shadow-lg shadow-black/20'>

        <div className="detailsofplatofoem relative w-[50%] flex-col h-full flex rounded-l-lg p-12 bg-cover" style={{ backgroundImage: `url(${SampleRoadmapImage})` }}>
          <div className="divbackcover bg-primary-dark/80 absolute top-0 right-0  w-full h-full rounded-l-lg"></div>
          <div className="logo z-10 bg-white w-fit px-3 rounded-md shadow-sm shadow-black">

            <Logo />
          </div>
          <div className="info-section flex flex-col justify-end items-center h-full z-10">
            <p className=" text-white bg-white/30 px-4 py-4 rounded-lg text-lg mb-6 border-white border backdrop-blur-sm backdrop-filter shadow-sm italic font-serif">
              “Join the journey to mastery — create your account and start exploring your personalized development roadmap today.”
            </p>

          </div>
        </div>

        <div className="registration-container flex flex-col bg-blue-500 justify-center items-center w-[50%] h-full rounded-r-lg">
          <div className="registration-header mb-4">
          </div>
          <div className="registration-form w-[80%] ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 justify-center w-full items-center">

              <div className="fullnameandusername flex w-full  gap-4 ">

                <input
                  type="text"
                  name="fullName"
                  id="full-name"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="h-18 outline-none pl-2 pt-6 pb-1 text-xl w-1/2 bg-transparent border-b-4 border-white  placeholder-black/40 text-black font-[500]  focus:border-primary-cyan transition-all duration-300 hover:bg-gradient-to-t from-white/50 to-transparent "
                />

                <input
                  type="text"
                  name="userName"
                  id="user-name"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="h-18 outline-none px-2 pt-6 pb-1 text-xl w-1/2 bg-transparent border-b-4 border-white  placeholder-black/40 text-black font-[500]  focus:border-primary-cyan transition-all duration-300 hover:bg-gradient-to-t from-white/50 to-transparent "
                />
              </div>

              <div className="passowordandconfirm flex w-full gap-4">



                <div className="password pt-6 px-4 w-1/2 flex items-center justify-center bg-transparent border-b-4 border-white  placeholder-black/40 text-black font-[500]  focus:border-primary-cyan transition-all duration-300 hover:bg-gradient-to-t from-white/50 to-transparent">

                  <input
                    type={passwordType}
                    name="password"
                    id="hs-toggle-password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-18 outline-none pt-2 text-xl  bg-transparent placeholder-black/40"

                  />
                  <button
                    onClick={hideShowPassword}
                    className='items-center justify-center pt-2'
                  >
                    <Eye className={`${passwordType === "password" ? "hidden" : ""} text-white`} />
                    <EyeClosed className={`${passwordType === "password" ? "" : "hidden"} text-white`} />
                  </button>
                </div>


                <div className="confirmpassword pt-6 px-4 w-1/2 flex items-center justify-center bg-transparent border-b-4 border-white  placeholder-black/40 text-black font-[500]  focus:border-primary-cyan transition-all duration-300 hover:bg-gradient-to-t from-white/50 to-transparent">

                  <input
                    type={ConfirmpasswordType}
                    name="password"
                    id="confirm-password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-18 outline-none pt-2 text-xl  bg-transparent placeholder-black/40"

                  />
                  <button
                    onClick={hideShowConfirmPassword}
                    className='items-center justify-center pt-2'
                  >
                    <Eye className={`${ConfirmpasswordType === "password" ? "hidden" : ""} text-white`} />
                    <EyeClosed className={`${ConfirmpasswordType === "password" ? "" : "hidden"} text-white`} />
                  </button>
                </div>
              </div>

              <div className="emailandOTP w-full flex flex-col gap-8 ">
                <div className="emailsendOTPBtn flex w-full gap-4 items-center justify-center ">

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-18 outline-none px-4 pt-6 pb-1 text-xl w-[80%] bg-transparent border-b-4 border-white  placeholder-black/40 text-black font-[500]  focus:border-primary-cyan transition-all duration-300 hover:bg-gradient-to-t from-white/50 to-transparent "
                  />
                  <button
                    onClick={showOTPHandler}
                    className="w-[20%] py-2 hover:bg-transparent border-2 rounded-full border-white  text-lg text-black font-semibold bg-white hover:text-black transition-colors duration-300"
                  >Send OTP</button>
                </div>
                <div className={`${showOTPsection === true ? "" : "hidden"} otpsection flex gap-4 items-center justify-center transition-transform duration-500`}>
                  <input
                    type="text"
                    name="otp"
                    id="otp"
                    value={otp}
                    placeholder='Enter OTP'
                    onChange={(e) => setOtp(e.target.value)}
                    className="h-18 outline-none px-4 pt-6 pb-1 text-xl w-[60%] bg-transparent border-b-4 border-white  placeholder-black/40 text-black font-[500]  focus:border-primary-cyan transition-all duration-300 hover:bg-gradient-to-t from-white/50 to-transparent "
                  />
                  <button
                    className="w-[40%] py-2 hover:bg-transparent border-2 rounded-full border-white  text-lg text-black font-semibold bg-white hover:text-black transition-colors duration-300"
                  >
                    Verify Email
                  </button>
                </div>
              </div>



              <select
                name="role"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="h-18 outline-none px-4 pt-6 pb-1 text-xl w-full bg-transparent border-b-4 border-white  font-[500]  focus:border-primary-cyan transition-all duration-300 hover:bg-gradient-to-t from-white/50 to-transparent flex items-end"
              >
                <option value="" className='text-white'> Choose a Role</option>
                <option value="Developer">Developer</option>
                <option value="Student" >Student</option>
                <option value="Educator">Educator</option>
              </select>
              <button type="submit" className={buttonStyles.secondary}>
                Register
              </button>
            </form>
          </div>
          <div className="if-register mt-4">
            <p className={textStyles.body}>Already registered? <span className='underline cursor-pointer'>Click here</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
