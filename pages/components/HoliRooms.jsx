import React, {useEffect, useState} from "react";
import axios from "axios";

import Image from 'next/image';

export default function HoliRooms() {

    const [data, setData] = useState([]);

    const apiEndpoint = 'http://localhost:1337/api/hotels';

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
            <div className="HoliRoomsHome">
                {data?.data?.length > 0 && data?.data?.map((item) => {
                    if ([1,5,7,9,11,13,15,17].includes(item.id)) {
                        return(
                            <>
                                <div className="HoliRoomsHome-Left">
                                    <div className="HoliRoomsHome-Left-Content">
                                        <div className="HoliRoomsHome-Left-Content-Title">
                                            <div className="HoliRoomsHome-Left-Content-Title-Div-h2">
                                                <h2>{item?.attributes?.Name}</h2>
                                            </div>
                                        </div>
                                        <div className="HoliRoomsHome-Left-Content-Head">
                                            <div className="HoliRoomsHome-Left-Content-Head-img">
                                                <Image src={`${item?.attributes?.Images}`} width={450} height={300} className="LeftFoto" alt="room1"/>
                                                <span>Review</span>
                                            </div>
                                        </div>
                                        <div className="HoliRoomsHome-Left-Content-Body">
                                            <div className="HoliRoomsHome-Left-Content-Body-Title">
                                                <span>{item?.attributes?.Description}</span>
                                            </div>
                                            <div className="HoliRoomsHome-Left-Content-Body-Card">
                                                <ul className="HoliRoomsHome-Left-Content-Body-Card-ul">
                                                    <li className="HoliRoomsHome-Left-Content-Body-Card-li">
                                                        <div className="HoliRoomsHome-Left-Content-Body-Card-li-Div-img">
                                                            <Image src="https://i.imgur.com/G4B8HdS.png" width={70} height={70} className="HoliRoomsHome-Left-Content-Body-Card-li-img" alt="square"/>
                                                        </div>
                                                        <div className="HoliRoomsHome-Left-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HoliRoomsHome-Left-Content-Body-Card-li-h1">{item?.attributes?.NumberSquareMetre}</h1>
                                                        </div>
                                                        <div className="HoliRoomsHome-Left-Content-Body-Card-li-Div">
                                                            <ul className="HoliRoomsHome-Left-Content-Body-Card-li-Div-ul">
                                                                <li className="HoliRoomsHome-Left-Content-Body-Card-li-Div-ul-li-1">m² width</li>
                                                                <li className="HoliRoomsHome-Left-Content-Body-Card-li-Div-ul-li-2">{item?.attributes?.RoomWidth}</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="HoliRoomsHome-Left-Content-Body-Card-li">
                                                        <div className="HoliRoomsHome-Left-Content-Body-Card-li-img">
                                                            <Image src="https://i.imgur.com/BwDsjBe.png" width={70} height={70} className="HoliRoomsHome-Left-Content-Body-Card-li-img" alt="bedroom"/>
                                                        </div>
                                                        <div className="HoliRoomsHome-Left-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HoliRoomsHome-Left-Content-Body-Card-li-h1">{item?.attributes?.NumberBedroom}</h1>
                                                        </div>
                                                        <div className="HoliRoomsHome-Left-Content-Body-Card-li-Div">
                                                            <ul className="HoliRoomsHome-Left-Content-Body-Card-li-Div-ul">
                                                                <li className="HoliRoomsHome-Left-Content-Body-Card-li-Div-ul-li-1">Bedroom</li>
                                                                <li className="HoliRoomsHome-Left-Content-Body-Card-li-Div-ul-li-2">{item?.attributes?.BedroomValue}</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="HoliRoomsHome-Left-Content-Body-Card-li">
                                                        <div className="HoliRoomsHome-Left-Content-Body-Card-li-img">
                                                            <Image src="https://i.imgur.com/5G936Gs.png" width={70} height={70} className="HoliRoomsHome-Left-Content-Body-Card-li-img" alt="bathtub"/>
                                                        </div>
                                                        <div className="HoliRoomsHome-Left-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HoliRoomsHome-Left-Content-Body-Card-li-h1">{item?.attributes?.NumberBathroom}</h1>
                                                        </div>
                                                        <div className="HoliRoomsHome-Left-Content-Body-Card-li-Div">
                                                            <ul className="HoliRoomsHome-Left-Content-Body-Card-li-Div-ul">
                                                                <li className="HoliRoomsHome-Left-Content-Body-Card-li-Div-ul-li-1">Bathroom</li>
                                                                <li className="HoliRoomsHome-Left-Content-Body-Card-li-Div-ul-li-2">{item?.attributes?.BathroomValue}</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="HoliRoomsHome-Left-Content-Body-Card-li">
                                                        <div className="HoliRoomsHome-Left-Content-Body-Card-li-img">
                                                            <Image src="https://i.imgur.com/mLOfXqg.png" width={70} height={70} className="HoliRoomsHome-Left-Content-Body-Card-li-img" alt="rating"/>
                                                        </div>
                                                        <div className="HoliRoomsHome-Left-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HoliRoomsHome-Left-Content-Body-Card-li-h1">{item?.attributes?.NumberRaiting1}/{item?.attributes.NumberRaiting2}</h1>
                                                        </div>
                                                        <div className="HoliRoomsHome-Left-Content-Body-Card-li-Div">
                                                            <ul className="HoliRoomsHome-Left-Content-Body-Card-li-Div-ul">
                                                                <li className="HoliRoomsHome-Left-Content-Body-Card-li-Div-ul-li-1">BER Rating</li>
                                                                <li className="HoliRoomsHome-Left-Content-Body-Card-li-Div-ul-li-2">Earned June 2024</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="HoliRoomsHome-Left-Card-Subject-Rate">
                                        <div className="HoliRoomsHome-Left-Card-Subject-Rate-Div-img">
                                            <Image src="https://i.imgur.com/patRaJD.png" width={40} height={40} className="HoliRoomsHome-Left-Card-Subject-Rate-img" alt="fees"/>
                                        </div>
                                        <div className="HoliRoomsHome-Left-Card-Subject-Rate-Div-span">
                                            <span className="HoliRoomsHome-Left-Card-Subject-Rate-span">Daily Rate</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }


                    if ([4,6,8,10,12,14,16,18].includes(item.id)) {
                        return (
                            <>
                                <div className="HoliRoomsHome-Right">
                                    <div className="HoliRoomsHome-Right-Content">
                                        <div className="HoliRoomsHome-Right-Content-Title">
                                            <div className="HoliRoomsHome-Right-Content-Title-Div-h2">
                                                <h2>{item?.attributes?.Name}</h2>
                                            </div>
                                        </div>
                                        <div className="HoliRoomsHome-Right-Content-Head">
                                            <div className="HoliRoomsHome-Right-Content-Head-img">
                                                <Image src={`${item?.attributes?.Images}`} width={450} height={300} alt="room2"></Image>
                                                <span>Review</span>
                                            </div>
                                        </div>
                                        <div className="HoliRoomsHome-Right-Content-Body">
                                            <div className="HoliRoomsHome-Right-Content-Body-Title">
                                                <span>{item?.attributes?.Description}</span>
                                            </div>
                                            <div className="HoliRoomsHome-Right-Content-Body-Card">
                                                <ul className="HoliRoomsHome-Right-Content-Body-Card-ul">
                                                    <li className="HoliRoomsHome-Right-Content-Body-Card-li">
                                                        <div className="HoliRoomsHome-Right-Content-Body-Card-li-Div-img">
                                                            <Image src="https://i.imgur.com/G4B8HdS.png" width={70} height={70} className="HoliRoomsHome-Right-Content-Body-Card-li-img" alt="square"></Image>
                                                        </div>
                                                        <div className="HoliRoomsHome-Right-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HoliRoomsHome-Right-Content-Body-Card-li-h1">{item?.attributes?.NumberSquareMetre}</h1>
                                                        </div>
                                                        <div className="HoliRoomsHome-Right-Content-Body-Card-li-Div">
                                                            <ul className="HoliRoomsHome-Right-Content-Body-Card-li-Div-ul">
                                                                <li className="HoliRoomsHome-Right-Content-Body-Card-li-Div-ul-li-1">m² width</li>
                                                                <li className="HoliRoomsHome-Right-Content-Body-Card-li-Div-ul-li-2">{item?.attributes?.RoomWidth}</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="HoliRoomsHome-Right-Content-Body-Card-li">
                                                        <div className="HoliRoomsHome-Right-Content-Body-Card-li-Div-img">
                                                            <Image src="https://i.imgur.com/BwDsjBe.png" width={70} height={70} className="HoliRoomsHome-Right-Content-Body-Card-li-img" alt="bedroom"></Image>
                                                        </div>
                                                        <div className="HoliRoomsHome-Right-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HoliRoomsHome-Right-Content-Body-Card-li-h1">{item?.attributes?.NumberBedroom}</h1>
                                                        </div>
                                                        <div className="HoliRoomsHome-Right-Content-Body-Card-li-Div">
                                                            <ul className="HoliRoomsHome-Right-Content-Body-Card-li-Div-ul">
                                                                <li className="HoliRoomsHome-Right-Content-Body-Card-li-Div-ul-li-1">Bedroom</li>
                                                                <li className="HoliRoomsHome-Right-Content-Body-Card-li-Div-ul-li-2">{item?.attributes?.BedroomValue}</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="HoliRoomsHome-Right-Content-Body-Card-li">
                                                        <div className="HoliRoomsHome-Right-Content-Body-Card-li-Div-img">
                                                            <Image src="https://i.imgur.com/5G936Gs.png" width={70} height={70} className="HoliRoomsHome-Right-Content-Body-Card-li-img" alt="bathtub"></Image>
                                                        </div>
                                                        <div className="HoliRoomsHome-Right-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HoliRoomsHome-Right-Content-Body-Card-li-h1">{item?.attributes?.NumberBathroom}</h1>
                                                        </div>
                                                        <div className="HoliRoomsHome-Right-Content-Body-Card-li-Div">
                                                            <ul className="HoliRoomsHome-Right-Content-Body-Card-li-Div-ul">
                                                                <li className="HoliRoomsHome-Right-Content-Body-Card-li-Div-ul-li-1">Bathroom</li>
                                                                <li className="HoliRoomsHome-Right-Content-Body-Card-li-Div-ul-li-2">{item?.attributes?.BathroomValue}</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="HoliRoomsHome-Right-Content-Body-Card-li">
                                                        <div className="HoliRoomsHome-Right-Content-Body-Card-li-Div-img">
                                                            <Image src="https://i.imgur.com/mLOfXqg.png" width={70} height={70} className="HoliRoomsHome-Right-Content-Body-Card-li-img" alt="rating"></Image>
                                                        </div>
                                                        <div className="HoliRoomsHome-Right-Content-Body-Card-li-Div-h1">
                                                            <h1 className="HoliRoomsHome-Right-Content-Body-Card-li-h1">{item?.attributes?.NumberRaiting1}/{item?.attributes?.NumberRaiting2}</h1>
                                                        </div>
                                                        <div className="HoliRoomsHome-Right-Content-Body-Card-li-Div">
                                                            <ul className="HoliRoomsHome-Right-Content-Body-Card-li-Div-ul">
                                                                <li className="HoliRoomsHome-Right-Content-Body-Card-li-Div-ul-li-1">BER Rating</li>
                                                                <li className="HoliRoomsHome-Right-Content-Body-Card-li-Div-ul-li-2">Earned June 2024</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="HoliRoomsHome-Right-Card-Subject-Rate">
                                        <div className="HoliRoomsHome-Right-Card-Subject-Rate-Div-img">
                                            <Image src="https://i.imgur.com/patRaJD.png" width={40} height={40} className="HoliRoomsHome-Right-Card-Subject-Rate-img" alt="fees"></Image>
                                        </div>
                                        <div className="HoliRoomsHome-Right-Card-Subject-Rate-Div-span">
                                            <span className="HoliRoomsHome-Right-Card-Subject-Rate-span">Daily Rate</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }

                    return null
                })}
            </div>
        </>
    )
}