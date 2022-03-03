import React, { useEffect } from 'react'
import {FaReact , FaNodeJs} from 'react-icons/fa'
import {SiNestjs , SiTailwindcss , SiRedux , SiBootstrap , SiMysql , SiMongodb , SiPrisma} from 'react-icons/si'
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function Skill() {
    useEffect(()=>{
        Aos.init({
          once:true
        })
      })
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id="tech" data-aos='fade-right' data-aos-duration='400' data-aos-delay='100'>
        <p className='text-xl text-black text-center md:text-3xl font-bold dark:text-white'>
            Tech I use  
        </p>
        <div className='flex flex-wrap justify-center pt-8 space-y-1  ' >
            <div className='flex flex-col w-40 h-48 p-10 mx-6 bg-white shadow-2xl rounded-xl dark:bg-slate-800  ' data-aos='flip-left' data-aos-duration='800' data-aos-delay='200'>
                <FaReact color='#61DAFB' className='mx-auto text-4xl' />
                <p className='mt-8 text-xl text-black sm:text-xl font-semibold text-center dark:text-white'>React</p>
            </div>
            
            <div className='flex flex-col w-40 h-48 p-10  mx-6 bg-white shadow-2xl rounded-xl dark:bg-slate-800 ' data-aos='flip-left' data-aos-duration='800' data-aos-delay='250'>
                <SiTailwindcss color='#38BDF8' className='mx-auto text-4xl' />
                <p className='mt-8 text-xl text-black sm:text-xl font-semibold text-center dark:text-white'>Tailwind CSS</p>
            </div>
            <div className='flex flex-col w-40 p-10 mx-6 overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-slate-800' data-aos='flip-left' data-aos-duration='800' data-aos-delay='300'>
                <SiBootstrap color='#7952B3' className='mx-auto text-4xl' />
                <p className='mt-8 text-xl text-black sm:text-xl font-semibold dark:text-white '>Bootstrap</p>
            </div>
            <div className='flex flex-col w-40 p-10 mx-6 overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-slate-800 ' data-aos='flip-left' data-aos-duration='800' data-aos-delay='350'>
                <SiRedux color='#764ABC' className='mx-auto text-4xl' />
                <p className='mt-8  text-xl text-black sm:text-xl font-semibold text-center dark:text-white'>Redux</p>
            </div>
            
        </div>
        <div className='flex flex-wrap justify-center pt-10  space-y-1'>
            
            <div className='flex flex-col w-40 h-48 p-10 mx-6 overflow-hidden bg-white shadow-2xl rounded-xl  dark:bg-slate-800' data-aos='flip-left'  data-aos-duration='800' data-aos-delay='400'>
                <FaNodeJs color='#64985F' className='mx-auto text-4xl' />
                <p className='mt-8 text-xl text-black sm:text-xl font-semibold text-center dark:text-white dark:bg-slate-800'>Node</p>
            </div>
            <div className='flex flex-col w-40 h-48 p-10 mx-6 overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-slate-800' data-aos='flip-left' data-aos-duration='800' data-aos-delay='450'>
                <SiNestjs color='#E0234E' className='mx-auto text-4xl' />
                <p className='mt-8 text-xl text-black sm:text-xl font-semibold text-center dark:text-white'>Nest</p>
            </div>
            <div className='flex flex-col w-40 h-48 p-10 mx-6 overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-slate-800' data-aos='flip-left' data-aos-duration='800' data-aos-delay='500'>
                <SiMysql color='#00758F' className='mx-auto text-4xl' />
                <p className='mt-8 text-xl text-black sm:text-xl font-semibold text-center dark:text-white'>My SQL</p>
            </div>
            <div className='flex flex-col w-40 h-48 p-10 mx-6 overflow-hidden bg-white shadow-2xl rounded-xl  dark:bg-slate-800' data-aos='flip-left' data-aos-duration='800' data-aos-delay='550'>
                <SiMongodb color='#4CA449' className='mx-auto text-4xl' />
                <p className='mt-8 text-xl text-black sm:text-xl font-semibold text-center dark:text-white'>Mongo DB</p>
            </div>
        </div>
        <div className='flex flex-wrap justify-center pt-10 '>
            
            <div className='flex flex-col w-40 h-48 p-10 mx-6 overflow-hidden bg-white shadow-2xl rounded-xl  dark:bg-slate-800 ' data-aos='flip-left' data-aos-duration='800' data-aos-delay='600 '>
                <SiPrisma  className='mx-auto text-4xl dark:text-white' />
                <p className='mt-8 text-xl text-black sm:text-xl font-semibold text-center dark:text-white'>Prisma</p>
            </div>
         
        </div>
    </div>
  )
}
