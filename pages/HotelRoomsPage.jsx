import React from "react";

import Head from 'next/head'; 
import Kafa from "./components/Kafa";
import HoliRooms from "./components/HoliRooms";

import Ayak from "./components/Ayak";

export default function HotelRoomsPage() {
    return(
        <>
            <Head></Head>
            <div className="HotelRoomsPageHome">
                <Kafa />
                <HoliRooms />
                <Ayak />
            </div>
        </>
    )
}