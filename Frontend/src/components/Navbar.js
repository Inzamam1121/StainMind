import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import {Link} from "react-router-dom"
import Logo from "../images/logo/Logo.png";
// import AccountImage from "../images/profile_white.png";
import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ReactSession } from "react-client-session";


const Navbar = (props) => {
    const menuOptions = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/service" },
        { name: "Partners", url: "/partner" },
        { name: "About Us", url: "/about-us" },
        { name: "Our story", url: "/story" },
        { name: "Contact Us", url: "/contact-us" },
    ];

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    let navigate = useNavigate();

    const toggleLogin = () => {
        navigate("/login");
    }

    const toggleSignUp = () => {
        navigate("/signup");
    }


    return (
        <div>
            <nav className="bg-white py-2 px-6 md:px-20 z-10 fixed w-[100%] top-0">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src={Logo} className="w-20 h-20" alt="Logo_white" />
                        <span className="text-black text-xl font-semibold">Stain Mind</span>
                    </div>

                    {/* Navigation Menu */}
                    <div className="hidden md:hidden lg:flex space-x-4">
                        <ul className="flex space-x-8">
                            {menuOptions.map((option, index) => (
                                <li
                                    key={index}
                                    className={`relative transition ease-in-out delay-50 duration-50 hover:-translate-y-1/3 hover:scale-125 ${index === props.activeIndex ? 'border-b-2 border-gray-500' : ''
                                        }`}
                                    onClick={() => props.onActiveIndexChange(index)} // Add onClick handler
                                >
                                    <Link
                                        to={option.url}
                                        className={`${index === props.activeIndex ? 'text-black' : 'text-black hover:text-gray-500 transition-colors duration-50'}`}
                                        style={{textDecoration:"none"}}
                                    >
                                        {option.name}
                                        <div className="absolute w-0 bg-gray-700 h-1 left-0 bottom-0 transition-all origin-left"></div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="lg:hidden">
                        <button className="text-black" onClick={toggleMenu}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            {/* Mobile Menu */}
            <CSSTransition
                in={showMenu}
                timeout={300}
                classNames="menu"
                unmountOnExit>
                <MobileMenu
                    toggleMenu={toggleMenu}
                    toggleLogin={toggleLogin}
                    toggleSignUp={toggleSignUp}
                    activeIndex={props.activeIndex}
                    menuOptions={menuOptions}
                />

            </CSSTransition>
        </div>
    );
};

export default Navbar;
