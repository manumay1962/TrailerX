import React from 'react'
import Notfound from '../assets/404.gif.gif'

function NotFound() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
      <img className='h-[50%] object-cover ' src={Notfound} alt="" />
    </div>
  )
}

export default NotFound