import React, { useContext, useEffect, useState } from 'react';
import Typist from 'react-typist-component';
import AOS from 'aos';
import { Link } from "react-router-dom"
import Service1 from "../images/Service1.png";
import Service2 from "../images/Service2.png";
import "../../node_modules/aos/dist/aos.css"
import "../assets/Style/custom.css"
import AlertContext from '../Alert/AlertContext';

function Home(props) {

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    props.navbarChange(0);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [Submit, setSubmit] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        setSubmit(true);
        e.preventDefault();
        const response = await fetch('https://www.stainmind.com/sendMail', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        if (data.success) {
            setSubmit(false);
            showAlert('Form submitted with data', "success");
            // Clear the form fields
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } else {
            showAlert('Error Occured', "danger");
            setSubmit(false);
        }
    };



    const feature1 = (
        <div className='flex flex-col lg:flex-row justify-around items-start flex-wrap lg:flex-nowrap mb-20 lg:mb-36 rounded-md elevation py-10 lg:py-20 gap-6'
            data-aos="fade-up"
            data-aos-duration='1000'
            data-aos-easing="ease-in-quad">
            <div className="flex flex-col justify-center text-left px-3 lg:px-5 md:basis-[50%]">
                <h2 className="text-xl lg:text-3xl mb-10 font-bold text-black">Welcome to Stain Mind  </h2>
                <p className="text-lg lg:text-xl text-black text-justify">
                    The nexus where chaos and strategy converge in the realm of AI consulting. At Stain Mind, we embrace the intricate dance of disorder and order, transforming the tumultuous landscape of AI innovation into streamlined, strategic solutions. Our mission is to guide visionary leaders through the labyrinth of AI's complexities, shedding light on paths less traveled and revealing opportunities hidden within the chaos.
                </p>
            </div>

            <div className="w-[100%] text-gray-700 text-md flex flex-col justify-start md:basis-[45%] text-left px-3 lg:px-5 text-lg">
                <Typist typingDelay={40} loop={true} cursor={' | '}>
                    In a world where AI constantly redefines the boundaries of possibility, Stain Mind stands as a beacon of clarity and direction. We specialize in harnessing the untamed potential of AI, molding it into powerful tools and strategies that propel businesses forward. Whether navigating the unpredictable currents of data, carving out bespoke AI solutions, or demystifying the intricacies of machine learning, our approach is rooted in a deep understanding of both the art and science of AI.
                    <Typist.Delay ms={2000} />
                    <Typist.Backspace count={75} typingDelay={25} />
                </Typist>

                <button className="bg-gray-500 text-white text-xl font-bold px-4 py-3 rounded-md hover:bg-black w-[100%] self-center mt-5 hover:scale-100 hover:-translate-y-3 ease-out duration-200">
                    <Link to="/contact-us" className='text-white' style={{ textDecoration: "none" }}>Try Now</Link>
                </button>
            </div>
        </div>
    );


    const comp3 = (
        <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-quad"
            className='w-[90%] lg:w-[70%] m-auto'
        >
            <div className="flex flex-col justify-between items-center flex-wrap py-10 md:py-20 mb-30 rounded-mdshadow-lg">
                <h1 className="text-3xl lg:text-7xl font-extrabold mb-3 bg-gradient-to-tr from-gray-300 via-gray-800 to-gray-950 inline-block text-transparent bg-clip-text">
                    Contact Us
                </h1>

                <form className="text-left justify-center flex-wrap lg:flex-nowrap w-[100%]" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg font-semibold text-black">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-800 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-semibold text-black">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-800 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-lg font-semibold text-black">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-800 rounded-lg p-2 h-32"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-gray-500 text-white px-4 py-3 rounded-md hover:bg-black w-fit self-center mt-5 hover:scale-125 hover:-translate-y-5 ease-out duration-300"
                            disabled={Submit ? true : false}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    const Services = [
        {
            Title: "Our AI Consulting Services",
            text: "At Stain Mind, we offer a comprehensive suite of AI consulting services tailored to meet the unique needs of each client. Our services are designed to turn the chaos of AI into strategic advantages, ensuring seamless integration and maximum impact.",
            Image: Service1
        },
        {
            Title: "Our AI Consulting Methodologies",
            text: "At Stain Mind, we employ a set of robust methodologies designed to manage and leverage the chaotic nature of AI innovation effectively. Our approach is systematic yet flexible, allowing us to adapt to the unique challenges and dynamics of each project.",
            Image: Service2
        },
    ]

    return (
        <div className="bg-transparent">
            <div className={`flex flex-row justify-around mt-12 h-[60vh] md:h-[70vh] lg:h-[100vh] BackgroundBanner`}
                data-aos="fade-up"
                data-aos-duration='1000'
                data-aos-easing="ease-in-quad">
                <div className=" flex flex-col justify-center text-center lg:text px-5 items-center lg:items">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold text-gray-900  inline-block bg-clip-text"> Welcome to  </h2>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl text-center text-gray-700 font-black mb-3 inline-block  bg-clip-text shadowtext">STAIN MIND</h1>
                </div>
            </div>
            <div className="flex justify-center align-middle flex-col mb-16 space-y-4 lg:space-y-8">
                <h2 className="text-xl lg:text-5xl font-semibold text-center text-gray-700  inline-block bg-clip-text">Where Choas Meets Clarity</h2>
                <p className="text-base lg:text-xl text-center text-black  inline-block bg-clip-text"> Navigating the Chaos of Innovation – Crafting AI Strategies for Visionary Leaders.</p>
            </div>


            {feature1}

            <div className="flex justify-center align-middle flex-col mb-16 space-y-8 w-[95%] md:w-[80%] m-auto pb-32">
                <h2 className="text-xl lg:text-5xl font-semibold text-center text-gray-700  inline-block bg-clip-text mb-10">Our Services - Tailored AI Solutions</h2>
                <div className="flex flex-col md:flex-row justify-between align-top">
                    {Services.map((item) => (
                        <div className="flex flex-col space-y-6 justify-center align-middle items-center basis-[40%]">
                            <div className='w-20 h-20 p-2 border-solid rounded-[50%] border-4 border-gray-600'>
                                <img src={item.Image} className='w-[100%] h-[100%] object-cover ' alt="" />
                            </div>
                            <h3 className="text-md lg:text-2xl font-semibold text-center text-gray-700  inline-block bg-clip-text">{item.Title}</h3>
                            <p className="text-sm lg:text-base text-center text-black  inline-block bg-clip-text">{item.text}</p>


                        </div>
                    ))}
                </div>
            </div>

            {comp3}

        </div>
    );
}

export default Home;