import { useContext, useEffect } from "react";
import { MediaContext } from "../Context/MediaContext";
import SingleMediaCard from "../Components/SingleMediaCard";
import "../Styles/TvShows.css"

const TvShows = () => {
    const baseUrl = "https://image.tmdb.org/t/p/";
    const size = "w200";
    const {
        allTvShows,
        setPageTVShows,
        hasMoreTVShows,
        loading
    } = useContext(MediaContext);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight && hasMoreTVShows) {
            setPageTVShows(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasMoreTVShows]);

    if (loading) {
        return <div>Loading TV Shows...</div>;
    }

    if (allTvShows.length === 0) {
        return <div>No TV Shows found.</div>;
    }

    return (
        <div className="tvShowsWrapper">
            <div className="filterContainer">
                <p>Explore TV Shows</p>
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
            <div className="tvShowsContainer">
                {allTvShows.map(el => (
                    <SingleMediaCard key={el.id} el={el} imageSrc={baseUrl + size + el.poster_path} />
                ))}
            </div>
            {hasMoreTVShows && <div>Loading more TV Shows...</div>}
        </div>
    );
};

export default TvShows;