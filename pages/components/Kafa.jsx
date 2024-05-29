import React, { useEffect, useState } from "react";
import Link from "next/link";

import axios from "axios";
// import { KafaApi } from "../singleTypes/SingleTypesApi";

import Image from 'next/image';

export default function Kafa() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const KafaApiEndpoint = process.env.KafaApi;

    const fetchData = async () => {
        try {
            const res = await axios.get(`${KafaApiEndpoint}`);
            console.log("API Response:", res.data);
            setData(res.data.data); // Access the nested 'data' property directly
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data || !data.attributes) {
        return <div>Error: Data not available</div>;
    }

    const { attributes } = data;

    return (
        <div key={data.id} className="BaslikAll">
            <div className="BaslikAll-Head">
                <div className="BaslikAll-Head-img">
                    <Image src={attributes.imgURL} alt="kafaArkaplan"/>
                </div>
                <div className="BaslikAll-Head-overlay">
                    <h1>{attributes.h1}</h1>
                    <h4>{attributes.h4}</h4>
                </div>
            </div>
            <div className="BaslikAll-Body">
                <div className="BaslikAll-Body-Left">
                    <h3>{attributes.h3}</h3>
                </div>
                <div className="BaslikAll-Body-Right">
                    <ul className="BaslikAll-Body-Right-ul">
                        <li key="1" className="BaslikAll-Body-Right-li">
                            <Link href="/" className="BaslikAll-Body-Right-link">{attributes.li1}</Link>
                        </li>
                        <li key="2" className="BaslikAll-Body-Right-li">
                            <Link href="/About" className="BaslikAll-Body-Right-link">{attributes.li2}</Link>
                        </li>
                        <li key="3" className="BaslikAll-Body-Right-li">
                            <Link href="/HotelRoomsPage" className="BaslikAll-Body-Right-link">{attributes.li3}</Link>
                        </li>
                        <li key="4" className="BaslikAll-Body-Right-li">
                            <Link href="/Cities" className="BaslikAll-Body-Right-link">{attributes.li4}</Link>
                        </li>
                        <li key="5" className="BaslikAll-Body-Right-li">
                            <Link href="/Contact" className="BaslikAll-Body-Right-link">{attributes.li5}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
