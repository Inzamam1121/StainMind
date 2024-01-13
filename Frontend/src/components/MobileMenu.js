import { Link } from 'react-router-dom';
import { ReactSession } from "react-client-session";


const MobileMenu = (props) => {

    return (
        <div className="lg:hidden h-[90vh] backdrop-blur-md border-gray-900 rounded-xl fixed top-24 right-0 left-0 bottom-24 p-2 transition-opacity duration-300 ease-out z-10 flex flex-col justify-center space-y-40 z-9">
                    <center className="text-center items-center">
                        <ul className="flex flex-col pr-5 pl-5 space-y-5">
                            {props.menuOptions.map((option, index) => (
                                <li key={index} onClick={() => {props.toggleMenu();}}>
                                    <Link to={option.url} className={`text-2xl ${index === props.activeIndex ? 'text-gray-600-500' : 'text-black'}`}
                                    style={{textDecoration:"none"}}>
                                        {option.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </center>
                </div>
    )
}

export default MobileMenu;
