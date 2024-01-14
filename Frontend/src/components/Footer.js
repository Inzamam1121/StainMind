import { Link } from 'react-router-dom';
import '../assets/Style/custom.css';

const Footer = () => {
    return (
        <footer className='bg-gray-700 bgfooter'>
            <div className="flex flex-col px-24 py-12 flex-nowrap">
                <div className="flex flex-row flex-wrap w-full content-start items-start justify-evenly gap-10 lg:gap-20">
                    <div className="flex flex-col">
                        <h4 className='text-black text-4xl font-extrabold mb-3'>Stain Mind</h4>
                    </div>
                    <div className="flex flex-col">
                        <h4 className='text-black text-4xl font-extrabold mb-3'>Pages</h4>
                        <ul className="flex flex-col text-gray-500 text-sm underline gap-2 text-left pl-6">
                            <li><Link to="/" className='no-underline text-gray-700 text-lg font-semibold'>Home</Link></li>
                            <li><Link to="/service" className='no-underline text-gray-700 text-lg font-semibold'>Services</Link></li>
                            <li><Link to="/partner" className='no-underline text-gray-700 text-lg font-semibold'>Partners</Link></li>
                            <li><Link to="/story" className='no-underline text-gray-700 text-lg font-semibold'>Our Story</Link></li>
                            <li><Link to="/contact-us" className='no-underline text-gray-700 text-lg font-semibold'>Contact us</Link></li>
                            <li><Link to="/about-us" className='no-underline text-gray-700 text-lg font-semibold'>About Us</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h4 className='text-black text-4xl font-extrabold mb-3'>Follow Us</h4>
                        <ul className="flex flex-row text-gray-500 text-sm underline gap-2">
                            <li>
                                <a href="https://www.linkedin.com/company/stainmind/?viewAsMember=true" target="_blank" rel="noreferrer">
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

export default Footer;
