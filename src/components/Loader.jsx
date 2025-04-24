import React from 'react'
import  loader from "../assets/loader.gif"
const Loader = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-zinc-700'>
        <img className='h-[50%]' src={loader} alt="" />
    </div>
  )
}

export default Loader