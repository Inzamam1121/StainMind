import React from 'react'
import "../assets/Style/custom.css"
import Consulting from "../images/Consulting.png";
import Methadology from "../images/Methodologies.png";
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react';

const Service = () => {

    const serviceData = {
        "consultingServices": {
            "Image": Consulting,
            "Overview": "At Stain Mind, we offer a comprehensive suite of AI consulting services tailored to meet the unique needs of each client. Our services are designed to turn the chaos of AI into strategic advantages, ensuring seamless integration and maximum impact.",
            Servcie: [
                {
                    Name: "AI Strategy Development",
                    "serviceOverview": "We work with clients to develop a bespoke AI strategy that aligns with their business objectives and industry dynamics.",
                    "keyElements": [
                        {
                            Name: "AI Readiness Assessment",
                            Des: "Evaluating the current state of your technology, data infrastructure, and organizational readiness for AI adoption."
                        },
                        {
                            Name: "Strategic Roadmapping",
                            Des: "Creating a detailed plan for AI integration, including milestones, resource allocation, and expected outcomes."
                        },
                        {
                            Name: "Innovation Workshops",
                            Des: "Facilitating sessions to ideate and explore potential AI applications that can drive business growth and efficiency."
                        }
                    ]
                },
                {
                    Name: "AI Solution Implementation",
                    "serviceOverview": "Our team of experts designs and implements AI solutions, ensuring they are robust, scalable, and tailored to your specific business needs.",
                    "keyElements": [
                        {
                            Name: "Custom AI Model Development",
                            Des: "Building AI models that are specific to your business challenges, whether in data analytics, customer experience, or operational efficiency."
                        },
                        {
                            Name: "System Integration",
                            Des: "Seamlessly integrating AI solutions into your existing IT infrastructure with minimal disruption."
                        },
                        {
                            Name: "Training and Change Management",
                            Des: "Ensuring your team is equipped to utilize the AI solutions effectively, fostering a culture of innovation and adaptation."
                        }
                    ]
                },
                {
                    Name: "On Going Support And Optimization",
                    "serviceOverview": "We provide continuous support and optimization services to ensure your AI solutions evolve with your business and the latest technological advancements.",
                    "keyElements": [
                        {
                            Name: "Performance Monitoring",
                            Des: "Regularly assessing the performance of AI implementations and making necessary adjustments."
                        },
                        {
                            Name: "AI System Upgrades",
                            Des: "Keeping your AI solutions up-to-date with the latest technologies and best practices."
                        },
                        {
                            Name: "Consultation and Advisory",
                            Des: "Offering ongoing expert advice to help you navigate new AI challenges and opportunities as your business grows."
                        }
                    ]
                }
            ]
        },
        "consultingMethodologies": {
            "Image": Methadology,
            "Overview": "At Stain Mind, we employ a set of robust methodologies designed to manage and leverage the chaotic nature of AI innovation effectively. Our approach is systematic yet flexible, allowing us to adapt to the unique challenges and dynamics of each project.",
            Service:[
                {
                    Name:"Iterative Development And Agile Principles",
                    Parts:[
                        {
                            Name:"Description",
                            Des:"We adopt an agile and iterative approach to AI development, ensuring quick adaptability and continuous improvement."
                        },
                        {
                            Name:"Application",
                            Des:"This methodology allows us to rapidly prototype, test, and refine AI solutions, ensuring they align with evolving business needs and technological advancements."
                        }
                    ]
                },
                {
                    Name:"Data Driven Decision Making",
                    Parts:[
                        {
                            Name:"Description",
                            Des:"Central to our methodology is the reliance on data-driven insights to guide AI strategy and implementation."
                        },
                        {
                            Name:"Application",
                            Des:"We leverage data analytics to understand current trends, predict future patterns, and make informed decisions about AI initiatives, turning chaotic data streams into strategic assets."
                        }
                    ]
                },
                {
                    Name:"Cross Functional Collaboration",
                    Parts:[
                        {
                            Name:"Description",
                            Des:"Our approach involves close collaboration between different functional teams – from IT to marketing and operations."
                        },
                        {
                            Name:"Application",
                            Des:"This integrated approach ensures that AI solutions are holistically designed and implemented, taking into account various aspects of the business."
                        }
                    ]
                },
                {
                    Name:"Risk Management And Ethical Considerations",
                    Parts:[
                        {
                            Name:"Description",
                            Des:"We incorporate risk management strategies and ethical considerations into every stage of AI development."
                        },
                        {
                            Name:"Application",
                            Des:"By identifying potential risks and ethical dilemmas early, we ensure that AI solutions are not only effective but also responsible and aligned with regulatory standards."
                        }
                    ]
                },
                {
                    Name:"Customized AI Road-mapping",
                    Parts:[
                        {
                            Name:"Description",
                            Des:"We develop customized roadmaps for AI integration, tailored to the specific needs and goals of each client."
                        },
                        {
                            Name:"Application",
                            Des:"This involves a thorough analysis of the client's business model, market environment, and technological infrastructure, ensuring that AI strategies are perfectly aligned with their unique context."
                        }
                    ]
                },
                {
                    Name:"Continuous Learning And Evolution",
                    Parts:[
                        {
                            Name:"Description",
                            Des:"Staying abreast of the latest developments in AI is a cornerstone of our methodology."
                        },
                        {
                            Name:"Application",
                            Des:"We continuously update our knowledge base and skills, ensuring our clients benefit from the most advanced and effective AI solutions."
                        }
                    ]
                }                
            ]
        }
    }




    return (
        <div className='md:mx-3 lg:mx-5'>
            <div className={`flex flex-row justify-around mt-12 h-[60vh] lg:h-[90vh] BackgroundService`}>
                <div className=" flex flex-col justify-center  max-w-3xl text-center lg:text px-5 items-center lg:items">
                    <h1 className="text-5xl lg:text-6xl text-center text-gray-800 font-black mb-3 inline-block  bg-clip-text shadowtext">Tailored AI Solutions</h1>
                </div>
            </div>

            <div className='w-[95%] md:w-[85%] m-auto lg:pb-20'>
                <div className="flex flex-col md:flex-row justify-between items-center my-4">
                    <div className="md:basis-[45%] text-left py-10">
                        <h1 className='text-2xl lg:text-5xl font-extrabold text-gray-700  inline-block bg-clip-text'>AI Consulting Service</h1>
                        <p className="text-base lg:text-xl pl-8 text-black  inline-block bg-clip-text">{serviceData.consultingServices.Overview}</p>
                    </div>
                    <div className='md:basis-[40%] w-[100%] h-[100%] rounded-lg'>
                        <img src={serviceData.consultingServices.Image} className='w-[100%] h-[100%] rounded-lg' alt="" />
                    </div>

                </div>

                <div className="flex flex-col justify-between items-start gap-20">
                    {serviceData?.consultingServices?.Servcie?.map((item, index) => (
                        <div className="flex flex-col md:flex-row justify-between gap-2" key={index}>
                            <div className='basis-[40%]  w-[100%] h-[100%] text-left'>
                                <h2 className='text-xl lg:text-3xl font-extrabold text-gray-700  inline-block bg-clip-text'>{item.Name}</h2>
                                <p className='text-base lg:text-xl pl-2 lg:pl-6 text-gray-700  inline-block bg-clip-text'>{item.serviceOverview}</p>
                            </div>
                            <div className="basis-[50%] w-[100%] h-[100%] text-left">
                            <h2 className='text-xl lg:text-3xl text-left font-extrabold text-gray-700  inline-block bg-clip-text'>Key Elements</h2>
                                <CAccordion className='pl-2 lg:pl-10'>
                                    {item?.keyElements?.map((item2, index2) => (
                                        <>
                                            <CAccordionItem itemKey={index2}>
                                                <CAccordionHeader>{item2.Name}</CAccordionHeader>
                                                <CAccordionBody>
                                                    {item2.Des}
                                                </CAccordionBody>
                                            </CAccordionItem>
                                        </>
                                    ))}
                                </CAccordion>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className='w-[95%] md:w-[85%] m-auto pb-20'>
                <div className="flex flex-col md:flex-row justify-between items-center my-4">
                    <div className="md:basis-[45%] text-left py-10">
                        <h1 className='text-2xl lg:text-5xl font-extrabold text-gray-700  inline-block bg-clip-text'>Our AI Consulting Methodologies</h1>
                        <p className="text-base lg:text-xl pl-8 text-black  inline-block bg-clip-text">{serviceData.consultingMethodologies.Overview}</p>
                    </div>
                    <div className='md:basis-[40%] w-[100%] h-[100%] rounded-[25px]'>
                        <img src={serviceData.consultingMethodologies.Image} className='w-[100%] h-[100%] rounded-[25px]' alt="" />
                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-start gap-20 ">
                    {serviceData?.consultingMethodologies?.Service?.map((item, index) => (
                        <div className="bg-[#fff] rounded-2xl  text-gray-700 ease-in-out duration-500 shadow-gray-700 shadow-xl px-8 py-8 W-[100%] text-left h-[100%] flex  flex-col justify-start gap-2" key={index}>
                            <h2 className='text-xl md:text-2xl font-extrabold   inline-block bg-clip-text'>{item.Name}</h2>
                            {item.Parts.map((item2,index2)=>(
                                <div key={index2} className='pl-8'>
                                    <h3 className='text-base md:text-xl font-extrabold  inline-block bg-clip-text'>{item2.Name}</h3>
                                    <p className='text-sm lg:text-base  inline-block bg-clip-text'>{item2.Des}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Service