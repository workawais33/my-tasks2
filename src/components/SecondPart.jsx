import React, { useEffect, useState } from 'react'

const SecondPart = ({title}) => {
 const [value, setValue] = useState(0);
 useEffect(() => {
  console.log(`${value}`)
 }) 

 




  return (
    <div>
      <div className='ml-[120px] mt-2 mb-2'>

     <p className='bg-white w-20 rounded-2xl cursor-pointer'>{value}</p>
     </div>
   <button className='px-5 py-3 bg-zinc-900 rounded-lg text-lime-200 border border-solid border-purple-500' onClick={()=>{
    setValue(value + 1)
   }}>up counter</button>
    
    </div>
  )
}

export default SecondPart