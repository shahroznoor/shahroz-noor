import React, { useEffect } from 'react'
import {FaArrowRight} from 'react-icons/fa'
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function Contact() {
    useEffect(()=>{
        Aos.init({
          once:true
        })
      })
  return (
      <div className='max-w-4xl mx-auto text-center py-12 mt-8' data-aos='zoom-in' data-aos-duration='800' data-aos-delay='400'>
        <p className='text-xl text-black text-center md:text-3xl font-bold dark:text-white'>
            Interseted In Working Together? 
        </p>
        <a href='mailto:shahroznoor2017@gmail.com' className='justify-center'>
            <span className='mt-10 inline-block w-auto bg-black font-dispay text-white text-base  py-4 px-7 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black hover:border-black border-2 duration-300 dark:bg-white dark:text-black'>
                <div className='flex flex-row items-center '>
                        <span className='mr-3'> Get in Touch</span>
                        <FaArrowRight  className= ' ' />
                </div>
            </span>
        </a>
    </div>
  )
}                                                                                               