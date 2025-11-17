import React, { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { textStyles, inputStyles } from '../../utils/styles';
import SampleRoadmapImage from "../../assets/images/sampleroadmap.png"
import Logo from '../ui/Logo';
import { Link } from 'react-router-dom';
const PersonalDetails = () => {
    const [bio, setbio] = useState('');
    const [github, setgithub] = useState("")
    const [linkedin, setlinkedin] = useState('');
    const [Portfolio, setPortfolio] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        // Submit the form data to your server or API
        console.log(e)
    };






    return (
        <section className='flex justify-center items-center w-[100%] h-[100vh]'>
            <div className='flex flex-col w-[95%] h-[90vh] bg-primary-dark rounded-[2rem] shadow-lg shadow-black/20'>

                <div className="PersonalDetails-container flex flex-col  justify-center items-center w-[90%] h-full rounded-r-[2rem]">
                    <div className="PersonalDetails-header mb-4">
                    </div>
                    <div className="PersonalDetails-form w-[80%] ">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8 justify-center w-full items-center">

                            <div className="github flex flex-col w-full  gap-4">

                                <input
                                    type='url'
                                    name="github"
                                    placeholder="Github Link"
                                    value={github}
                                    onChange={(e) => setgithub(e.target.value)}
                                    // className="h-18 outline-none pl-2 text-xl w-1/2 bg-white/20 border-2 border-white/40 rounded-lg  placeholder-white/40 text-white/80 font-[500] "
                                    className={inputStyles.primary}
                                />

                                <input
                                    type="url"
                                    name="linkedin"
                                    id="linkedin"
                                    placeholder="linkedin link"
                                    value={linkedin}
                                    onChange={(e) => setlinkedin(e.target.value)}
                                    className={`
                      ${inputStyles.primary}
                      h-18 outline-none pl-2 text-xl bg-transparent border-2 border-white/50 rounded-lg  placeholder-white/40 text-white font-[500] h-full`}
                                />

                                <input
                                    type="url"
                                    name="portfolio"
                                    placeholder="Personal Portfolio link"
                                    value={Portfolio}
                                    onChange={(e) => setPortfolio(e.target.value)}
                                    className={`
                      ${inputStyles.primary}
                      h-18 outline-none pl-2 text-xl bg-transparent border-2 border-white/50 rounded-lg  placeholder-white/40 text-white font-[500] h-full`}
                                />


                            </div>

                            <div className="passowordandconfirm flex w-full gap-4 ">







                            </div>

                            <div className="linkedinandOTP w-full flex flex-col gap-8 ">
                                <div
                                    className={`
                linkedinsendOTPBtn flex w-full gap-4 items-center h-14 justify-center `}>

                                    <textarea
                                        type="text"
                                        name="bio"
                                        
                                        id="user-name"
                                        placeholder="bio"
                                        value={bio}
                                        onChange={(e) => setbio(e.target.value)}
                                        className={inputStyles.primary}
                                    />
                                    <button

                                        className="w-[25%] py-2 hover:bg-transparent border-2 rounded-full border-white/50  text-md text-black font-semibold bg-white hover:text-white transition-colors duration-300"
                                    >Send OTP</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="if-register mt-4">
                        <p className={textStyles.body}>Already registered?
                            <Link to="/traintoexcellency/Frontend-build/login"
                                className='underline cursor-pointer text-[#00ffee]'>Click here</Link></p>
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
        </section>
    );
};

export default PersonalDetails;
