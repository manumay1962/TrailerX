import React, { useEffect } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import Loader from "./Loader";
import Horizontal from "./templates/Horizontal";

const Tvdetails = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.tv);
  console.log(info);
  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-screen px-[10%] overflow-auto pb-10 "
    >
      {/* Part 1 navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 font-xl ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] text-2xl ri-arrow-left-line"
        ></Link>{" "}
        <a target="_blank" href={info.detail.homepage}>
          <i className="text-2xl ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="text-2xl ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* Part 2 Poster and details */}

      <div className="w-full flex text-white">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover  "
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] ">
          <h1 className="text-5xl font-black ">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}

            <small className="text-2xl font-bold text-zinc-300 ">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-3 mb-5 flex items-center gap-x-3 ">
            <span className=" bg-yellow-600 text-xl font-semibold rounded-full text-white w-[7vh] h-[7vh] flex justify-center items-center ">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="w-[60px] font-semibold tetx-2xl leading-6 ">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>

          <h1 className="text-2xl mb-3 mt-5 ">Overview</h1>
          <p>{info.detail.overview}</p>

          <h1 className="text-2xl mb-3 mt-5 ">Movie Translated</h1>
          <p className="mb-10">{info.translations.join(", ")}</p>

          <Link
            className=" p-5 bg-[#6556cd] rounded-lg "
            to={`${pathname}/trailer`}
          >
            {" "}
            <i className="text-xl mr-3 ri-play-fill"></i> Play Trailer
          </Link>
        </div>
      </div>

      {/* Part 3 Available on Platforms */}
      <div className="w-[80%] flex flex-col gap-y-5 mt-10 ">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Plateforms</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Buy</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available to Rent</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
      {/* Part 4 Seasons */}

      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500 " />

      <h1 className=" text-2xl font-bold text-white">Seasons</h1>
      <div className="w-[100%] flex overflow-y-hidden mb-5 p-5 ">
        {info.detail.seasons.length > 0 ? (
          info.detail.seasons.map((s, i) => (
            <div className="w-[15vh] m-[6%] hover:scale-105 ">
              <img
                className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] overflow-hidden rounded min-w-[14vw] h-[38vh] object-contain  "
                src={`https://image.tmdb.org/t/p/original/${
                  s.poster_path || s.backdrop_path
                }`}
                alt=""
              />
              <h1 className=" text-2xl text-zinc-200 mt-3 font-semibold">
                {s.name}
              </h1>
            </div>
          ))
        ) : (
          <h1 className="text-3xl mt-5 text-white font-black text-center">
            Nothing to Show
          </h1>
        )}

        {/* <HorizontalCards data={info.detail.seasons} /> */}
      </div>

      {/* Part  Recommendations and Similar Stuff */}

      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500 " />

      <h1 className=" text-2xl font-bold text-white">
        Recommendations & Similar stuff
      </h1>
      <Horizontal
        data={
          info.recommendations && info.recommendations.length > 0
            ? info.recommendations
            : info.similar && info.similar.length > 0
            ? info.similar
            : []
        }
      />

      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};

export default Tvdetails;
