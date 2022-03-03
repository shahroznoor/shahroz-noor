import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import {FaChevronDown} from 'react-icons/fa'

export default function About() {
  return (
    <div className='max-w-4xl mt-20 mx-auto'>
        <p className='text-xl text-black md:text-3xl font-bold text-center dark:text-white'>
            Hey 👋
        </p>
        <p className=' sm:text-xl text-gray-600 text-center leading-relaxed mt-4 '>                                                                                                         
            I'm passionate Web developer. I’m hardworking and ambitious person, who always seeks improvement and betterment in myself to enhance and broad my skill set.
        </p>                                                                                                                                                        

        <ScrollIntoView selector="#tech">
            <div className='mx-auto p-20 ' >
                <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500'/>
            </div>
        </ScrollIntoView>
    </div>
  )
}
