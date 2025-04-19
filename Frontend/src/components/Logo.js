import appLogo from '../images/appLogo.png';

export default function Logo() {
    return (
        <div  className="border-0 bg-transparent rounded-full h-11 w-auto md:bg-[#cee8ff]  px-4 m-0 flex justify-center items-center py-2 gap-1 text-gray-950">
            <img
                className='w-8 h-8 hidden md:block'
                src={appLogo}
            >
            </img>
            <h2 className="block w-auto text-white text-xs md:text-black lg:block lg:text-sm font-bold">DevEra</h2>
           
        </div>
    )
}
