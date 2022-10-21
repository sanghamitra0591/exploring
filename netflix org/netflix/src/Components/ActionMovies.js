import React from "react";
import Axios from "axios";
import "./Movies.css";

const ActionMoviesUrl= `https://api.themoviedb.org/3/discover/movie/?api_key=7406fa4cc728e291b9be19c886cf80e5&with_genres=28`
const myImageUrl= "https://image.tmdb.org/t/p/original";


function ActionMovies(){

    const [allMovies, setAllMovies]= React.useState([]);

    React.useEffect(function(){
        async function fetchData(){
            const output= await Axios.get(ActionMoviesUrl);
            const result= output.data.results;
            setAllMovies(result);
        }

        fetchData();
    }, []);


    return ( <div>
       <h1>Action Movies</h1>
       <div className="alldiv">
            {allMovies.map(function(i){
                const imageName =i.backdrop_path
                return (
                    <div className="ActionMoviesdiv">
                        <img alt="img" className="ActionMoviesimage" src={myImageUrl+imageName} />
                    </div>
                )
            })}
       </div>
    </div>
    )
}
export default ActionMovies;

//https://image.tmdb.org/t/p/original
