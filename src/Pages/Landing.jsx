import React from 'react'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../Hooks/useMediaQuery';
import SocialMediaIcons from '../Components/SocialMediaIcons';

function Landing({ setSelectedPage }) {
    const isAboveMediaScreens = useMediaQuery("(min-width:1200px)");

    return (
        <section id='home' className='mt-6 md:flex md:justify-between md:items-center gap-16 md:h-full py-10'>


            {/* Img Section */}
            <div className="basis-2/5 z-10 mt-20 md:mt-32 flex justify-center md:order-2">
                {isAboveMediaScreens ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
                        before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[600px]"
                            src="assets/profile-image.png"
                        />
                    </div>
                ) : (
                    <img
                        alt="profile"
                        className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                        src="assets/profile-image.png"
                    />
                )}
            </div>


            {/* Main Section */}
            <div className='z-30 basis-2/5 mt-12 md:mt-32'>
                <motion.div
                    initial='hidden'
                    whileInView={'visible'}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 2 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className='text-6xl font-playfair z-10 text-center md:text-start'>
                        Akshay
                        <span
                            className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
                            before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                        >
                            Neje
                        </span>
                    </p>
                    <p className='mt-10 mb-7 text-sm text-center md:text-start'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi reprehenderit
                        nulla quia in accusantium suscipit error ut eum aspernatur?</p>

                </motion.div>

                {/* CALL TO ACTIONS */}
                <motion.div
                    className='flex mt-5 justify-center md:justify-start'
                    initial='hidden'
                    whileInView={'visible'}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <AnchorLink
                        className='bg-gradient-rainbow text-deep-blue rounded-sm py-3 px-7 font-semibold
                         hover:bg-blue hover:text-white transition duration-500'
                        href='#contact'
                        onClick={() => setSelectedPage('contact')}>
                        Contact Me
                    </AnchorLink>
                    <AnchorLink
                        className='rounded-r-sm bg-gradient-rainbow py-0.5 pr-0.5 '
                        href='#contact'
                        onClick={() => setSelectedPage('contact')}>
                        <div className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10 '>

                            Let's talk
                        </div>
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className='flex mt-5 justify-center md:justify-start'
                    initial='hidden'
                    whileInView={'visible'}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    )
}

export default Landing