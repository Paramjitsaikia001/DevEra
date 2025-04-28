import { useState } from 'react'
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
export default function Header({toggleHideLeft,Hide_Left}) {
    const navigate=useNavigate();
    const loginhandler=()=>{
        navigate('/traintoexcellency/Frontend-build/Register')
    }
    const [showInput, setShowInput] = useState(false);
    const handleSearchClick = () => {
        setShowInput(!showInput);
    };

    
    return (
        <section className='flex md:justify-between items-center  w-[100%] pt-3'>
            <div className='md:hidden block'>
                <Logo />
            </div>
            <div 
            onClick={toggleHideLeft}
            className="full-screen cursor-pointer py-[0.05rem] px-1 rounded-md hover:bg-[#0A1123] items-center">
            <span class="material-symbols-outlined text-white text-3xl text-center">
dock_to_right
</span>
            </div>
            <nav className=" flex h-10 gap-3  items-center askme w-[100%]  text-white justify-end">
                <div className='flex gap-1 justify-center items-center'>
                    {showInput && (
                        <input
                            className='text-[#ffff] w-[25vw] border-none py-1 px-3 bg-[#ffffff48] rounded-sm items-center '
                            type='search'
                            placeholder='search here....'
                        >
                        </input>)}
                    <div onClick={handleSearchClick} className='flex justify-center items-center cursor-pointer'>
                        <span

                            className="material-symbols-outlined search font-extralight text-4xl">search</span>
                    </div>
                </div>
                <button className='px-3 py-2 bg-[#2356fd] rounded-md'>
                    <h2
                    onClick={loginhandler}
                    className='text-sm font-semibold text-[#ffff]'>WHO ARE YOU?</h2>
                </button>
            </nav>
        </section>
    )
}