import React from "react";
import Axios from "axios";
import "./Movies.css";

const HorrorMoviesUrl= `https://api.themoviedb.org/3/discover/movie/?api_key=7406fa4cc728e291b9be19c886cf80e5&with_genres=27`
const myImageUrl= "https://image.tmdb.org/t/p/original";


function HorrorMovies(){

    const [allMovies, setAllMovies]= React.useState([]);

    React.useEffect(function(){
        async function fetchData(){
            const output= await Axios.get(HorrorMoviesUrl);
            const result= output.data.results;
            setAllMovies(result);
        }

        fetchData();
    }, []);


    return ( <div>
       <h1>Horror Movies</h1>
       <div className="alldiv">
            {allMovies.map(function(i){
                const imageName =i.backdrop_path
                return (
                    <div className="HorrorMoviesdiv">
                        <img  className="HorrorMoviesimage" src={myImageUrl+imageName} />
                    </div>
                )
            })}
       </div>
    </div>
    )
}
export default HorrorMovies;

//https://image.tmdb.org/t/p/original
