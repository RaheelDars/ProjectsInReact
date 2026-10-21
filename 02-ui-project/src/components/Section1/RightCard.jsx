import React from 'react'
import { MoveRight } from 'lucide-react';
const RightCard = () => {
  return (
    <div className='h-full w-70 overflow-hidden relative rounded-4xl'>
        <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661607046789-027c27101d04?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
        <div className='absolute top-0 left-0 h-full w-full bg-amber-300 p-4 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
            <div>
                <p className='text-lg leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, eveniet.</p>
                <div>
                    <button className='bg-blue-600 text-white font-medium px-7 rounded-full  '>Satisfied</button>
                    <button className='bg-blue-600 text-white  font-medium px-5  rounded-full  '><MoveRight /></button>
                </div>
            </div>


        </div>
    </div>
  )
}

export default RightCard