import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import noimage from "../../assets/noimage.webp"

const Horizontal = ({ data }) => {
  return (
    
      
      <div className=" w-[100%] mb-5  flex overflow-y-hidden  p-5 ">
        {data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[15%] shadow-xl rounded  transition-transform duration-200 ease-in-out 
             transform hover:scale-105 will-change-transform h-[39vh] mr-5 mb-5 bg-zinc-900   "
          >
            <img
              className="w-full  object-cover h-[50%] shadow-xl rounded-lg overflow-hidden"
              src={ d.backdrop_path || d.profile_path || d.poster_path ?

                `https://image.tmdb.org/t/p/original${

                d.backdrop_path || d.profile_path || d.poster_path || ""
              }`:noimage}
              alt=""
            />
            <div className="text-white p-3 h-[50%] overflow-y-auto ">
              {" "}
              <h1 className=" tracking-tight  font-semibold text-xl">
                {d.name || d.title || d.original_title || d.original_name}
              </h1>
              <p className=" text-sm  mt-1 overflow-y-auto ">
                {d.overview.slice(0, 40)} ..
                <span className="text-zinc-500  ">.more</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
   
  );
};

export default Horizontal;
