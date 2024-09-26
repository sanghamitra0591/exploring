import { createContext, useEffect, useState } from "react";

export const MediaContext = createContext();

const apiKey = "7406fa4cc728e291b9be19c886cf80e5";

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

function MediaContextProvider({ children }) {
    const [pageMovies, setPageMovies] = useState(1);
    const [pageTVShows, setPageTVShows] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [banner, setBanner] = useState("");
    const [popularDay, setPopularDay] = useState([]);
    const [popularWeek, setPopularWeek] = useState([]);
    const [trendingDay, setTrendingDay] = useState([]);
    const [trendingWeek, setTrendingWeek] = useState([]);
    const [topRatedDay, setTopRatedDay] = useState([]);
    const [topRatedWeek, setTopRatedWeek] = useState([]);
    const [allMovies, setAllMovies] = useState([]);
    const [allTvShows, setAllTvShows] = useState([]);
    const [hasMoreMovies, setHasMoreMovies] = useState(true);
    const [hasMoreTVShows, setHasMoreTVShows] = useState(true);

    const getData = async (mediaType, pageNum) => {
        try {
            const popularMovies = await fetchData(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`);
            setPopularDay(popularMovies.results.slice(0, 10));
            setPopularWeek(popularMovies.results.slice(10, 20));

            const topRatedMovies = await fetchData(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`);
            setTopRatedDay(topRatedMovies.results.slice(0, 10));
            setTopRatedWeek(topRatedMovies.results.slice(10, 20));

            const trendingMovies = await fetchData(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=1`);
            setTrendingDay(trendingMovies.results.slice(0, 10));
            setTrendingWeek(trendingMovies.results.slice(10, 20));

            const mediaData = await fetchData(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=${apiKey}&page=${pageNum}`);
            if (mediaType === 'movie') {
                setAllMovies((prev) => [...prev, ...mediaData.results]);
                setHasMoreMovies(mediaData.results.length > 0);
            } else {
                setAllTvShows((prev) => [...prev, ...mediaData.results]);
                setHasMoreTVShows(mediaData.results.length > 0);
            }


            const randomIndex = Math.floor(Math.random() * popularMovies.results.length);
            const randomMovieId = popularMovies.results[randomIndex].id;
            const movieDetails = await fetchData(`https://api.themoviedb.org/3/movie/${randomMovieId}?api_key=${apiKey}`);
            setBanner(movieDetails);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching media data:", error);
            setError(true);
        }
    };

    useEffect(() => {
        getData('movie', pageMovies);
        getData('tv', pageTVShows);
    }, [pageMovies, pageTVShows]);

    return (
        <MediaContext.Provider value={{
            pageMovies,
            setPageMovies,
            pageTVShows,
            setPageTVShows,
            hasMoreMovies,
            hasMoreTVShows,
            loading,
            error,
            banner,
            popularDay,
            popularWeek,
            trendingDay,
            trendingWeek,
            topRatedDay,
            topRatedWeek,
            allMovies,
            allTvShows
        }}>
            {children}
        </MediaContext.Provider>
    );
}

export default MediaContextProvider;