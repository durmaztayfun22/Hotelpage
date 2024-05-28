import React, { use, useEffect, useState } from "react";
import '../styles/stylesComponents/CitiesBest.css';

import { citiesbestApi } from "../singleTypes/SingleTypesApi";
import axios from "axios";

export default function CitiesBest() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${citiesbestApi}`);
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
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (!data || !data.attributes) {
        return <div>Error: Data not available</div>;
    }

    const { attributes } = data;

    return(
        <>
            <div key={data.id} className="CitiesBestHome">
                <div className="CitiesBestHome-Container">
                    <div className="CitiesBestHome-Container-Div-h3">
                        <h3 className="CitiesBestHome-Container-h3">{attributes.h3}</h3>
                    </div>
                    <div className="CitiesBestHome-Container-Div-ul">
                        <ul className="CitiesBestHome-Container-ul">
                            <li className="CitiesBestHome-Container-ul-li">
                                <div className="CitiesBestHome-Container-ul-li-Card">
                                    <div className="CitiesBestHome-Container-ul-li-Card-img" style={{ backgroundImage: `url(${attributes.img1})` }}></div>
                                    <div className="CitiesBestHome-Container-ul-li-Card-Div-span">
                                        <span className="CitiesBestHome-Container-ul-li-Card-span">{attributes.span1}</span>
                                    </div>
                                </div>
                            </li>
                            <li className="CitiesBestHome-Container-ul-li">
                                <div className="CitiesBestHome-Container-ul-li-Card">
                                    <div className="CitiesBestHome-Container-ul-li-Card-img" style={{ backgroundImage: `url(${attributes.img2})` }}></div>
                                    <div className="CitiesBestHome-Container-ul-li-Card-Div-span">
                                        <span className="CitiesBestHome-Container-ul-li-Card-span">{attributes.span2}</span>
                                    </div>
                                </div>
                            </li>
                            <li className="CitiesBestHome-Container-ul-li">
                                <div className="CitiesBestHome-Container-ul-li-Card">
                                    <div className="CitiesBestHome-Container-ul-li-Card-img" style={{ backgroundImage: `url(${attributes.img3})` }}></div>
                                    <div className="CitiesBestHome-Container-ul-li-Card-Div-span">
                                        <span className="CitiesBestHome-Container-ul-li-Card-span">{attributes.span3}</span>
                                    </div>
                                </div>
                            </li>
                            <li className="CitiesBestHome-Container-ul-li">
                                <div className="CitiesBestHome-Container-ul-li-Card">
                                    <div className="CitiesBestHome-Container-ul-li-Card-img" style={{ backgroundImage: `url(${attributes.img4})` }}></div>
                                    <div className="CitiesBestHome-Container-ul-li-Card-Div-span">
                                        <span className="CitiesBestHome-Container-ul-li-Card-span">{attributes.span4}</span>
                                    </div>
                                </div>
                            </li>
                            <li className="CitiesBestHome-Container-ul-li">
                                <div className="CitiesBestHome-Container-ul-li-Card">
                                    <div className="CitiesBestHome-Container-ul-li-Card-img" style={{ backgroundImage: `url(${attributes.img5})` }}></div>
                                    <div className="CitiesBestHome-Container-ul-li-Card-Div-span">
                                        <span className="CitiesBestHome-Container-ul-li-Card-span">{attributes.span5}</span>
                                    </div>
                                </div>
                            </li>
                            <li className="CitiesBestHome-Container-ul-li">
                                <div className="CitiesBestHome-Container-ul-li-Card">
                                    <div className="CitiesBestHome-Container-ul-li-Card-img" style={{ backgroundImage: `url(${attributes.img6})` }}></div>
                                    <div className="CitiesBestHome-Container-ul-li-Card-Div-span">
                                        <span className="CitiesBestHome-Container-ul-li-Card-span">{attributes.span6}</span>
                                    </div>
                                </div>
                            </li>
                            <li className="CitiesBestHome-Container-ul-li">
                                <div className="CitiesBestHome-Container-ul-li-Card">
                                    <div className="CitiesBestHome-Container-ul-li-Card-img" style={{ backgroundImage: `url(${attributes.img7})` }}></div>
                                    <div className="CitiesBestHome-Container-ul-li-Card-Div-span">
                                        <span className="CitiesBestHome-Container-ul-li-Card-span">{attributes.span7}</span>
                                    </div>
                                </div>
                            </li>
                            <li className="CitiesBestHome-Container-ul-li">
                                <div className="CitiesBestHome-Container-ul-li-Card">
                                    <div className="CitiesBestHome-Container-ul-li-Card-img" style={{ backgroundImage: `url(${attributes.img8})` }}></div>
                                    <div className="CitiesBestHome-Container-ul-li-Card-Div-span">
                                        <span className="CitiesBestHome-Container-ul-li-Card-span">{attributes.span8}</span>
                                    </div>
                                </div>
                            </li>
                            <li className="CitiesBestHome-Container-ul-li">
                                <div className="CitiesBestHome-Container-ul-li-Card">
                                    <div className="CitiesBestHome-Container-ul-li-Card-img" style={{ backgroundImage: `url(${attributes.img9})` }}></div>
                                    <div className="CitiesBestHome-Container-ul-li-Card-Div-span">
                                        <span className="CitiesBestHome-Container-ul-li-Card-span">{attributes.span9}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}