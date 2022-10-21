import React from "react";
import Axios from "axios";
import "./Movies.css";

// const TrendingNowUrl= "http://api.themoviedb.org/3/trending/all/week?api_key=10745b8428c6f8f1733d0eac001a0469&language=en-US"


const TrendingNowUrl= "http://api.themoviedb.org/3/trending/all/week?api_key=7406fa4cc728e291b9be19c886cf80e5&language=en-US";
const myImageUrl= "https://image.tmdb.org/t/p/original";


function TrendingNow(){

    const [allMovies, setAllMovies]= React.useState([]);

    React.useEffect(function(){
        async function fetchData(){
            const output= await Axios.get(TrendingNowUrl);
            const result= output.data.results;
            setAllMovies(result);
        }

        fetchData();
    }, []);


    return ( <div>
       <h1>Trending Now</h1>
       <div className="alldiv">
            {allMovies.map(function(i){
                const imageName =i.backdrop_path
                return (
                    <div className="TrendingNowdiv">
                        <img className="TrendingNowimage" src={myImageUrl+imageName} alt="img" />
                    </div>
                )
            })}
       </div>
    </div>
    )
}
export default TrendingNow;

//https://image.tmdb.org/t/p/original
