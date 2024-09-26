import { useContext, useEffect } from "react";
import { MediaContext } from "../Context/MediaContext";
import SingleMediaCard from "../Components/SingleMediaCard";
import "../Styles/Movies.css"

const Movies = () => {
    const baseUrl = "https://image.tmdb.org/t/p/";
    const size = "w200";
    const {
        allMovies,
        setPageMovies,
        hasMoreMovies,
        loading
    } = useContext(MediaContext);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight && hasMoreMovies) {
            setPageMovies(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasMoreMovies]);

    if (loading) {
        return <div>Loading movies...</div>;
    }

    if (allMovies.length === 0) {
        return <div>No movies found.</div>;
    }

    return (
        <div className="movieWrapper">
            <div className="filterContainer">
                <p>Explore Movies</p>
                <div>
                    <select name="" id="">
                        <option value="">Select Genres</option>
                        <option value="">Action</option>
                        <option value="">Adventure</option>
                        <option value="">Comedy</option>
                        <option value="">Crime</option>
                    </select>
                    <select name="" id="">
                        <option value="">Sort By</option>
                        <option value="">Popularity: Low to High</option>
                        <option value="">Popularity: High to Low</option>
                    </select>
                </div>
            </div>
            <div className="movieContainer">
                {allMovies.map(el => (
                    <SingleMediaCard key={el.id} el={el} imageSrc={baseUrl + size + el.poster_path} />
                ))}
            </div>
            {hasMoreMovies && <div>Loading more movies...</div>}
        </div>
    );
};

export default Movies;