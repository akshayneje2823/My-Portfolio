import React from 'react'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../Hooks/useMediaQuery';
import profileImage from '../assets/profile-image.png'

function Landing({ setSelectedPages }) {
    const isAboveMediaScreens = useMediaQuery("(min-width:1200px)");

    return (
        <section id='home' className='md:flex md:justify-between md:items-center gap-16 md:h-full py-10'>
            {/* Img Section */}
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                {isAboveMediaScreens ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src={profileImage}
                        />
                    </div>
                ) : (
                    <img
                        alt="profile"
                        className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                        src={profileImage}
                    />
                )}
            </div>
            {/* Main Section */}
            <div className='z-30 basis-2/5 mt-12 md:mt-32'>
                <motion.div
                    initial='hidden'
                    whileInView={'visible'}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className='text-6xl font-playfair z-10 text-center md:text-start'>
                        Akshay
                        <span
                         className='xs:relative xs:text-deep-blue xs:font-semibold z-20 before:'
                        >Neje</span>
                    </p>

                </motion.div>

            </div>
        </section>
    )
}

export default Landing