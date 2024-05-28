import React from "react";
import './styles/index.css';
import Kafa from './components/Kafa';
import HotelRoomHome from "./components/HotelRoomHome";
import Cards from "./components/Cards";
import HotelSelectionHome from "./components/HotelSelectionHome";
import Ayak from "./components/Ayak";

export default function App() {
    return (
        <>
            <div className="homepage">
                <Kafa />
                <HotelRoomHome />
                <Cards />
                <HotelSelectionHome />
                <Ayak/>
            </div>
        </>
    )
}
