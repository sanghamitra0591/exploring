import React from "react";
import Axios from "axios";
import "./Movies.css";

const TrendingNowUrl= "http://api.themoviedb.org/3/trending/all/week?api_key=7406fa4cc728e291b9be19c886cf80e5&language=en-US";
const myImageUrl= "https://image.tmdb.org/t/p/original";

 function Main(){
    const [allMovies, setAllMovies]= React.useState([]);

    React.useEffect(function(){
        async function fetchData(){
            const output= await Axios.get(TrendingNowUrl);
            const result= output.data.results;
            setAllMovies(result[Math.floor(Math.random()*20)]);
        }

        fetchData();
    }, []);
    return ( 
        <div>
            <img className="myLargeImage" src={myImageUrl + allMovies.backdrop_path} />
            <h2>{allMovies.title}</h2>
            <p>{allMovies.overview}</p>
            <button></button>
            <button></button>
        </div>
     )
 }
 export default Main;