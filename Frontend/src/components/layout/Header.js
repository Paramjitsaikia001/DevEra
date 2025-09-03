import { useState } from 'react'
import Logo from '../ui/Logo';
import { useNavigate } from 'react-router-dom';
import { buttonStyles, inputStyles, layoutStyles, iconStyles } from '../../utils/styles';

export default function Header({ toggleHideLeft, Hide_Left }) {
    const navigate = useNavigate();
    const loginhandler = () => {
        navigate('/traintoexcellency/Frontend-build/Register')
    }
    const [showInput, setShowInput] = useState(false);
    const handleSearchClick = () => {
        setShowInput(!showInput);
    };


    return (
        <section className={layoutStyles.header}>
            <div className='md:hidden block'>
                <Logo />
            </div>
            <div
                onClick={toggleHideLeft}
                className={buttonStyles.icon}>
                <span className={iconStyles.material}>
                    dock_to_right
                </span>
            </div>
            <nav className={layoutStyles.nav}>
                <button className={buttonStyles.primary}>
                    <h2
                        onClick={loginhandler}
                        className='text-sm font-semibold text-[#ffff]'>WHO ARE YOU?</h2>
                </button>
            </nav>
        </section>
    )
}