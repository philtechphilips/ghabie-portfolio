import Image from 'next/image';
import React from 'react';
import 'remixicon/fonts/remixicon.css';

const WorkWIthUs = () => {
    return (
        <div className='w-full flex md:flex-row flex-col md:px-24 px-5 bg-gray-100 py-10'>
            <div className='md:w-2/5 md:pr-10'>
                <h1 className='font-bold md:text-4xl text-3xl md:text-left text-center'>Why You'll Love Working With Us</h1>
            </div>
            <div className='flex mt-10 md:mt-0 md:flex-row flex-col md:w-3/5 gap-10 flex-wrap'>
                <div className='md:w-[45%] flex flex-col items-center md:items-start'>
                    <i className="ri-survey-line text-3xl text-gray-700 md:text-left text-center"></i>
                    <h4 className='font-bold md:text-left text-center'>Unmatched Accountability</h4>
                    <p className='text-gray-700 md:text-left text-center'>Anyone can claim they're on your side, but we prove it. All the risk is on us—you only pay when you're completely satisfied.</p>
                </div>

                <div className='md:w-[45%] flex flex-col items-center md:items-start'>
                    <Image src="/images/bolt.svg" alt='work-with-us' width={30} height={30} />
                    <h4 className='font-bold md:text-left text-center'>No Surprises: You’ll know the price upfront.</h4>
                    <p className='text-gray-700 md:text-left text-center'>
                        We ensure complete transparency, you'll see the price before we begin. Our commitment is simple—what we quote is what you pay, and only if we deliver exactly as promised.
                    </p>
                </div>

                <div className='md:w-[45%] flex flex-col items-center md:items-start'>
                    <Image src="/images/compass.svg" alt='' width={30} height={30} />
                    <h4 className='font-bold md:text-left text-center'>We deliver precisely what you need.</h4>
                    <p className='text-gray-700 md:text-left text-center'>
                        We don’t impose a minimum project size. Instead, we start small, gather valuable feedback, and refine your app based on real customer insights. This ensures accountability and perfectly aligns with your needs.
                    </p>
                </div>

                <div className='md:w-[45%] flex flex-col items-center md:items-start'>
                    <i className="ri-brain-line text-3xl text-gray-700 md:text-left text-center"></i>
                    <h4 className='font-bold md:text-left text-center'>Leverage AI</h4>
                    <p className='text-gray-700 md:text-left text-center'>
                        Discover how AI can elevate your idea. We’ll help you identify AI opportunities and guide you through the implementation to bring your vision to life.
                        Get Started Today
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WorkWIthUs
