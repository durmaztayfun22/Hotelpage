import React from "react";

import Head from 'next/head'; 
import Kafa from "./components/Kafa";
import CitiesBest from "./components/CitiesBest";
// import CarouselBody from "./components/Carousel";
import Ayak from "./components/Ayak";

export default function Cities() {
    return(
        <>
            <Head>
                
            </Head>
            <div className="Cities-Home">
                <Kafa />
                <CitiesBest />
                {/* <CarouselBody /> */}
                <Ayak />
            </div>
        </>
    )
}