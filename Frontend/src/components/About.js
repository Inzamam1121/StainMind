import React, { useState, useEffect, useContext } from 'react';
import AOS from 'aos';
import "../../node_modules/aos/dist/aos.css"


import Picture from "../images/CEO.png";
import About2 from "../images/About2.png";


import "../assets/Style/custom.css"
import { Link } from 'react-router-dom';
import AlertContext from '../Alert/AlertContext';



const About = (props) => {

    const AletContext = useContext(AlertContext);
    const {showAlert} = AletContext;

    props.navbarChange(3);
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

    const handleSubmit =async (e) => {
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
        if(data.success){
            setSubmit(false);
            showAlert('Form submitted with data', "success");
            // Clear the form fields
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        }else{
            showAlert('Error Occured', "danger");
            setSubmit(false);
        }
    };



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

    const Team = [
        {
            Title: "Founder & CEO",
            Name: "Pasha Kidman",
            text: "With a background in business strategy and a decade of experience in Digital Transformation, Pasha leads Stain Mind with a vision that intertwines technology and strategy. His expertise lies in translating complex AI concepts.",
            Image: Picture
        },
        {
            Title: "Chief Technology Officer",
            Name: "Maxim Kruglov",
            text: "Maxim spearheads our technological innovations, holding a Ph.D. in Artificial Intelligence. His role involves overseeing the development of advanced AI solutions and ensuring they align with clients' strategic goals.",
            Image: Picture
        },
        {
            Title: "Director of Operations",
            Name: "Jamil French",
            text: "With a strong background in business management and operational efficiency, Jamil ensures that Stain Mind's operations run smoothly. His focus is on optimizing internal processes and aligning them with our strategic objectives.",
            Image: Picture
        },
    ]

    const feature2 = (
        <div className='flex flex-row lg:h-[90vh] justify-around flex-wrap lg:flex-nowrap mb-36 rounded-md elevation py-10 lg:py-52'
            data-aos="fade-up"
            data-aos-duration='1000'
            data-aos-easing="ease-in-quad">
            <div className=" w-[100%] md:basis-[45%] md:w-auto text-black text-md flex flex-col justify-center max-w-3xl text-left px-5 mt-10">

                <img src={About2} alt="" srcset="" />

            </div>
            <div className=" flex flex-col justify-center max-w-3xl text-left px-5 md:basis-[55%]">
                <h2 className="text-2xl lg:text-5xl mb-10 font-bold text-gray-700"> About us </h2>
                <p className="text-lg lg:text-xl text-black mb-4 text-justify">
                    At Stain Mind, our journey began with a fundamental belief: in the chaos of AI innovation lies the seed of unparalleled strategic opportunity. Our inception was fueled by a vision to harness this tumultuous energy and channel it into transformative AI strategies for businesses.
                </p>
                <p className="text-lg lg:text-xl text-black mb-8 text-justify">
                    Founded by a group of AI enthusiasts and strategic thinkers, Stain Mind emerged from the desire to navigate the complexities of artificial intelligence and simplify them for practical business applications. We recognized early on that the rapid evolution of AI, while overwhelming for many, is ripe with potential to redefine industries, reinvent processes, and revolutionize customer experiences.
                </p>
                <button className="bg-gray-500 text-white text-xl font-bold px-4 py-3 rounded-md hover:bg-black w-[100%] self-center mt-5 hover:scale-100 hover:-translate-y-3 ease-out duration-200">
                    <Link to="/contact-us" className='text-white' style={{ textDecoration: "none" }}>Try Now</Link>
                </button>

            </div>
        </div>
    );

    return (
        <div className='md:mx-3 lg:mx-5'>
            <div className={`flex flex-row justify-around mt-12 h-[60vh] lg:h-[90vh] BackgroundAbout`}
                data-aos="fade-up"
                data-aos-duration='1000'
                data-aos-easing="ease-in-quad">
                <div className=" flex flex-col justify-center  text-center lg:text px-5 items-center lg:items">
                    <h2 className="text-xl lg:text-3xl text-center font-semibold text-white  inline-block bg-clip-text">Our Story</h2>
                    <h1 className="text-5xl lg:text-6xl text-center text-gray-900 font-black mb-3 inline-block  bg-clip-text shadowtext">Pioneering AI Strategies</h1>
                </div>
            </div>
            <div className="flex justify-center align-middle flex-col mb-16 space-y-4 lg:space-y-8">
                <h2 className="text-xl lg:text-5xl font-semibold text-center text-gray-700  inline-block bg-clip-text">Our Vision</h2>
                <p className="text-base lg:max-w-[50%] lg:text-xl text-center text-black  inline-block bg-clip-text m-auto">To be the guiding force for businesses in the tumultuous world of AI, providing clarity and strategic direction.</p>
            </div>

            {feature2}

            <div className="flex justify-center align-middle flex-col mb-16 space-y-8 w-[90%] md:w-[80%] m-auto py-28">
                <h2 className="text-xl lg:text-5xl font-semibold text-center text-gray-700  inline-block bg-clip-text mb-10">Leadership Team</h2>
                <div className="flex flex-col md:flex-row justify-between align-top gap-20">
                    {Team.map((item) => (
                        <div className="flex flex-col space-y-4 justify-center align-middle items-center">
                            <div className='w-[100%] h-[100%] rounded-xl border-solid border-2 border-gray-600 mb-4'>
                                <img src={item.Image} className='w-[100%] h-[100%] object-cover rounded-xl' alt="" />
                            </div>
                            <h3 className="text-md lg:text-2xl font-semibold text-center text-gray-700  inline-block bg-clip-text">{item.Title}</h3>
                            <h3 className="text-md lg:text-xl font-semibold text-center text-gray-700  inline-block bg-clip-text">{item.Name}</h3>
                            <p className="text-sm lg:text-base text-center text-black  inline-block bg-clip-text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* {comp1}
            {comp2} */}
            {comp3}
        </div>
    );
}

export default About;