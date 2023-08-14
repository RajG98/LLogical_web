/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import "./Hero.css"
import { NavLink } from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import { ComputersCanvas } from '../canvas';
import { motion } from 'framer-motion';



import swal from 'sweetalert';
export default function Landing() {
 

  return (




    <div class="relative img w-full  flex items-center justify-center text-left bg-cover bg-center "
      style={{height: '100vh'}}
       >
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>
      
      <main class="px-10 lg:px-24 top-[80px]  text-center 
      absolute inset-0 
      max-w-7xl  flex flex-row items-start gap-3
      ">
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="w-5 h-4 rounded-full bg-[#915eff]"/>
          
        </div>
      
            <div>
          <h2 class="text-9xl tracking-tight leading-10 font-extrabold sm:text-6xl text-indigo-600 
              sm:leading-none md:text-7xl">
              Welcome To <span>   </span>
                <span class="text-white">LLOGICAL
     
                </span>
              </h2>
              <h2 class="text-2xl tracking-tight leading-10 font-extrabold sm:text-3xl text-white 
              sm:leading-none md:text-4xl text-left">
              <Typewriter 
                options={{
                  strings: ['Learn Logical', 'Think Logical'],
                  autoStart: true,
                  loop: true,
                }}
                />
          </h2>
              <div class=" sm:mt-8 sm:flex ">
               
                <div class="mt-2 sm:mt-0 sm:ml-3 z-20">
                <NavLink to="/demo">
                <button 
               
                  class="inline-block px-9 py-3 text-white font-medium   leading-tight  
                 shadow-md text-white bg-gradient-to-r from-blue-400 to-blue-800 hover:from-pink-500 uppercase
                 hover:to-yellow-500  border-0 transition duration-150 ease-in-out w-full mb-3 rounded-md"
                
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
           
                >
                
                  Begin Your Journey!
                        </button>
                    </NavLink>
                </div>
              </div>
            </div>
            
          </main>
          <ComputersCanvas/>

    </div>
    
   
    
    

  )
}
