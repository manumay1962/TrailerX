import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), 
                     url("https://image.tmdb.org/t/p/original${
                       data.backdrop_path || data.profile_path || ""
                     }")`,
        backgroundSize: "cover",
        backgroundPosition: "top 10%",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[60vh] flex flex-col items-start justify-end p-[5%]"
    >
      <h1 className="w-[70%] text-white font-black text-5xl">
        {data.name || data.title || data.original_title || data.original_name}
      </h1>
      <p className="mt-3 mb-3 text-white  w-[70%]">
        {data.overview.slice(0, 200)} ..
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-500  ">.more</Link>
      </p>
      <p className="text-white ">
        <i className=" text-yellow-500 p-1  ri-megaphone-fill"></i>
        {data.release_date || "No Information"}
        <i className="ml-5 p-1 text-yellow-500 ri-movie-2-line"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className="p-3 rounded text-white font-semibold mt-5 bg-[#6556cd]">
        Watch Trailer
      </Link>
    </div>
  );
};
