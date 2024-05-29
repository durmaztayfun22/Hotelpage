import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { CardApi } from '../singleTypes/SingleTypesApi';

export default function Cards() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const CardApiEndpoint = 'http://localhost:1337/api/card';

    const fetchData = async () => {
        try {
            const res = await axios.get(`${CardApiEndpoint}`);
            console.log('API Response:', res.data);
            setData(res.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };


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
        <>
            <div key={data.id} className="Cards">
                <div className="Cards-Container">
                    <div className="Cards-Container-Div-h1">
                        <h1 className="Cards-Container-h1">{attributes.h1}</h1>
                    </div>
                    <div className="Cards-Container-Div-ul">
                        <ul className="Cards-Container-ul">
                            <li className="Cards-Container-ul-li">
                                <div className="Cards-Container-ul-li-Div-img">
                                    <Image
                                        src={attributes.img1}
                                        alt="plane"
                                        width={100}
                                        height={100}
                                        className="Cards-Container-ul-li-img"
                                    />
                                </div>
                                <div className="Cards-Container-ul-li-Div-h3">
                                    <h3 className="Cards-Container-ul-li-h3">{attributes.h3Body1}</h3>
                                </div>
                                <div className="Cards-Container-ul-li-Div-span">
                                    <span className="Cards-Container-ul-li-span">{attributes.span1Body1}</span>
                                </div>
                            </li>
                            <li className="Cards-Container-ul-li">
                                <div className="Cards-Container-ul-li-Div-img">
                                    <Image
                                        src={attributes.img2}
                                        alt="sun-lounger"
                                        width={100}
                                        height={100}
                                        className="Cards-Container-ul-li-img"
                                    />
                                </div>
                                <div className="Cards-Container-ul-li-Div-h3">
                                    <h3 className="Cards-Container-ul-li-h3">{attributes.h3Head2}</h3>
                                </div>
                                <div className="Cards-Container-ul-li-Div-span">
                                    <span className="Cards-Container-ul-li-span">{attributes.span2Body2}</span>
                                </div>
                            </li>
                            <li className="Cards-Container-ul-li">
                                <div className="Cards-Container-ul-li-Div-img">
                                    <Image
                                        src={attributes.img3}
                                        alt="cocktail"
                                        width={100}
                                        height={100}
                                        className="Cards-Container-ul-li-img"
                                    />
                                </div>
                                <div className="Cards-Container-ul-li-Div-h3">
                                    <h3 className="Cards-Container-ul-li-h3">{attributes.h3Body3}</h3>
                                </div>
                                <div className="Cards-Container-ul-li-Div-span">
                                    <span className="Cards-Container-ul-li-span">{attributes.span3Body3}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
