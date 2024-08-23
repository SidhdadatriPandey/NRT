import React from 'react'
import Image from 'next/image'


const HomeBlogs = () => {
    return (
        <div>
            <div>
                <Image src="/Home-blog-1.png" height="50" width="130" alt='logo-of-nrt' className='bg-white'></Image>
                <h4>Why Is NewRise Technosys the Best SEO Company in India for Your Business</h4>
            </div>
            <div>
                <Image src="/Home-blog-2.png" height="50" width="130" alt='logo-of-nrt' className='bg-white'></Image>
                <h4>Imagen 3: Stunningly Realistic Images at Your Fingertips</h4>
            </div>
            <div>
                <Image src="/Home-blog-3.png" height="50" width="130" alt='logo-of-nrt' className='bg-white'></Image>
                <h4>NewRise Technosys: Your Trusted Partner in Digital Solutions</h4>
            </div>
        </div>
    )
}

export default HomeBlogs
