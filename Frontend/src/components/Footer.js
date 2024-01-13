// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import '../assets/Style/custom.css'
import Logo from "../images/logo/Logo.png"

const Footer = () => {

    return(
        <footer className=' bg-gray-700 bgfooter'>
            <div className="flex flex-col px-24 py-12 flex-nowrap">
                <div className="flex flex-row flex-wrap w-full content-start items-start justify-evenly gap-10 lg:gap-20">
                <div className="flex flex-col">
                        <h4 className='text-black text-4xl font-extrabold mb-3'>Stain Mind</h4>
                        <img src={Logo} className='w-28 h-28 m-auto' alt="" />
                    </div>
                    <div className="flex flex-col">
                        <h4 className='text-black text-4xl font-extrabold mb-3'>Pages</h4>
                        <ul className="flex flex-col text-gray-500 text-sm underline gap-2 text-left pl-6">
                            <li><Link to="/" className='no-underline  text-gray-700 text-lg font-semibold' style={{textDecoration:"none"}}>Home</Link></li>
                            <li><Link to="/service" className='no-underline text-gray-700 text-lg font-semibold' style={{textDecoration:"none"}}>Services</Link></li>
                            <li><Link to="/partner" className='no-underline text-gray-700 text-lg font-semibold' style={{textDecoration:"none"}}>Partners</Link></li>
                            <li><Link to="/story" className='no-underline text-gray-700 text-lg font-semibold' style={{textDecoration:"none"}}>Our Story</Link></li>
                            <li><Link to="/contact-us" className='no-underline text-gray-700 text-lg font-semibold' style={{textDecoration:"none"}}>Contact us</Link></li>
                            <li><Link to="/about-us" className='no-underline text-gray-700 text-lg font-semibold' style={{textDecoration:"none"}}>About Us</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h4 className='text-Black text-4xl font-extrabold mb-3'>Follow Us</h4>
                        <ul className="flex flex-row text-gray-500 text-sm underline gap-2">
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                    <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="linkedin" />
                                </a>
                            </li>                            
                        </ul>
                    </div>
                </div>

                
            </div>
            <span className="self-end text-black text-sm">Copyrights © 2024 StainMind.</span>
        </footer>
    );
}

export default Footer