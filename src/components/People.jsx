import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Dropdown from "./templates/Dropdown";
import Topnav from "./templates/Topnav";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";

const People = () => {
    const navigate = useNavigate();
  const [category, setcategory] = useState("popular");

  const [person, setperson] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "TrailerX | Popular " + category.toUpperCase();

  const getTvshow = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setpage(page + 1);
        setperson((prev) => [...prev, ...data.results]);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (person.length === 0) {
      getTvshow();
    } else {
      setpage(1);
      setperson([]);
      getTvshow();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return person.length > 0 ? (
    <div className=" w-screen h-screen overflow-x-hidden ">
      <div className="w-full px-[6%] flex items-center justify-center">
        <i
          onClick={() => navigate(-1)}
          className="text-2xl mr-1 mt-1  font-semibold text-zinc-400 hover:text-[#6556cd] ri-arrow-left-fill"
        ></i>
        <h1 className="text-2xl text-zinc-400 font-semibold">People</h1>
        <Topnav />
        
        <div className="w-[2%]"></div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        loader={<h1>loading..</h1>}
        next={getTvshow}
        hasMore={hasMore}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}


export default People