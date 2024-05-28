import React from "react";
import './styles/index.css';
import Head from 'next/head'; 
import Kafa from './components/Kafa';
import HotelRoomHome from "./components/HotelRoomHome";
import Cards from "./components/Cards";
import HotelSelectionHome from "./components/HotelSelectionHome";
import Ayak from "./components/Ayak";

export default function App() {
    return (
        <>
            <Head>
                <Kafa />
            </Head>
            <div className="homepage">
                
                <HotelRoomHome />
                <Cards />
                <HotelSelectionHome />
                <Ayak/>
            </div>
        </>
    )
}

