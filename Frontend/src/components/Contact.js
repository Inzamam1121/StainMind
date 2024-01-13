import React, { useContext, useState } from 'react'
import "../assets/Style/custom.css"
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import AlertContext from '../Alert/AlertContext';



const Contact = () => {
    const AletContext = useContext(AlertContext);
    const {showAlert} = AletContext;

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

    const Phone = [
        {
            Content: "0311-2223333",
            Type: "Contact Us",
            Icon: IoCall
        },
        {
            Content: "123@example.com",
            Type: "Email Us",
            Icon: MdEmail
        },
        {
            Content: "New-York, Landon ,US",
            Type: "Our Location",
            Icon: FaLocationArrow
        },
    ]

    return (
        <div className='md:mx-3 lg:mx-5'>
            <div className={`flex flex-row justify-around mt-12 h-[60vh] lg:h-[90vh] BackgroundContact bg-[#f2f2f2]`}
                data-aos="fade-up"
                data-aos-duration='1000'
                data-aos-easing="ease-in-quad">
                <div className=" flex flex-col justify-center text-center lg:text px-5 items-center lg:items">
                    <h1 className="text-3xl lg:text-6xl text-center text-gray-400 font-black mb-3 inline-block  bg-clip-text shadowtext">Get in Touch with Stain Mind</h1>
                </div>
            </div>
            {comp3}

            <div className="flex flex-col relative my-20">
                <div className="flex flex-col md:flex-row justify-between items-start gap-24 w-[90%] lg:w-[80%] m-auto">
                    {Phone.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-gray-700 shadow-xl pt-6 pb-6 py-10 text-center w-[100%] h-[200px] relative flex flex-col gap-1 justify-center items-center">
                            <div className='w-[50px] h-[50px] md:w-[50px] md:h-[50px] bg-gray-700 p-2 md:p-3 m-auto left-0 right-0 rounded-2xl text-[#fff] cursor-pointer hover:bg-white hover:text-gray-700 hover:shadow-gray-700 hover:shadow-xl ease-in-out duration-1000 hover:ease-in-out hover:duration-1000'>
                                {<item.Icon className='w-[100%] h-[100%] object-cover ' />}
                            </div>
                            <h3 className="text-xl lg:text-xl font-extrabold text-center text-gray-700  inline-block bg-clip-text w-[90%]">{item.Content}</h3>
                            <h5 className="text-base lg:text-lg font-medium text-center text-gray-500  inline-block bg-clip-text">{item.Type}</h5>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Contact