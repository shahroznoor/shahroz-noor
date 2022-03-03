import React from "react";
import profile from "../images/dp.jpg";
import { FaGithub , FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {GrMail}  from "react-icons/gr";
import Typist from 'react-typist';
export default function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white  shadow-xl rounded-xl p-5 dark:bg-slate-800 ">
        <div className="hover:animate-pulse">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm  "
         
            src={profile}
            alt="profile"
          ></img>
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900  dark:text-white ">Muhammad Shahroz</p>
   
          <Typist>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-4 w-auto inline-block dark:text-white">
            Full Stack Developer
          </p>
         
          </Typist>
         <div className="border-b-2 "></div>
          <div className="flex align-center  justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p2  text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-200 dark:text-white dark:hover:text-black dark:hover:bg-white"
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
              className="text-xl m-1 p-1 sm:m-2 sm:p2  text-gray-900 dark:text-white hover:bg-red-500 rounded-full hover:text-white transition-colors duration-200 "
              href="mailto:shahroznoor2017@gmail.com"
            >
              <GrMail />
              <span className="sr-only">Mail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
