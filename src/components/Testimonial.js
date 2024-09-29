import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Marquee from "react-fast-marquee";

const Testimonial = () => {
    return (
        <div className='py-24 md:px-24 px-5'>
            <div className='w-full flex justify-center mb-10'>
                <h1 className='text-3xl w-[550px] font-bold text-center'>Chosen And Endorsed By Small And Large Businesses</h1>
            </div>

            <Marquee>
                <div className='border md:mr-7 mr-2 px-5 py-5 rounded-lg w-[340px] md:w-[400px] md:h-[300px] h-[350px]'>
                    <Link target="_blank" href="https://www.linkedin.com/in/rolandokeke/details/recommendations/?detailScreenTabIndex=1">
                        <div className='flex items-start gap-2'>
                            <Image src="/images/review-one.jpeg" className='rounded-full' width={50} height={100} alt=''></Image>
                            <div>
                                <h4 className='font-semibold'>Steve Boutboul</h4>
                                <p className='text-sm'>Chief Architect</p>
                                <p className='text-gray-600 text-sm'>July 23, 2024, Steeve managed Chima directly</p>
                                <p className='text-sm mt-2'>I had the pleasure to manage Chima and what I can say is that he is a very smart and hard working person. It will be an asset for any company taking him aboard.</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='border md:mr-7 mr-2 px-5 py-5 rounded-lg w-[340px] md:w-[400px] md:h-[300px] h-[350px]'>
                    <Link target="_blank" href="https://www.linkedin.com/in/rolandokeke/details/recommendations/?detailScreenTabIndex=1">
                        <div className='flex items-start gap-2'>
                            <Image src="/images/review-two.jpeg" className='rounded-full' width={50} height={100} alt=''></Image>
                            <div>
                                <h4 className='font-semibold'>Salahi Halil AltıncıSalahi</h4>
                                <p className='text-sm'>Senior Software Developer at Mathlogic | Full Stack Web Dev, Java</p>
                                <p className='text-gray-600 text-sm'>July 16, 2024, Salahi Halil worked with Chima on the same team.</p>
                                <p className='text-sm mt-2'>
                                    Chima is always eager to learn and improve, making him a fantastic asset to any team. Chima's positive attitude and willingness to help out make him a joy to work with.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='border md:mr-7 mr-2 px-5 py-5 rounded-lg w-[340px] md:w-[400px] md:h-[300px] h-[350px]'>
                    <Link target="_blank" href="https://www.linkedin.com/in/rolandokeke/details/recommendations/?detailScreenTabIndex=1">
                        <div className='flex items-start gap-2'>
                            <Image src="/images/review-three.jpeg" className='rounded-full' width={50} height={100} alt=''></Image>
                            <div>
                                <h4 className='font-semibold'>Habeeb K. Salaudeen PhD</h4>
                                <p className='text-sm'>Software Engineer | Technical Fellow | AI integration Specialist for Business Solutions.</p>
                                <p className='text-gray-600 text-sm'>July 11, 2024, Habeeb K. worked with Chima on the same team.</p>
                                <p className='text-sm mt-2'>
                                    I witnessed his ability to write clean and reusable code in Java while working with him at Mathlogic. Additionally, he has a good command of advanced concepts in OOP, DDD, microservice architecture, and event-driven architecture.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='border md:mr-7 mr-2 px-5 py-5 rounded-lg w-[340px] md:w-[400px] md:h-[300px] h-[350px]'>
                    <Link target="_blank" href="https://www.linkedin.com/in/rolandokeke/details/recommendations/?detailScreenTabIndex=1">
                        <div className='flex items-start gap-2'>
                            <Image src="/images/review-four.jpeg" className='rounded-full' width={50} height={100} alt=''></Image>
                            <div>
                                <h4 className='font-semibold'>Ramazan Bakır</h4>
                                <p className='text-sm'>Software Developer - Mathlogic Information and Technologies Ltd.</p>
                                <p className='text-gray-600 text-sm'>July 10, 2024, Ramazan worked with Chima on the same team.</p>
                                <p className='text-sm mt-2'>
                                    I strongly endorse Chimaobi Okeke, reflecting on our collaboration at Mathlogic Information and Technologies Ltd. Chima consistently showcased exceptional abilities in Java and Python, significantly enhancing our projects.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='border md:mr-7 mr-2 px-5 py-5 rounded-lg w-[340px] md:w-[400px] md:h-[300px] h-[350px]'>
                    <Link target="_blank" href="https://www.linkedin.com/in/rolandokeke/details/recommendations/?detailScreenTabIndex=1">
                        <div className='flex items-start gap-2'>
                            <Image src="/images/review-five.jpg" className='rounded-full' width={50} height={100} alt=''></Image>
                            <div>
                                <h4 className='font-semibold'>Nwabueze U.</h4>
                                <p className='text-sm'>
                                    Java Web Developer | Full Stack Developer | Software Engineer.
                                </p>
                                <p className='text-gray-600 text-sm'>
                                    July 9, 2024, Nwabueze worked with Chima on the same team
                                </p>
                                <p className='text-sm mt-2'>
                                    I highly recommend Chimaobi Okeke based on our time working together at Mathlogic Information and Technologies Ltd. Chimaobi Okeke consistently demonstrated strong skills in Java and Python programming languages and made significant contributions to our projects.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>

            </Marquee>
        </div>
    )
}

export default Testimonial
