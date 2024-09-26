import { useContext, useState } from "react";
import "../Styles/Home.css";
import { MediaContext } from "../Context/MediaContext";
import MediaCarousal from "../Components/MediaCarousal";

const Home = () => {
  const { banner, trendingDay, trendingWeek, popularDay, popularWeek, topRatedDay, topRatedWeek } = useContext(MediaContext);
  const [searchInput, setSearchInput] = useState("");
  const baseUrl = "https://image.tmdb.org/t/p/";
  const size = "original";
  const bannerImage = baseUrl + size + banner.backdrop_path;

  const handleInput = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="HomeWrapper">
      <div className="bannerDiv" style={{
        backgroundImage: `url(${bannerImage})`
      }}
      >
        <div>
          <h1>Welcome.</h1>
          <h3> Millions of movies, TV shows and people to discover. Explore now. </h3>
          <div>
            <input value={searchInput} onKeyDown={((e) => handleInput(e))} type="text" placeholder="Search for a movie or TV show...." />
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className="contentDiv">
        <MediaCarousal dayData={trendingDay} weekData={trendingWeek} title="Trending" />
        <MediaCarousal dayData={popularDay} weekData={popularWeek} title="Popular" />
        <MediaCarousal dayData={topRatedDay} weekData={topRatedWeek} title="Top Rated" />
      </div>
    </div>
  );
};

export default Home;