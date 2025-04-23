import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "../../assets/noimage.webp";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative  flex items-center justify-start ml-[18%]">
      <i className="ri-search-line text-3xl text-zinc-400"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 text-xl   bg-transparent px-5 mx-6 outline-none border-none"
        type="text"
        placeholder="Search Anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className=" text-3xl text-zinc-400 ri-close-fill"
        ></i>
      )}
      {query.length > 0 && searches.length > 0 && (
        <div className="bg-zinc-200 overflow-auto w-[50%] absolute h-[50vh] ml-16 rounded top-[100%]">
          {searches.map((s, i) => (
            <Link
              key={i}
              className="hover:text-black hover:bg-zinc-300 duration-300 w-full font-semibold transition-all text-zinc-600 flex items-center justify-start p-6 border-b-2 border-zinc-100"
            >
              <img
                className="w-[9vh] h-[9vh] rounded mr-5 object-cover"
                src={
                  s.poster_path || s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/w500${s.poster_path || s.backdrop_path || s.profile_path}`
                    : noimage
                }
                alt=""
              />
              <span className="">
                {s.name || s.title || s.original_title || s.original_name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;
