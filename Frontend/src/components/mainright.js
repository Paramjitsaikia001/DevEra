import { Swiper, SwiperSlide } from 'swiper/react';
import '../index.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


import Footer from './Footer'
import webdevelopment from '../images/DevelopmentImage/fullstackwebdev.jpg'
import appdevelopment from '../images/DevelopmentImage/appdevelopment.jpg'
import gamedevelopment from '../images/DevelopmentImage/gamedevelopment.jpg'
import c_language from '../images/LanguageImage/c-programming-1.png'
import cplusplus from '../images/LanguageImage/c-plus-plus-programming-language.jpg'
import python from '../images/LanguageImage/python-language.jpg'
import { useNavigate } from 'react-router-dom'
import TypingEffect from 'react-typing-effect';
import Header from './Header'
import MobileNav from './mobilenav'
import Reviews from './Review';

const cards = [
    {
        title: "Full Stack Web Development",
        description: "Web Development includes front-end (client-side) and back-end (server-side) work, creating functional websites. The future is bright with AI advancements and high demand for responsive, user-friendly designs.",
        image: webdevelopment,
        route: "webdev"
    },
    {
        title: "App Development",
        description: "App Development involves creating applications for mobile and desktop platforms. It covers both front-end (user interface) and back-end (server-side) development.",
        image: appdevelopment,
        route: "appdev"
    },
    {
        title: "Game Development",
        description: "Game Development involves creating interactive games, blending art, storytelling, and coding. It's a dynamic field with growing opportunities thanks to advances in VR and AR technologies.",
        image: gamedevelopment,
        route: "gamedev"
    }
];

// Add this CSS to your index.css or a relevant CSS file:
/*
.remove-bg {
    mix-blend-mode: multiply;
    background: transparent;
}
*/

// Then, in your image tag for the cards, add the className "remove-bg":
// Example (inside your .map for cards):
// <img
//     src={track.image}
//     alt={track.title}
//     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 remove-bg"
// />
// To visually remove the background of an image using CSS, you can use the `mix-blend-mode` property or apply a filter.
// Example: Add a class to your <img> and use CSS like:
// .remove-bg { mix-blend-mode: multiply; background: transparent; }
// Or use filter: .remove-bg { filter: brightness(1.2) contrast(1.2); background: transparent; }
// Note: This only works well if the background is a solid color and may not fully remove complex backgrounds.

const languageCards = [
    {
        title: "C-Language",
        description: "C is a powerful and efficient programming language, widely used for system programming, developing operating systems, and embedded systems.",
        image: c_language
    },
    {
        title: "C++",
        description: "C++ is a versatile, high-performance programming language that builds on C, enabling object-oriented programming and efficient system and application development.",
        image: cplusplus
    },
    {
        title: "Python",
        description: "Python is a versatile and beginner-friendly programming language, known for its readability and wide range of applications, from web development to data science and machine learning.",
        image: python
    }
];

export default function Mainright({ toggleHideLeft, Hide_Left }) {
    const navigate = useNavigate(); // Fixed typo: Changed 'nagivate' to 'navigate'

    const routehander = (name) => {
        navigate(`/traintoexcellency/Frontend-build/development/${name}`); // Use the corrected 'navigate'
    };

    // Assign routeHandler to each card
    cards.forEach(card => {
        card.routeHandler = () => routehander(card.route);
    });

    return (
        <section className={`
            flex flex-grow flex-col h-full gap-4 global-scroll-bar
            ${Hide_Left ? 'w-[100%]' : 'lg:w-[80%] w-[100%]'}
            transition-all duration-500 ease-in-out overflow-hidden
         `}>
            <div className='flex justify-between py-4 px-4'>
                <Header toggleHideLeft={toggleHideLeft} Hide_Left={Hide_Left} />
            </div>
            <main className="flex flex-col gap-12 p-4 w-[100%]">

                {/* main line  */}
                <div className="mainline w-[60%]">
                    <p className="flex flex-col gap-4">
                        <span className="text-white font-bold text-6xl flex flex-col">
                            <span className='text-white'>Hello</span>
                            <TypingEffect text={['Learners', 'Developers']} speed={100} eraseSpeed={50} eraseDelay={2000} typingDelay={1000} />
                        </span>
                        <p className="text-purple-400 text-xl flex flex-col gap-1">
                            <span className='text-3xl text-[#d9bcf4] font-bold'>Ready to Elevate Your Coding Journey? </span>
                            The Power to Learn. The Tools to Build. The Potential for Impact.</p>

                    </p>

                </div>
                <div className="whatisfor z-1 w-[100%] items-center flex flex-col gap-4 justify-center  relative md:h-[60vh] ">
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

                {/* developments  */}
                <div className="developmentsection flex flex-col w-[100%]">
                    <div className="development flex flex-col gap-8">
                        <div className="border-b-2 border-gray-500">
                            <h2 className=' text-5xl font-bold text-[#FFFF]'>Development</h2>
                        </div>


                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
                            {cards.map((track, index) => (
                                <div
                                    key={index}
                                    className="relative group bg-white rounded-xl flex flex-col justify-between shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                >

                                    {/* heading  */}
                                    <div className='p-6'>

                                        <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
                                            {track.title}
                                        </h2>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                            {track.description}
                                        </p>
                                    </div>
                                    {/* Image Section */}
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={track.image}
                                            alt={track.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 remove-bg "
                                        />
                                    </div>
                                    <div className="p-6 flex items-center gap-5 jus
                                    tify-between">
                                        {/* Icon */}
                                        <span className="material-symbols-outlined text-[2.5rem] font-light cursor-pointer text-indigo-600">
                                            bookmark
                                        </span>
                                        {/* Button */}
                                        <button
                                            onClick={track.routeHandler} // Correctly assigned routeHandler
                                            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md  transition-colors duration-300 cursor-pointer"
                                        >
                                            Show Track
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Explore More Button */}
                        <div className="text-center mt-12">
                            <button className="text-indigo-400 font-semibold text-lg hover:text-indigo-300 transition-colors duration-300">
                                Explore more destiny...
                            </button>
                        </div>
                    </div>
                </div>
                <div className='programminglanguagesection flex flex-col w-[100%]'>
                    <div className="development flex flex-col gap-8">
                        <div className="border-b-2 border-gray-500">
                            <h2 className=' text-2xl font-bold text-[#FFFF]'>Programming-Language</h2>
                        </div>

                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
                            {languageCards.map((track, index) => (
                                <div
                                    key={index}
                                    className="relative group bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                >
                                    {/* Image Section */}
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={track.image}
                                            alt={track.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
                                            {track.title}
                                        </h2>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                            {track.description}
                                        </p>
                                        {/* Button */}
                                        <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300">
                                            Show Track
                                        </button>
                                    </div>
                                    {/* Gradient Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            ))}
                        </div>
                        {/* Explore More Button */}
                        <div className="text-center mt-12">
                            <button className="text-indigo-400 font-semibold text-lg hover:text-indigo-300 transition-colors duration-300">
                                Explore more destiny...
                            </button>
                        </div>
                    </div>
                </div>
                <Reviews />
            </main >
            <Footer />
            <MobileNav />
        </section >
    );
}
