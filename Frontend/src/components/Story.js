import React from 'react'
import "../assets/Style/custom.css"
import Finance from "../images/Finance.png";
import Retail from "../images/Retail.png";
import ECommerce from "../images/ECommerce.png";
import Manfacture from "../images/Manufacturing.png";
import Medical from "../images/Medical.png";

const Story = () => {
    const Project = [
        {
            "industry": "Financial Sector",
            "revolutionizing": "Revolutionizing Risk Management",
            "clientChallenge": "A mid-sized bank struggling with outdated risk assessment methods leading to inefficiencies and increased vulnerabilities.",
            "solution": "Developed an advanced AI-driven risk management system that leveraged predictive analytics and real-time data processing.",
            "outcome": "Enhanced accuracy in risk assessment by 40%, reduced fraudulent activities by 25%, and significantly improved operational efficiency.",
            "Image": Finance
        },
        {
            "industry": "Healthcare Industry",
            "revolutionizing": "Personalizing Patient Care",
            "clientChallenge": "A healthcare provider needed to improve patient care personalization and operational efficiency in handling patient data.",
            "solution": "Implemented an AI-powered system that analyzed patient data to provide personalized care plans and predictive health insights.",
            "outcome": "Improved patient satisfaction scores by 30%, reduced readmission rates, and streamlined data management processes.",
            "Image": Medical
        },
        {
            "industry": "Retail",
            "revolutionizing": "Optimizing Supply Chain with AI",
            "clientChallenge": "A retail chain faced challenges in inventory management and demand forecasting, leading to stockouts and overstock situations.",
            "solution": "Created a custom AI solution for predictive inventory management and demand forecasting.",
            "outcome": "Achieved a 20% reduction in inventory costs, minimized stockouts, and significantly enhanced supply chain efficiency.",
            "Image": Retail
        },
        {
            "industry": "Manufacturing",
            "revolutionizing": "Enhancing Quality Control",
            "clientChallenge": "A manufacturing company needed to improve its quality control processes, which were labor-intensive and error-prone.",
            "solution": "Developed an AI-based quality control system using image recognition and machine learning algorithms.",
            "outcome": "Increased detection of defects by 35%, reduced manual inspection time, and enhanced overall product quality.",
            "Image": Manfacture
        },
        {
            "industry": "E-Commerce",
            "revolutionizing": "AI for Customer Experience",
            "clientChallenge": "An e-commerce platform sought to enhance its customer experience and personalization.",
            "solution": "Implemented an AI-driven recommendation engine and chatbots for customer support.",
            "outcome": "Boosted customer engagement by 25%, increased sales conversions, and improved customer service efficiency.",
            "Image": ECommerce
        }
    ]
    return (
        <div className='md:mx-3 lg:mx-5'>
            <div className={`flex flex-row justify-around mt-12 h-[60vh] lg:h-[90vh]`}>
                <div className=" flex flex-col justify-center  text-center lg:text px-5 items-center lg:items">
                    <h2 className="text-xl lg:text-3xl text-center font-semibold  inline-block bg-clip-text">Our Success Stories</h2>
                    <h1 className="text-3xl lg:text-6xl text-center text-gray-700 font-black mb-3 inline-block  bg-clip-text">Transforming Chaos into Strategy</h1>
                </div>
            </div>
            <div className="flex justify-center align-middle flex-col mb-16 space-y-4 lg:space-y-8">
                <h2 className="text-xl lg:text-5xl font-semibold text-center text-gray-700  inline-block bg-clip-text">Our Success</h2>
                <p className="text-base max-w-[95%] lg:max-w-[50%] lg:text-xl text-center text-black  inline-block bg-clip-text m-auto">At Stain Mind, our journey with each client is a story of transformation – from navigating the chaotic currents of AI innovation to achieving strategic triumphs. Here are some narratives that showcase our ability to turn challenges into successes through bespoke AI solutions</p>

                <div className="flex flex-col justify-center items-center flex-wrap gap-20 w-[95%] lg:w-[80%] m-auto pt-20 pb-10">
                    {Project.map((item, index) => {
                        return (
                            <div className='flex flex-col md:flex-row justify-between items-start w-[100%] h-[100%] gap-10'>
                                <div className='w-[100%] text-left flex flex-col gap-2'>
                                    <h2 className='text-2xl lg:text-5xl font-semibold text-center mb-10 text-gray-700  inline-block bg-clip-text'>{item.industry}</h2>
                                    <ul className='flex flex-col md:flex-row justify-between gap-10 md:gap-10 lg:gap-20 pl-0'>
                                        <li key={index} className='md:basis-[33.33%] bg-[#fff] rounded-2xl  text-gray-700 shadow-gray-700 shadow-xl px-4 py-4 md:px-8 md:py-8 W-[100%] text-left h-[auto] flex  flex-col justify-start gap-2'>
                                            Client Challenge
                                            <p className='pl-4'>{item.clientChallenge}</p>
                                        </li>
                                        <li key={index} className='md:basis-[33.33%] bg-[#fff] rounded-2xl  text-gray-700 shadow-gray-700 shadow-xl px-4 py-4 md:px-8 md:py-8 W-[100%] text-left h-[auto] flex  flex-col justify-start gap-2'>
                                            Stain Mind's Solution
                                            <p className='pl-4'>{item.solution}</p>
                                        </li>
                                        <li key={index} className= 'md:basis-[33.33%] bg-[#fff] rounded-2xl  text-gray-700 shadow-gray-700 shadow-xl px-4 py-4 md:px-8 md:py-8 W-[100%] text-left h-[auto] flex  flex-col justify-start gap-2'>
                                            Outcome
                                            <p className='pl-4'>{item.outcome}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <p className="text-base lg:max-w-[50%] lg:text-xl text-center text-black  inline-block bg-clip-text m-auto">These success stories from Stain Mind highlight our versatility and expertise in applying AI solutions across various industries. Each case study reflects our commitment to transforming the complexities of AI into strategic advantages for our clients.</p>

            </div>


        </div>
    )
}

export default Story