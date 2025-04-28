import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Notfound from "../Notfound";

function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : 'tv';
  const ytvideo = useSelector((state) => state[category].info.video);

  
  return (
    <div className="bg-[rgba(0,0,0,.7)] absolute top-0 left-0 z-1000 w-screen h-screen flex items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="absolute hover:text-[#6556cd] ri-close-fill text-3xl text-white right-[5%] top-[5%] "
      ></Link>

      {ytvideo ? (
        <ReactPlayer   
          controls
          height={650}
          width={1200}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <Notfound />
      )}
    </div>
  );
}

export default Trailer;