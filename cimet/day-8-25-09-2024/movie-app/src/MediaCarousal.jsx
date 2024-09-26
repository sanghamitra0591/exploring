import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleMediaCard from "./SingleMediaCard";
import "../Styles/Home.css"

const MediaCarousal = ({ dayData, weekData, title }) => {
    const [toggleData, setToggleData] = useState("day");
    const baseUrl = "https://image.tmdb.org/t/p/";
    const size = "w200";
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            gap: 15,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };
    return (
        <div className="mediaCarousalWrapper">
            <div className="mediaCarousalHeader">
                <p>{title}</p>
                <div>
                    <p className={toggleData === "day" ? "selectedButton" : "unSelectedButton"} onClick={() => setToggleData("day")}>Day</p>
                    <p className={toggleData === "week" ? "selectedButton" : "unSelectedButton"} onClick={() => setToggleData("week")}>Week</p>
                </div>
            </div>
            <div className="mediaCarousalContainer">
                <Carousel responsive={responsive}>
                    {toggleData === "day"
                        ? dayData.length > 0 &&
                        dayData.map((el) => {
                            return (
                                <SingleMediaCard key={el.id} el={el} imageSrc={baseUrl + size + el.poster_path}></SingleMediaCard>
                            );
                        })
                        : weekData.length > 0 &&
                        weekData.map((el) => {
                            return (
                                <SingleMediaCard key={el.id} el={el} imageSrc={baseUrl + size + el.poster_path}></SingleMediaCard>
                            );
                        })}
                </Carousel>
            </div>
        </div >
    );
};

export default MediaCarousal;
