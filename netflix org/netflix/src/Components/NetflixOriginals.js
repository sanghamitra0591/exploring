import React from "react"
import Axios from "axios"
import "./Movies.css"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const netflixOriginals= `https://api.themoviedb.org/3/discover/tv/?api_key=7406fa4cc728e291b9be19c886cf80e5&with_network=123`
const myImageUrl= "https://image.tmdb.org/t/p/original";


function NetflixOriginals(){

    const [allMovies, setAllMovies]= React.useState([]);
    const [id, setId]= React.useState("");

    React.useEffect(function(){
        async function fetchData(){
            const output= await Axios.get(netflixOriginals);
            const result= output.data.results;
            setAllMovies(result);
        }

        fetchData();
    }, []);

    function playTheTrailer(data){
        movieTrailer(data.name || "")
        .then(function(output){
            const search= new URLSearchParams(new URL(output).search);
            setId(search.get("v"));
        })
        .catch(function(){

        })
    }

    const myOptions={
        height: "600px",
        width: "100%"
    }


    return ( <div>
       <h1>Netflix Originals</h1>
       <div className="alldiv">
            {allMovies.map(function(i){
                const imageName =i.backdrop_path
                return (
                    <div className="netflixOriginaldiv">
                        <img  className="netflixOriginalimage" alt="img" src={myImageUrl+imageName} onClick={function(){
                            playTheTrailer(i);
                        }}/>
                    </div>
                )
            })}
       </div>
       {id && <YouTube videoId={id} opts={myOptions} />}
    </div>
    )
}
export default NetflixOriginals;

//https://image.tmdb.org/t/p/original
