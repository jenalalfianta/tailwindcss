import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import bgImg from '../assets/cyber-bg.png'



export const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p>Lorem ipsum dolor asmet</p>
                <h1>Testing</h1>
                <p>Lorem ipsum dolor asmet</p>
                <button>get started</button>
            </div>
        </div>
    </div>
  )
}


export default Hero