import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (

        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>


                <div className=''>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est. Incidunt voluptatibus minima natus dolorem amet ducimus ut aliquam, nobis repudiandae perspiciatis facere harum repellendus commodi. Voluptas dolorum adipisci quisquam?
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>Get In Touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-222-22222</li>
                        <li>contact@foreveryou,com</li>
                    </ul>
                </div>


            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>
                    Copyright 3035@ forever.com all right Reserved
                </p>
            </div>
        </div>
    )
}

export default Footer