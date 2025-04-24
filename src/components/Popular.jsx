import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Dropdown from "./templates/Dropdown";
import Topnav from "./templates/Topnav";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";

const Popular = () => {
  
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "TrailerX | Popular " + category.toUpperCase();

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setpage(page + 1);
        setpopular((prev) => [...prev, ...data.results]);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setpage(1);
      setpopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return popular.length > 0 ? (
    <div className=" w-screen h-screen overflow-x-hidden ">
      <div className="w-full px-[6%] flex items-center justify-center">
        <i
          onClick={() => navigate(-1)}
          className="text-2xl mr-1 mt-1  font-semibold text-zinc-400 hover:text-[#6556cd] ri-arrow-left-fill"
        ></i>
        <h1 className="text-2xl text-zinc-400 font-semibold">Popular</h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["movie", "tv"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
       
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        loader={<h1>loading..</h1>}
        next={getPopular}
        hasMore={hasMore}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Popular;
