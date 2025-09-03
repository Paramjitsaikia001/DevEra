import { Link, useLocation } from "react-router-dom"
import { layoutStyles, mobileNavItemStyles, iconStyles } from '../../utils/styles';
import { NAV_ITEMS } from '../../constants/routes';

export default function MobileNav() {
    const location = useLocation();
    return (
        <section className={layoutStyles.mobileNav}>
            <ul className="grid grid-cols-5  gap-2 justify-evenly items-center">
                {NAV_ITEMS.map((item) => (
                    <Link key={item.path} to={item.path}>
                        <li className={mobileNavItemStyles(location.pathname === item.path)}>
                            <span className={iconStyles.material}>{item.icon}</span>
                            <div>{item.label}</div>
                        </li>
                    </Link>
                ))}
                <button className=" flex flex-col m-1 py-1 px-3 border-transparent  rounded-full items-center align-center hover:font-extrabold min-w-[18%] md:w-auto">
                    <span className={iconStyles.material}>
                        settings_voice
                    </span>
                    <span className="text-xs flex flex-col">
                        <span>Ask Me</span>
                    </span>
                </button>
            </ul>
        </section>
    )
}