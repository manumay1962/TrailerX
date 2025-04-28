import React from "react";
import { Link } from "react-router-dom";
import noimage from "../../assets/noimage.webp"

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap pl-[10%]   mt-10 h-full  w-full bg-[#1f1e24]">
      {data.map((c, i) => (
        <Link key={i} to={`/${c.media_type || title}/details/${c.id}`} className="w-[26vh] mr-[5%] mb-[5%] relative ">
          <img
            className="h-[40vh]  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,00.5)] rounded-md  overflow-hidden hover:scale-105 "
            src={c.poster_path || c.backdrop_path || c.profile_path ?
              `https://image.tmdb.org/t/p/original${
              c.poster_path || c.backdrop_path || c.profile_path || ""
            }`:noimage}
            alt=""
          />
          <h1 className="text-lg font-semibold mt-3 text-zinc-200 tracking-tight">
            {c.name || c.title || c.original_title || c.original_name}
          </h1>
          {c.vote_average && <div className="w-[8vh] rounded-full h-[8vh] absolute text-white left-[85%] flex items-center justify-center bottom-[25%] font-semibold bg-yellow-600 ">
            {Math.floor(c.vote_average * 10)}
            <sup >%</sup>
          </div>}
          
        </Link>
      ))}
    </div>
  );
};

export default Cards;
