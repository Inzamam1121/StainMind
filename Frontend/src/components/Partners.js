import React, { useEffect, useState } from 'react'
import "../assets/Style/custom.css"

const Partners = () => {

    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {
        // Check if we're running in a browser environment before using window
        if (typeof window !== 'undefined') {
            setScreenWidth(window.outerWidth);

            // Add an event listener to update screenWidth on window resize
            const handleResize = () => {
                setScreenWidth(window.outerWidth);
            };

            window.addEventListener('resize', handleResize);

            // Clean up the event listener when the component unmounts
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const Part = [
        {
            Title: "Rapid Democratization of AI Tech and Research",
            Name: "Microsoft",
            Des: "A dominant provider of enterprise solutions and cloud leader with Azure Cloud, investing heavily in AI and its application on a global scale",
            Image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAV1BMVEWBvAb/uggFpvDzUyX///////x3twC/256Jx/X/04kAoe//tgDyQQD4rJ//+ff6/fXxKwBrsgAAme71/P//sADwBABfrAD3oZi21pV/v/P/zX8Ak+3/qwAy/rpPAAAA+ElEQVR4nO3VSRbBUABFwY9ET/T9/tdpQqzg5QR1d1CjW0bhNuvqVbMt6WBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGC+FrMMd/xgTuNwZRXu/LZU9WUSrlTdVafrEhMPpq/B9DWYvvZbn5mGu+5by20WrszD3VtM81iEK8Nwuw/mMAgHAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwPzX5gnybNKOoC+gOAAAAAASUVORK5CYII="
        },
        {
            Title: "Generative AI Partners",
            Name: "Nvidia",
            Des: "Known for its fast GPUs crucial for compute-intensive AI applications, Nvidia offers a suite of software solutions including generative AI, AI training, and AI cybersecurity",
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1KVwWlu4AZ8x5WJddr0QE3PULQUV-9uqjQ&usqp=CAU"
        },
        {
            Title: "AI Industry Regulation Partners",
            Name: "IBM",
            Des: "A leading hybrid and multicloud vendor with an extensive AI portfolio, including Watson platform known for conversational AI, machine learning, and automation. IBM's deep investment in R&D and partnership with MIT could be beneficial for navigating AI industry regulations",
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkf26ZMwgbnD6SR0uAoqulV30NqmM7tC-5Q&usqp=CAU"
        },
        {
            Title: "Explainable AI Partners",
            Name: "Google",
            Des: "With a strong foundation in algorithms, Google has demonstrated a competitive focus on AI through its Google Cloud platform and the AI platform Bard. Google's expertise in AI could contribute to developing transparent and interpretable AI systems",
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUCJqB3nzZwma353vm0K0vB95jdTTnujY-A&usqp=CAU"
        },
        {
            Title: "Human-AI Collaboration Partners",
            Name: "Amazon Web Services (AWS)",
            Des: "As a leader in cloud computing, AWS offers an extensive range of AI services focused on making AI accessible to enterprise buyers, including tools for human-AI collaboration like chatbots and automated speech recognition",
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTasuCxtZj3-y3awXalmvF39RKEiF9xlwJD-g&usqp=CAU"
        }
    ]

    return (
        <div className='md:mx-3 lg:mx-5'>
            <div className={`flex flex-row justify-around mt-12 h-[60vh] lg:h-[90vh]`}>
                <div className=" flex flex-col justify-center  max-w-4xl text-center lg:text px-5 items-center lg:items">
                    <h2 className="text-xl lg:text-3xl text-center font-semibold md:text-gray-800 text-gray-400 inline-block bg-clip-text">Our Partners</h2>
                    <h1 className="text-5xl lg:text-6xl text-center text-gray-800 font-black mb-3 inline-block  bg-clip-text">Collaborative Excellence in AI</h1>
                </div>
            </div>

            <div className="flex justify-center align-middle flex-col mb-16 space-y-4 lg:space-y-8 w-[90%] lg:w-[80%] m-auto">
                <h2 className="text-xl lg:text-5xl font-semibold text-center text-gray-700  inline-block bg-clip-text">Our Valued Partners</h2>
                <p className="text-base lg:text-xl text-center text-black  inline-block bg-clip-text lg:w-[80%] m-auto pb-10">At Stain Mind, we believe in the power of collaboration to drive innovation and excellence in AI consulting. Our partners play a crucial role in helping us deliver comprehensive and cutting-edge solutions to our clients. Together, we push the boundaries of what's possible in AI strategy and implementation.</p>

                <div className="flex flex-col justify-center items-center flex-wrap gap-5 md:gap-10 lg:gap-20">
                    {Part.map((item, index) => {
                        if(screenWidth>650){
                            if (index % 2 == 0) {
                                return (
                                    <div className='flex flex-col md:flex-row justify-between items-start w-[100%] h-[100%] gap-10'>
                                        <div className='basis-[50%] text-left py-8 flex flex-col gap-2'>
                                            <h2 className='text-2xl lg:text-5xl font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Name}</h2>
                                            <h3 className='text-xl lg:text-3xl  font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Title}</h3>
                                            <p className='text-base lg:text-lg  font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Des}</p>
                                        </div>
                                        <img src={item.Image} className='basis-[35%] w-[100%] rounded-xl h-[100%] object-contain' alt="" />
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div className=' flex flex-col md:flex-row justify-between items-start w-[100%] h-[100%] gap-10'>
                                        <img src={item.Image} className='basis-[35%] w-[100%] rounded-xl h-[100%] object-contain' alt="" />
                                        <div className='basis-[50%] text-left py-8 flex flex-col gap-2'>
                                            <h2 className='text-2xl lg:text-5xl  font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Name}</h2>
                                            <h3 className='text-xl lg:text-3xl  font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Title}</h3>
                                            <p className='text-base lg:text-lg  font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Des}</p>
                                        </div>
                                    </div>
                                )
                            }
                        }else{
                            return (
                                <div className=' flex flex-col md:flex-row justify-between items-start w-[100%] h-[100%] gap-10'>
                                    <div className='basis-[50%] text-left py-8 flex flex-col gap-2'>
                                        <h2 className='text-2xl lg:text-5xl  font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Name}</h2>
                                        <h3 className='text-xl lg:text-3xl  font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Title}</h3>
                                        <p className='text-base lg:text-lg  font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Des}</p>
                                    </div>
                                    <img src={item.Image} className='basis-[35%] w-[100%] rounded-xl h-[100%] object-contain' alt="" />
                                </div>
                            )
                        }
                    })}
                </div>

            </div>




        </div>
    )
}

export default Partners
