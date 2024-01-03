import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function DotGroup({ selectedPage, setSelectedPage }) {
    const styles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`
    console.log(selectedPage)
    return (
        <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
            {
                ["Home", 'Skills', "Projects", "Testimonials", "Contact"].map(ele => (
                    <AnchorLink
                        key={ele}
                        className={`${selectedPage === ele.toLowerCase() ? styles : "bg-dark-grey"} w-3 h-3 rounded-full`}
                        href={`#${ele.toLowerCase()}`}
                        onClick={() => setSelectedPage(ele.toLowerCase())}>
                    </AnchorLink>
                ))
            }
        </div>
    )
}

export default DotGroup