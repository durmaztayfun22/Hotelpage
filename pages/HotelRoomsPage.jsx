import React from "react";
import './styles/HotelRoomsPage.css';
import Head from 'next/head'; 
import Kafa from "./components/Kafa";
import HoliRooms from "./components/HoliRooms";

import Ayak from "./components/Ayak";

export default function HotelRoomsPage() {
    return(
        <>
            <Head>
                <Kafa />
            </Head>
            <div className="HotelRoomsPageHome">
                <HoliRooms />
                <Ayak />
            </div>
        </>
    )
}