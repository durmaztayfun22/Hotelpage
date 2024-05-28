import React from "react";
import './styles/Cities.css';
import Kafa from "./components/Kafa";
import CitiesBest from "./components/CitiesBest";
// import CarouselBody from "./components/Carousel";
import Ayak from "./components/Ayak";

export default function Cities() {
    return(
        <>
            <div className="Cities-Home">
                <Kafa />
                <CitiesBest />
                {/* <CarouselBody /> */}
                <Ayak />
            </div>
        </>
    )
}