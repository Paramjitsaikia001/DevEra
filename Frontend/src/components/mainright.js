import { Swiper, SwiperSlide } from 'swiper/react';
import '../index.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


import Footer from './Footer'
import webdevelopment from '../images/DevelopmentImage/Web_development.webp'
import appdevelopment from '../images/DevelopmentImage/appdevelopment.jpg'
import gamedevelopment from '../images/DevelopmentImage/gamedevelopment.jpg'
import c_language from '../images/LanguageImage/c-programming-1.png'
import cplusplus from '../images/LanguageImage/c-plus-plus-programming-language.jpg'
import python from '../images/LanguageImage/python-language.jpg'
import { Link, useNavigate } from 'react-router-dom'
import TypingEffect from 'react-typing-effect';
import Header from './Header'
import MobileNav from './mobilenav'
import Reviews from './Review';
export default function Mainright() {
    const nagivate = useNavigate();
    const routehander = (name) => {
        nagivate(`/traintoexcellency/Frontend-build/development/${name}`);
    }

    return (
        <section className={` flex flex-col lg:w-[80%] w-[100%]  h-full gap-4 global-scroll-bar`}>
            <div className='flex justify-between py-4 px-4'>
                <Header />
            </div>
            <main className="flex flex-col gap-12 p-4 w-[100%]">
                <div className="mainline">
                    <p className="flex flex-col gap-1">
                        <span className="text-white font-bold text-3xl flex flex-col">
                            <span className='text-white'>Hello</span>
                            <TypingEffect text={[' Developers </>', ' Coders </>']} speed={100} eraseSpeed={50} eraseDelay={2000} typingDelay={1000} />
                        </span>
                        <p className="text-purple-400 text-xl"> Ready to Elevate Your Coding Journey? At TrainToExcellency, we offer tailored roadmaps for every area of development, guided by our AI assistant. Whether you’re exploring web development, mastering machine learning, or diving into mobile apps, we’re here to support you at every stage. Start your journey and achieve excellence today!</p>

                    </p>

                </div>
                <div className="whatisfor z-1 w-[100%] items-center flex flex-col gap-4 justify-center  relative md:h-[50vh] ">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="swiper"
                    >
                        <SwiperSlide className='swiper-slide flex justify-center items-center'>
                            <div className="slide1details text-6xl flex justify-center items-center text-[#a0d4ff] font-bold">
                                <h1>We Features in</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide flex flex-col gap-3 justify-center items-center text-[#a0d4ff]'>
                            <div className="slide2Header">
                                <h1 className="text-6xl font-bold">What is for?</h1>
                            </div>
                            <div className="slide2details text-xl text-white">
                                <p class="styleScript italic">Discover Your Passion, Blaze Your Trail, and Build Something Extraordinary!</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide flex flex-col gap-3 justify-center items-center text-[#a0d4ff]'>
                            <div className="slide2Header">
                                <h1 className="text-6xl font-bold">Development Areas</h1>
                            </div>
                            <div className="slide2details text-xl text-white">
                                <p class="styleScript italic">
                                    We cover Web, Mobile, Game Development, AI, Data Science, Blockchain, IoT, DevOps, and more.
                                </p>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide flex flex-col gap-3 justify-center items-center text-[#a0d4ff]'>
                            <div className="slide2Header">
                                <h1 className="text-6xl font-bold">Programming Languages</h1>
                            </div>
                            <div className="slide2details text-xl text-white">
                                <p class="styleScript italic">Learn Python, JavaScript, C++, Swift, Kotlin, and other top languages with ease. </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide flex flex-col gap-3 justify-center items-center text-[#a0d4ff]'>
                            <div className="slide2Header">
                                <h1 className="text-6xl font-bold">Personalized Roadmaps</h1>
                            </div>
                            <div className="slide2details text-xl text-white">
                                <p class="styleScript italic">Your personalized learning journey tailored to your goals and interests.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="developmentsection flex flex-col w-[100%]">
                    <div className="development flex flex-col">
                        <div className="border-b-2 border-gray-500">
                            <h2 className=' text-2xl font-bold text-[#FFFF]'>Development</h2>
                        </div>
                        <div className='development-container flex flex-wrap gap-5 py-4 items-center justify-center'>
                            <div className=" flex flex-col gap-2 w-[98%] md:w-[31%]  min-h-48 bg-[#acc2ef] items-center justify-between py-2 border-0 rounded-lg">
                                <img className='w-[96%] h-36 border-0 rounded-lg' src={webdevelopment} ></img>

                                <div className='flex flex-col gap-2 items-center justify-between px-2'>
                                    <h3 className='font-bold'>Full Stack Web Development</h3>
                                    <p className='text-sm italic'>Web Development includes front-end (client-side) and back-end (server-side) work, creating functional websites. The future is bright with AI advancements and high demand for responsive, user-friendly designs.</p>
                                    <button
                                        onClick={() => routehander("webdev")}
                                        className=' border-transparent bg-[#3D5A80] text-[#e0e0e0] flex  rounded-full py-1 px-3 items-center hover:font-bold hover:bg-[#84aee6] hover:text-black '> Show Track</button>
                                </div>
                            </div>
                            <div className=" flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
                                <img className='w-[96%] h-36 border-0 rounded-lg' src={appdevelopment} ></img>

                                <div className='flex flex-col gap-2 items-center justify-center px-2'>
                                    <h3 className='font-bold'> App Development</h3>
                                    <p className='text-sm italic mb-4  '>App Development involves creating applications for mobile and desktop platforms. It covers both front-end (user interface) and back-end (server-side) development.</p>
                                    <button className=' border-transparent bg-[#3D5A80] text-[#e0e0e0] flex  rounded-full py-1 px-3 items-center hover:font-bold mt-4  hover:bg-[#84aee6] hover:text-black'> Show Track</button>
                                </div>
                            </div>
                            <div className=" flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
                                <img className='w-[96%] h-36 border-0 rounded-lg' src={gamedevelopment} ></img>

                                <div className='flex flex-col gap-2 items-center justify-between px-2'>
                                    <h3 className='font-bold'> Game Development</h3>
                                    <p className='text-sm italic mb-4  '>Game Development involves creating interactive games, blending art, storytelling, and coding. It's a dynamic field with growing opportunities thanks to advances in VR and AR technologies.</p>
                                    <button className=' border-transparent bg-[#3D5A80] text-[#e0e0e0] flex  rounded-full py-1 px-3 items-center hover:font-bold mt-4  hover:bg-[#84aee6] hover:text-black'> Show Track</button>
                                </div>
                            </div>
                            <div>
                                <Link to='/development'>
                                    <button className="border-transparent bg-[#3D5A80] rounded-full py-2 px-8  hover:border-transparent hover:bg-[#84aee6] w-[100%]">
                                        Explore more destiny.......
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='programminglanguagesection flex flex-col w-[100%]'>
                    <div className="development flex flex-col">
                        <div className="border-b-2 border-gray-500">
                            <h2 className=' text-2xl font-bold text-[#FFFF]'>Programming-Language</h2>
                        </div>
                    </div>
                    <div className='language-container flex flex-wrap gap-5 py-4  '>
                        <div className=" flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef]
                        items-center py-2 border-0 rounded-lg">
                            <img className='w-[96%] border-0 rounded-lg' src={c_language} ></img>

                            <div className='flex flex-col gap-2 items-center justify-between px-2'>
                                <h3 className='font-bold'>C-Language</h3>
                                <p className='text-sm italic mb-4  '>C is a powerful and efficient programming language, widely used for system programming, developing operating systems, and embedded systems.</p>
                                <button className=' border-transparent bg-[#3D5A80] text-[#e0e0e0] flex  rounded-full py-1 px-3 items-center hover:font-bold mt-2 hover:text-black hover:bg-[#84aee6]'> Show Track</button>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48  bg-[#acc2ef]
                        items-center py-2 border-0 rounded-lg">
                            <img className='w-[96%] border-0 rounded-lg h-36' src={cplusplus} ></img>

                            <div className='flex flex-col gap-2 items-center justify-between px-2'>
                                <h3 className='font-bold'>C++</h3>
                                <p className='text-sm italic'>C++ is a versatile, high-performance programming language that builds on C, enabling object-oriented programming and efficient system and application development.</p>
                                <button className=' border-transparent bg-[#3D5A80] text-[#e0e0e0] flex  rounded-full py-1 px-3 items-center hover:font-bold hover:bg-[#84aee6] hover:text-black'> Show Track</button>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-2 w-[98%] md:w-[31%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
                            <img className='w-[96%] border-0 rounded-lg h-36' src={python} ></img>

                            <div className='flex flex-col gap-2 items-center justify-between px-2'>
                                <h3 className='font-bold'>Python</h3>
                                <p className='text-sm italic'>Python is a versatile and beginner-friendly programming language, known for its readability and wide range of applications, from web development to data science and machine learning</p>
                                <button className=' border-transparent bg-[#3D5A80] text-[#e0e0e0] flex  rounded-full py-1 px-3 items-center hover:font-bold hover:bg-[#84aee6] hover:text-black'> Show Track</button>
                            </div>
                        </div>
                        <div>
                            <Link to='/language'>
                                <button className="border-transparent bg-[#3D5A80] rounded-full py-2 px-8  hover:border-transparent hover:bg-[#84aee6] w-[100%]">
                                    Explore more destiny.......
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
                <Reviews/>
            </main>
            <Footer />
            <MobileNav />
        </section >
    )
}
