import React, {useEffect, useState} from "react";
import '../styles/stylesComponents/HotelSelectionHome.css';
import axios from "axios";
// import { HotelSelecetionHomeApi } from "../singleTypes/SingleTypesApi";
import Image from 'next/image';

export default function HotelSelectionHome() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const HotelSelecetionHomeApiEndpoint = process.env.HotelSelecetionHomeApi;

    const fetchData = async () => {
        try {
            const res = await axios.get(`${HotelSelecetionHomeApiEndpoint}`);
            console.log("API Response:", res.data);
            setData(res.data.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();


        const handleScroll = () => {
            const element = document.querySelector('.HotelSelectionHome-Container-Body-Cards');
            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight && elementPosition >= 0) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on initial load
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data || !data.attributes) {
        return <div>Error: Data not available</div>;
    }

    const { attributes } = data;

    return (
        <>
            <div key={data.id} className="HotelSelectionHome">
                <div className="HotelSelectionHome-Container">
                    <div className="HotelSelectionHome-Container-Div-h1">
                        <h1 className="HotelSelectionHome-Container-h1">{attributes.h1}</h1>
                    </div>
                    <div className="HotelSelectionHome-Container-Body">
                        <div className="HotelSelectionHome-Container-Body-Cards">
                            <div className="HotelSelectionHome-Container-Body-Cards-1">
                                <div className="HotelSelectionHome-Container-Body-Cards-1-Subject">
                                    <div className="HotelSelectionHome-Container-Body-Cards-1-Subject-Div-img">
                                        <Image src={attributes.img1} alt="hotel-1" className="HotelSelectionHome-Container-Body-Cards-1-Subject-img"/>
                                    </div>
                                    <div className="HotelSelectionHome-Container-Body-Cards-1-Subject-Div-span">
                                        <span className="HotelSelectionHome-Container-Body-Cards-1-Subject-span">{attributes.span1}</span>
                                    </div>
                                </div>
                                <div className="HotelSelectionHome-Container-Body-Cards-1-Subject">
                                    <div className="HotelSelectionHome-Container-Body-Cards-1-Subject-Div-img">
                                        <Image src={attributes.img2} alt="hotel-2" className="HotelSelectionHome-Container-Body-Cards-1-Subject-img"/>
                                    </div>
                                    <div className="HotelSelectionHome-Container-Body-Cards-1-Subject-Div-span">
                                        <span className="HotelSelectionHome-Container-Body-Cards-1-Subject-span">{attributes.span2}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="HotelSelectionHome-Container-Body-Cards-2">
                                <div className="HotelSelectionHome-Container-Body-Cards-2-Subject">
                                    <div className="HotelSelectionHome-Container-Body-Cards-2-Subject-Div-img">
                                        <Image src={attributes.img3} alt="hotel-3" className="HotelSelectionHome-Container-Body-Cards-2-Subject-img"/>
                                    </div>
                                    <div className="HotelSelectionHome-Container-Body-Cards-2-Subject-Div-span">
                                        <span className="HotelSelectionHome-Container-Body-Cards-2-Subject-span">{attributes.span3}</span>
                                    </div>
                                </div>
                                <div className="HotelSelectionHome-Container-Body-Cards-2-Subject">
                                    <div className="HotelSelectionHome-Container-Body-Cards-2-Subject-Div-img">
                                        <Image src={attributes.img4} alt="hotel-4" className="HotelSelectionHome-Container-Body-Cards-2-Subject-img"/>
                                    </div>
                                    <div className="HotelSelectionHome-Container-Body-Cards-2-Subject-Div-span">
                                        <span className="HotelSelectionHome-Container-Body-Cards-2-Subject-span">{attributes.span4}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}