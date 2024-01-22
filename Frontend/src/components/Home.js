import React, { useContext, useEffect, useState } from 'react';
import AOS from 'aos';
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
        <div className='flex flex-col lg:flex-row justify-around items-start flex-wrap lg:flex-nowrap pb-12 lg:pb-24 rounded-md elevation py-10 lg:py-20 gap-8 w-[95%] md:w-[90%] lg:w-[80%] m-auto'>
            <p className="text-justify text-lg mb-4">
                Welcome to Stain Mind – the nexus where chaos and strategy converge in the realm of AI consulting. At Stain Mind, we embrace the intricate dance of disorder and order, transforming the tumultuous landscape of AI innovation into streamlined, strategic solutions. Our mission is to guide visionary leaders through the labyrinth of AI's complexities, shedding light on paths less traveled and revealing opportunities hidden within the chaos.
            </p>
            <p className="text-justify text-lg mb-4">
                In a world where AI constantly redefines the boundaries of possibility, Stain Mind stands as a beacon of clarity and direction. We specialize in harnessing the untamed potential of AI, molding it into powerful tools and strategies that propel businesses forward. Whether navigating the unpredictable currents of data, carving out bespoke AI solutions, or demystifying the intricacies of machine learning, our approach is rooted in a deep understanding of both the art and science of AI.
            </p>
            <p className="text-justify text-lg">
                Join us at Stain Mind, where chaos is not a hurdle but a stepping stone to innovation, and where every challenge is an opportunity to redefine the future.
            </p>
        </div>
    );





    return (
        <div className="bg-transparent">
            <div className={`flex flex-row justify-around mt-12 h-[60vh] md:h-[70vh] lg:h-[100vh]`}>
                <div className=" flex flex-col justify-center text-center lg:text px-5 items-center lg:items">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold  inline-block bg-clip-text"> Welcome to  </h2>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl text-center text-gray-700 font-black mb-3 inline-block  bg-clip-text">STAIN MIND</h1>
                </div>
            </div>
            <div className="flex justify-center align-middle flex-col mb-16 space-y-4 lg:space-y-8">
                <h2 className="text-xl lg:text-5xl font-semibold text-center text-gray-700  inline-block bg-clip-text">Where Chaos Meets Clarity</h2>
                <p className="text-base lg:text-xl text-center text-black  inline-block bg-clip-text"> Navigating the Chaos of Innovation – Crafting AI Strategies for Visionary Leaders.</p>
            </div>
            {feature1}

        </div>
    );
}

export default Home;
