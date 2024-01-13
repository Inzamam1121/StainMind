import React from 'react'
import "../assets/Style/custom.css"

const Partners = () => {

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

    const PartNew=[
        {
            Title:"Technology Partners",
            Des:"Our technology partners provide us with the latest tools and platforms, ensuring that our clients benefit from the forefront of AI advancements."
        },
        {
            Title:"Academic Partners",
            Des:"Collaborations with leading academic institutions keep us connected to groundbreaking research and emerging trends in AI and data science."
        },
        {
            Title:"Industry Collaborators",
            Des:"Our industry collaborators bring in-depth knowledge and sector-specific insights, enabling us to tailor our AI solutions to meet diverse industry needs."
        }
    ]

    return (
        <div className='md:mx-3 lg:mx-5'>
            <div className={`flex flex-row justify-around mt-12 h-[60vh] lg:h-[90vh] BackgroundAbout`}
                data-aos="fade-up"
                data-aos-duration='1000'
                data-aos-easing="ease-in-quad">
                <div className=" flex flex-col justify-center  max-w-4xl text-center lg:text px-5 items-center lg:items">
                    <h2 className="text-xl lg:text-3xl text-center font-semibold text-gray-800  inline-block bg-clip-text md:shadowtext">Our Partners</h2>
                    <h1 className="text-5xl lg:text-6xl text-center text-gray-800 font-black mb-3 inline-block  bg-clip-text shadowtext">Collaborative Excellence in AI</h1>
                </div>
            </div>

            <div className="flex justify-center align-middle flex-col mb-16 space-y-4 lg:space-y-8 w-[90%] lg:w-[80%] m-auto">
                <h2 className="text-xl lg:text-5xl font-semibold text-center text-gray-700  inline-block bg-clip-text">Our Valued Partners</h2>
                <p className="text-base lg:text-xl text-center text-black  inline-block bg-clip-text lg:w-[80%] m-auto pb-10">At Stain Mind, we believe in the power of collaboration to drive innovation and excellence in AI consulting. Our partners play a crucial role in helping us deliver comprehensive and cutting-edge solutions to our clients. Together, we push the boundaries of what's possible in AI strategy and implementation.</p>

                <div className="flex flex-col justify-center items-center flex-wrap gap-5 md:gap-10 lg:gap-20">
                    {Part.map((item, index) => {
                        if (index % 2 == 0) {
                            return (
                                <div className='flex flex-col md:flex-row justify-between items-start w-[100%] h-[100%] gap-10'>
                                    <div className='basis-[50%] text-left py-8 flex flex-col gap-2'>
                                        <h2 className='text-2xl lg:text-5xl font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Name}</h2>
                                        <h3 className='text-xl lg:text-3xl  font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Title}</h3>
                                        <p className='text-base lg:text-lg  font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Des}</p>
                                    </div>
                                    <img src={item.Image} className='basis-[35%] w-[100%] rounded-xl h-[100%] object-cover' alt="" />
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className=' flex flex-col md:flex-row justify-between items-start w-[100%] h-[100%] gap-10'>
                                    <img src={item.Image} className='basis-[35%] w-[100%] rounded-xl h-[100%] object-cover' alt="" />
                                    <div className='basis-[50%] text-left py-8 flex flex-col gap-2'>
                                        <h2 className='text-2xl lg:text-5xl  font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Name}</h2>
                                        <h3 className='text-xl lg:text-3xl  font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Title}</h3>
                                        <p className='text-base lg:text-lg  font-semibold text-left text-gray-700  inline-block bg-clip-text'>{item.Des}</p>
                                    </div>
                                </div>
                            )
                        }

                    })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center flex-wrap gap-20 py-20">
                    {PartNew.map((item,index)=>(
                        <div key={index} className="bg-white rounded-2xl shadow-gray-700 shadow-xl px-8 py-8 W-[100%] text-center h-[100%]">
                            <h3 className="text-xl lg:text-2xl font-extrabold text-center text-gray-700  inline-block bg-clip-text mb-4">{item.Title}</h3>
                            <p className="text-sm lg:text-base font-medium text-center text-gray-500  inline-block bg-clip-text">{item.Des}</p>
                        </div>
                    ))}
                </div>
            </div>




        </div>
    )
}

export default Partners