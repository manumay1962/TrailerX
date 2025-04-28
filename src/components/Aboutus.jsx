import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Aboutus = () => {
   const navigate= useNavigate();
  return (
    <div className='p-16 text-zinc-400 '>
        <nav className='mb-5 text-2xl'> <Link
        onClick={() => navigate(-1)}
        className="hover:text-[#6556cd] text-xl ri-arrow-left-line"
      ></Link></nav>
        <h1 className='text-2xl font-bold my-3'>About Us</h1>
        <p className='text-semibold text-lg '>Welcome to TrailerX — your ultimate destination for watching the latest and greatest movie trailers, all in one place!

At TrailerX, we believe that every great movie experience begins with an unforgettable trailer.
Our platform is built for movie lovers, binge-watchers, and casual fans who want a quick, easy, and exciting way to explore what's new and what's coming soon.

Whether you're into Hollywood blockbusters, indie gems, TV shows, or animated adventures, we've got trailers across every genre and style — ready for you to watch anytime, anywhere.</p>
   
<hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500 " />
   <h1 className='text-2xl font-bold my-3'>Why TrailerX?</h1>
   <p className='text-semibold text-lg '><li>✨ Curated collection of the latest trailers</li>
   <li>🚀 Fast-loading, no clutter experience</li>
   <li>🔎 Easy to search, browse, and explore</li></p>
   <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500 " />
   <p>Join us at TrailerX and get a front-row seat to the world of entertainment.
   Because every story starts with a glimpse. </p>
    </div>

  )
}

export default Aboutus