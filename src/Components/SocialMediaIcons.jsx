import React from 'react';
import LinkedIn from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"

function SocialMediaIcons() {

    const linksAndImages = [
        {
            id: 1,
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/akshay-neje/",
            img: LinkedIn

        },
        {
            id: 2,
            title: "twitter",
            link: "https://twitter.com/AkshayNeje74486",
            img: twitter

        },
        
        {
            id: 3,
            title: "instagram",
            link: "https://www.instagram.com/akshay_neje_09/",
            img: instagram

        }
    ]
    return (
        <div className='flex justify-center md:justify-start my-10 gap-7'>
            {
                linksAndImages.map(item => <a key={item.id}
                    className='hover:opacity-50 transition duration-500'
                    href={item.link}
                    target='_blank'
                    rel='noreferrer'>
                    <img src={item.img} alt="social_media_link" />
                </a>)
            }
        </div>
    )
}

export default SocialMediaIcons