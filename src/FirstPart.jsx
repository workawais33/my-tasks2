import React, { useState } from 'react'
import SecondPart from './components/SecondPart'


const FirstPart = () => {
  
   
  return (
    <div className=' flex justify-center mt-32 '>

      <div>

      <div className='text-center bg-green-600 h-80 w-80 pt-24'>
      <h1 className='font-extrabold cursor-pointer'>This is increasing counter</h1>
      <SecondPart title="counter"/>
      </div>
      </div>
    </div>
    
  )
}

export default FirstPart