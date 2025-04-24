import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Dropdown from "./templates/Dropdown";
import Topnav from "./templates/Topnav";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";

const Movie = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");

  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "TrailerX | Popular " + category.toUpperCase();

  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setpage(page + 1);
        setmovie((prev) => [...prev, ...data.results]);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (movie.length === 0) {
      getMovie();
    } else {
      setpage(1);
      setmovie([]);
      getMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return movie.length > 0 ? (
    <div className=" w-screen h-screen  ">
      <div className="w-full px-[6%] flex items-center justify-center">
        <i
          onClick={() => navigate(-1)}
          className="text-2xl mr-1 mt-1  font-semibold text-zinc-400 hover:text-[#6556cd] ri-arrow-left-fill"
        ></i>
        <h1 className="text-2xl text-zinc-400 font-semibold">Movies</h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["top_rated", "popular","upcoming","now_playing"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        loader={<h1>loading..</h1>}
        next={getMovie}
        hasMore={hasMore}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Movie;
