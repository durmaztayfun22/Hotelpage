import React from "react";
import './styles/HotelRoomsPage.css';
import Kafa from "./components/Kafa";
import HoliRooms from "./components/HoliRooms";

import Ayak from "./components/Ayak";

export default function HotelRoomsPage() {
    return(
        <>
            <div className="HotelRoomsPageHome">
                <Kafa />
                <HoliRooms />
                <Ayak />
            </div>
        </>
    )
}