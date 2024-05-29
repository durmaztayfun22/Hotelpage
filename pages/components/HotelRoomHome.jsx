import React, { useState, useEffect } from "react";
import axios from "axios";
// import { api } from './api';
// import { api } from '../api.js';
import { apiEndpoint } from "../api";
import '../styles/stylesComponents/HotelRoomHome.css';
import Image from 'next/image';

export default function HotelRoomHome() {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${apiEndpoint}`);
            const veri = await res.data;
            setData(veri);
            console.log(veri);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return(
        <>
            <div className="HotelRoomsHome">
                {data?.data?.length > 0 && data?.data?.map((item) => {
                    if (item.id == 12) {
                        return (
                            <>
                                <div className="HotelRoomsHome-Left">
                                    <div className="HotelRoomsHome-Left-Content">
                                        <div className="HotelRoomsHome-Left-Content-Title">
                                            <div className="HotelRoomsHome-Left-Content-Title-Div-h2">
                                                <h2>{item?.attributes?.Name}</h2>
                                            </div>
                                        </div>
                                        <div className="HotelRoomsHome-Left-Content-Head">
                                            <div className="HotelRoomsHome-Left-Content-Head-img">
                                                <Image src={`${item?.attributes?.Images}`} className="LeftFoto" alt="room1"/>
                                                <span>Review</span>
                                            </div>
                                        </div>
                                        <div className="HotelRoomsHome-Left-Content-Body">
                                            <div className="HotelRoomsHome-Left-Content-Body-Title">
                                                <span>{item?.attributes?.Description}</span>
                                            </div>
                                            <div className="HotelRoomsHome-Left-Content-Body-Card">
                                                <ul className="HotelRoomsHome-Left-Content-Body-Card-ul">
                                                    <li className="HotelRoomsHome-Left-Content-Body-Card-li">
                                                        <div className="HotelRoomsHome-Left-Content-Body-Card-li-Div-img">
                                                            <Image src="https://i.imgur.com/G4B8HdS.png" className="HotelRoomsHome-Left-Content-Body-Card-li-img" alt="square"/>
                                                        </div>
                                                        <div className="HotelRoomsHome-Left-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HotelRoomsHome-Left-Content-Body-Card-li-h1">{item?.attributes?.NumberSquareMetre}</h1>
                                                        </div>
                                                        <div className="HotelRoomsHome-Left-Content-Body-Card-li-Div">
                                                            <ul className="HotelRoomsHome-Left-Content-Body-Card-li-Div-ul">
                                                                <li className="HotelRoomsHome-Left-Content-Body-Card-li-Div-ul-li-1">m² width</li>
                                                                <li className="HotelRoomsHome-Left-Content-Body-Card-li-Div-ul-li-2">{item?.attributes?.RoomWidth}</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="HotelRoomsHome-Left-Content-Body-Card-li">
                                                        <div className="HotelRoomsHome-Left-Content-Body-Card-li-img">
                                                            <Image src="https://i.imgur.com/BwDsjBe.png" className="HotelRoomsHome-Left-Content-Body-Card-li-img" alt="bedroom"/>
                                                        </div>
                                                        <div className="HotelRoomsHome-Left-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HotelRoomsHome-Left-Content-Body-Card-li-h1">{item?.attributes?.NumberBedroom}</h1>
                                                        </div>
                                                        <div className="HotelRoomsHome-Left-Content-Body-Card-li-Div">
                                                            <ul className="HotelRoomsHome-Left-Content-Body-Card-li-Div-ul">
                                                                <li className="HotelRoomsHome-Left-Content-Body-Card-li-Div-ul-li-1">Bedroom</li>
                                                                <li className="HotelRoomsHome-Left-Content-Body-Card-li-Div-ul-li-2">{item?.attributes?.BedroomValue}</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="HotelRoomsHome-Left-Content-Body-Card-li">
                                                        <div className="HotelRoomsHome-Left-Content-Body-Card-li-img">
                                                            <Image src="https://i.imgur.com/5G936Gs.png" className="HotelRoomsHome-Left-Content-Body-Card-li-img" alt="bathtub"/>
                                                        </div>
                                                        <div className="HotelRoomsHome-Left-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HotelRoomsHome-Left-Content-Body-Card-li-h1">{item?.attributes?.NumberBathroom}</h1>
                                                        </div>
                                                        <div className="HotelRoomsHome-Left-Content-Body-Card-li-Div">
                                                            <ul className="HotelRoomsHome-Left-Content-Body-Card-li-Div-ul">
                                                                <li className="HotelRoomsHome-Left-Content-Body-Card-li-Div-ul-li-1">Bathroom</li>
                                                                <li className="HotelRoomsHome-Left-Content-Body-Card-li-Div-ul-li-2">{item?.attributes?.BathroomValue}</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="HotelRoomsHome-Left-Content-Body-Card-li">
                                                        <div className="HotelRoomsHome-Left-Content-Body-Card-li-img">
                                                            <Image src="https://i.imgur.com/mLOfXqg.png" className="HotelRoomsHome-Left-Content-Body-Card-li-img" alt="rating"/>
                                                        </div>
                                                        <div className="HotelRoomsHome-Left-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HotelRoomsHome-Left-Content-Body-Card-li-h1">{item?.attributes?.NumberRaiting1}/{item?.attributes.NumberRaiting2}</h1>
                                                        </div>
                                                        <div className="HotelRoomsHome-Left-Content-Body-Card-li-Div">
                                                            <ul className="HotelRoomsHome-Left-Content-Body-Card-li-Div-ul">
                                                                <li className="HotelRoomsHome-Left-Content-Body-Card-li-Div-ul-li-1">BER Rating</li>
                                                                <li className="HotelRoomsHome-Left-Content-Body-Card-li-Div-ul-li-2">Earned June 2024</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="HotelRoom-Left-Card-Subject-Rate">
                                        <div className="HotelRoom-Left-Card-Subject-Rate-Div-img">
                                            <Image src="https://i.imgur.com/patRaJD.png" className="HotelRoom-Left-Card-Subject-Rate-img" alt="fees"/>
                                        </div>
                                        <div className="HotelRoom-Left-Card-Subject-Rate-Div-span">
                                            <span className="HotelRoom-Left-Card-Subject-Rate-span">Daily Rate</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })}
                {data?.data?.length > 0 && data?.data?.map((item) => {
                    if (item.id == 4) {
                        return (
                            <>
                                <div className="HotelRoomsHome-Right">
                                    <div className="HotelRoomsHome-Right-Content">
                                        <div className="HotelRoomsHome-Right-Content-Title">
                                            <div className="HotelRoomsHome-Right-Content-Title-Div-h2">
                                                <h2>{item?.attributes?.Name}</h2>
                                            </div>
                                        </div>
                                        <div className="HotelRoomsHome-Right-Content-Head">
                                            <div className="HotelRoomsHome-Right-Content-Head-img">
                                                <Image src={`${item?.attributes?.Images}`} alt="room2"/>
                                                <span>Review</span>
                                            </div>
                                        </div>
                                        <div className="HotelRoomsHome-Right-Content-Body">
                                            <div className="HotelRoomsHome-Right-Content-Body-Title">
                                                <span>{item?.attributes?.Description}</span>
                                            </div>
                                            <div className="HotelRoomsHome-Right-Content-Body-Card">
                                                <ul className="HotelRoomsHome-Right-Content-Body-Card-ul">
                                                    <li className="HotelRoomsHome-Right-Content-Body-Card-li">
                                                        <div className="HotelRoomsHome-Right-Content-Body-Card-li-Div-img">
                                                            <Image src="https://i.imgur.com/G4B8HdS.png" className="HotelRoomsHome-Right-Content-Body-Card-li-img" alt="square"/>
                                                        </div>
                                                        <div className="HotelRoomsHome-Right-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HotelRoomsHome-Right-Content-Body-Card-li-h1">{item?.attributes?.NumberSquareMetre}</h1>
                                                        </div>
                                                        <div className="HotelRoomsHome-Right-Content-Body-Card-li-Div">
                                                            <ul className="HotelRoomsHome-Right-Content-Body-Card-li-Div-ul">
                                                                <li className="HotelRoomsHome-Right-Content-Body-Card-li-Div-ul-li-1">m² width</li>
                                                                <li className="HotelRoomsHome-Right-Content-Body-Card-li-Div-ul-li-2">{item?.attributes?.RoomWidth}</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="HotelRoomsHome-Right-Content-Body-Card-li">
                                                        <div className="HotelRoomsHome-Right-Content-Body-Card-li-Div-img">
                                                            <Image src="https://i.imgur.com/BwDsjBe.png" className="HotelRoomsHome-Right-Content-Body-Card-li-img" alt="bedroom"/>
                                                        </div>
                                                        <div className="HotelRoomsHome-Right-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HotelRoomsHome-Right-Content-Body-Card-li-h1">{item?.attributes?.NumberBedroom}</h1>
                                                        </div>
                                                        <div className="HotelRoomsHome-Right-Content-Body-Card-li-Div">
                                                            <ul className="HotelRoomsHome-Right-Content-Body-Card-li-Div-ul">
                                                                <li className="HotelRoomsHome-Right-Content-Body-Card-li-Div-ul-li-1">Bedroom</li>
                                                                <li className="HotelRoomsHome-Right-Content-Body-Card-li-Div-ul-li-2">{item?.attributes?.BedroomValue}</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="HotelRoomsHome-Right-Content-Body-Card-li">
                                                        <div className="HotelRoomsHome-Right-Content-Body-Card-li-Div-img">
                                                            <Image src="https://i.imgur.com/5G936Gs.png" className="HotelRoomsHome-Right-Content-Body-Card-li-img" alt="bathtub"/>
                                                        </div>
                                                        <div className="HotelRoomsHome-Right-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HotelRoomsHome-Right-Content-Body-Card-li-h1">{item?.attributes?.NumberBathroom}</h1>
                                                        </div>
                                                        <div className="HotelRoomsHome-Right-Content-Body-Card-li-Div">
                                                            <ul className="HotelRoomsHome-Right-Content-Body-Card-li-Div-ul">
                                                                <li className="HotelRoomsHome-Right-Content-Body-Card-li-Div-ul-li-1">Bathroom</li>
                                                                <li className="HotelRoomsHome-Right-Content-Body-Card-li-Div-ul-li-2">{item?.attributes?.BathroomValue}</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="HotelRoomsHome-Right-Content-Body-Card-li">
                                                        <div className="HotelRoomsHome-Right-Content-Body-Card-li-Div-img">
                                                            <Image src="https://i.imgur.com/mLOfXqg.png" className="HotelRoomsHome-Right-Content-Body-Card-li-img" alt="rating"/>
                                                        </div>
                                                        <div className="HotelRoomsHome-Right-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HotelRoomsHome-Right-Content-Body-Card-li-h1">{item?.attributes?.NumberRaiting1}/{item?.attributes?.NumberRaiting2}</h1>
                                                        </div>
                                                        <div className="HotelRoomsHome-Right-Content-Body-Card-li-Div">
                                                            <ul className="HotelRoomsHome-Right-Content-Body-Card-li-Div-ul">
                                                                <li className="HotelRoomsHome-Right-Content-Body-Card-li-Div-ul-li-1">BER Rating</li>
                                                                <li className="HotelRoomsHome-Right-Content-Body-Card-li-Div-ul-li-2">Earned June 2024</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="HotelRoom-Right-Card-Subject-Rate">
                                        <div className="HotelRoom-Right-Card-Subject-Rate-Div-img">
                                            <Image src="https://i.imgur.com/patRaJD.png" className="HotelRoom-Right-Card-Subject-Rate-img" alt="fees"/>
                                        </div>
                                        <div className="HotelRoom-Right-Card-Subject-Rate-Div-span">
                                            <span className="HotelRoom-Right-Card-Subject-Rate-span">Daily Rate</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })}
            </div>
        </>
    )
}