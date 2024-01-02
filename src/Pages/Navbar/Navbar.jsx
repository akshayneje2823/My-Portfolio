import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../../Hooks/useMediaQuery';
import menuIcon from '../../assets/menu-icon.svg'
import closeIcon from '../../assets/close-icon.svg'
import logo from '../../assets/Dev_Akshay.png'

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    console.log(lowerCasePage, selectedPage)

    return <AnchorLink
        href={`#${lowerCasePage}`}
        className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`}
        onClick={() => setSelectedPage(lowerCasePage)}>
        {page}
    </AnchorLink>

}

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }) {
    const [isMenuToggled, setIsMenuToggled] = useState(false)

    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    const navbarBg = isTopOfPage ? "" : "bg-red"
    return (
        <nav className={`${navbarBg} z-40 w-full fixed top-0 py-6`}>
            <div className='flex items-center justify-between mx-auto w-5/6'>
                <h4 className='font-playfair text-3xl font-bold'>Akshay</h4>
                {
                    isAboveSmallScreens ? (<div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>

                        {["Home", 'Skills', "Projects", "Testimonials", "Contact"].map(ele => (
                            <Link page={ele}
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        ))}
                    </div>) : (<button
                        className='rounded-full bg-red p-2'
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <img src={menuIcon} alt="menu-button" />
                    </button>)
                }

                {/* MOBILE MENU POPUP */}
                {
                    !isAboveSmallScreens && isMenuToggled && (
                        <div className='fixed bottom-0 right-0 h-full bg-blue w-[300px]'>
                            {/* CLOSE MENU */}
                            <div className='flex justify-end p-12'>
                                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <img src={closeIcon} alt="close-icon" />
                                </button>

                            </div>
                            {/* Menu Items */}
                            <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                                {["Home", 'Skills', "Projects", "Testimonials", "Contact"].map(ele => (
                                    <Link page={ele}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar