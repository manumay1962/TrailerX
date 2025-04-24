import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true)
  document.title = "TrailerX | Trending " + category.toUpperCase();
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/${duration}?page=${page}`);
      if(data.results.length >0){

          setpage(page+1)
          settrending((prev)=>[...prev,...data.results]);
      }else{
        sethasMore(false)
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

 const refreshHandler=(()=>{
    if(trending.length === 0){
        getTrending();
    }else{
        setpage(1);
        settrending([]);
        getTrending();
    }
 })

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  
  return trending.length > 0 ? (
    <div className=" w-screen h-screen overflow-x-hidden ">
      <div className="w-full px-[6%] flex items-center justify-center">
        <i
          onClick={() => navigate(-1)}
          className="text-2xl mr-1 mt-1  font-semibold text-zinc-400 hover:text-[#6556cd] ri-arrow-left-fill"
        ></i>
        <h1 className="text-2xl text-zinc-400 font-semibold">Trending</h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["movie", "tv", "all"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
        <Dropdown
          title="Duration"
          options={["week", "day"]}
          func={(e) => setduration(e.target.value)}
        />
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        loader={<h1>loading..</h1>}
        next={getTrending}
        hasMore={hasMore}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
