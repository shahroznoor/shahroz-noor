import React, { useEffect } from 'react'
import { FaGithub , FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {GrMail}  from "react-icons/gr";
import Typist from 'react-typist';
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function Footer() {
   useEffect(()=>{
        Aos.init({
          once:true
        })
      })
  return (
    <div className='py-5 border-t-3/2'>
        <div className='flex justify-center mt-4' data-aos='zoom-out' data-aos-duration='800' data-aos-delay='500'>
        <a
              className="text-xl m-1 p-1 sm:m-2 sm:p2  text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-200 dark:text-white dark:hover:text-black dark:hover:bg-white "
              
              href="https://github.com/shahroznoor"
            >
              <FaGithub />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p2  text-blue-700 hover:bg-blue-700 rounded-full hover:text-white transition-colors duration-200 "
              href="https://www.linkedin.com/in/muhammad-shahroz-371b331b6/"
            >
              <FaLinkedin />
              <span className="sr-only">linkedin</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p2  text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-200 "
              href="https://twitter.com/noor_shahroz"
            >
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p2  text-gray-900 dark:text-white hover:bg-red-500 rounded-full hover:text-white transition-colors duration-200  "
              href="https://mail.google.com/mail/u/0/#inbox"
            >
              <GrMail />
              <span className="sr-only">Mail</span>
            </a>
        </div>
        <div className='flex justify-center mt-4'>
          
            <p className='text-black mb-4 dark:text-white'>
                Made with <span className='mr-2' role="link" aria-label="heart">💙</span> by <a className='text-blue-500 hover:underline' href='https://www.linkedin.com/in/muhammad-shahroz-371b331b6/'>Muhammad Shahroz</a>
            </p>
        </div>
    </div>
  )
}
