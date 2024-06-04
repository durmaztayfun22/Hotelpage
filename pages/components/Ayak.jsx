import React, { useEffect, useState } from "react";

import Link from "next/link";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faInstagramSquare, faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faHouseChimney, faEnvelope, faPhone, faFax } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
    faFacebookSquare: faFacebookSquare,
    faTwitterSquare: faTwitterSquare,
    faInstagramSquare: faInstagramSquare,
    faLinkedin: faLinkedin,
    faGithubSquare: faGithubSquare,
    faHouseChimney: faHouseChimney,
    faEnvelope: faEnvelope,
    faPhone: faPhone,
    faFax: faFax,
};

// import { AyakApi } from "../singleTypes/SingleTypesApi";


export default function Ayak() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const AyakApiEndpoint = 'https://st2-x0kh.onrender.com/api/ayak';

    const fetchData = async () => {
        try {
            const res = await axios.get(`${AyakApiEndpoint}`);
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
        return <div>Loading...</div>;
    }

    if (!data || !data.attributes) {
        return <div>Error: Data not available</div>;
    }

    const { attributes } = data;

    return(
        <>
            <div key={data.id} className="Foots">
                <div className="Foots-Container">
                    <div className="Foots-Container-Head">
                        <div className="Foots-Container-Head-body">
                            <div className="Foots-Container-Head-body-Left">
                                <span className="Foots-Container-Head-body-Left-span">{attributes.spanHead}</span>
                            </div>
                            <div className="Foots-Container-Head-body-Right">
                                <ul className="Foots-Container-Head-body-Right-ul">
                                    <li className="Foots-Container-Head-body-Right-ul-li">
                                        <a href={attributes.Ahref1}>
                                            <FontAwesomeIcon icon={iconMap[attributes.faceIcon]} style={{ color: 'white', fontSize: '24px' }} />
                                        </a>
                                    </li>
                                    <li className="Foots-Container-Head-body-Right-ul-li">
                                        <a href={attributes.Ahref2}>
                                            <FontAwesomeIcon icon={iconMap[attributes.TwitIcon]} style={{ color: 'white', fontSize: '24px' }} />
                                        </a>
                                    </li>
                                    <li className="Foots-Container-Head-body-Right-ul-li">
                                        <a href={attributes.Ahref3}>
                                            <FontAwesomeIcon icon={iconMap[attributes.InstaIcon]} style={{ color: 'white', fontSize: '24px' }} />
                                        </a>
                                    </li>
                                    <li className="Foots-Container-Head-body-Right-ul-li">
                                        <a href={attributes.Ahref4}>
                                            <FontAwesomeIcon icon={iconMap[attributes.LinkIcon]} style={{ color: 'white', fontSize: '24px' }} />
                                        </a>
                                    </li>
                                    <li className="Foots-Container-Head-body-Right-ul-li">
                                        <a href={attributes.Ahref5}>
                                            <FontAwesomeIcon icon={iconMap[attributes.GitIcon]} style={{ color: 'white', fontSize: '24px' }} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Foots-Container-Body">
                        <div className="Foots-Container-Body-boddy">
                            <div className="Foots-Container-Body-boddy-content-1">
                                <div className="Foots-Container-Body-boddy-content-1-Div-h3">
                                    <h3 className="Foots-Container-Body-boddy-content-1-h3">{attributes.h3}</h3>
                                </div>
                                <div className="Foots-Container-Body-boddy-content-1-Div-span">
                                    <span className="Foots-Container-Body-boddy-content-1-span">{attributes.spanBody}</span>
                                </div>
                            </div>
                            <div className="Foots-Container-Body-boddy-content-2">
                                <div className="Foots-Container-Body-boddy-content-2-Div-h3">
                                    <h3 className="Foots-Container-Body-boddy-content-2-h3">{attributes.h3Body}</h3>
                                </div>
                                <div className="Foots-Container-Body-boddy-content-2-Div-ul">
                                    <ul className="Foots-Container-Body-boddy-content-2-ul">
                                        <li className="Foots-Container-Body-boddy-content-2-ul-li"><Link href="/">{attributes.li1}</Link></li>
                                        <li className="Foots-Container-Body-boddy-content-2-ul-li"><Link href="/About">{attributes.li2}</Link></li>
                                        <li className="Foots-Container-Body-boddy-content-2-ul-li"><Link href="/HotelRooms">{attributes.li3}</Link></li>
                                        <li className="Foots-Container-Body-boddy-content-2-ul-li"><Link href="/Cities">{attributes.li4}</Link></li>
                                        <li className="Foots-Container-Body-boddy-content-2-ul-li"><Link href="/Contact">{attributes.li5}</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Foots-Container-Body-boddy-content-3">
                                <div className="Foots-Container-Body-boddy-content-3-Div-h3">
                                    <h3 className="Foots-Container-Body-boddy-content-3-h3">{attributes.h3Body2}</h3>
                                </div>
                                <div className="Foots-Container-Body-boddy-content-3-Div-ul">
                                    <ul className="Foots-Container-Body-boddy-content-3-ul">
                                        <li className="Foots-Container-Body-boddy-content-3-ul-li">{attributes.li1Body2}</li>
                                        <li className="Foots-Container-Body-boddy-content-3-ul-li">{attributes.li2Body2}</li>
                                        <li className="Foots-Container-Body-boddy-content-3-ul-li">{attributes.li3Body2}</li>
                                        <li className="Foots-Container-Body-boddy-content-3-ul-li">{attributes.li4Body2}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Foots-Container-Body-boddy-content-4">
                                <div className="Foots-Container-Body-boddy-content-4-Div-h3">
                                    <h3 className="Foots-Container-Body-boddy-content-4-h3">{attributes.h3Body3}</h3>
                                </div>
                                <div className="Foots-Container-Body-boddy-content-4-Div-ul">
                                    <ul className="Foots-Container-Body-boddy-content-4-ul">
                                        <li className="Foots-Container-Body-boddy-content-4-ul-li"><FontAwesomeIcon icon={iconMap[attributes.HomeIcon]} /> {attributes.li1Body4}</li>
                                        <li className="Foots-Container-Body-boddy-content-4-ul-li"><FontAwesomeIcon icon={iconMap[attributes.mailIcon]} /> {attributes.li2Body4}</li>
                                        <li className="Foots-Container-Body-boddy-content-4-ul-li"><FontAwesomeIcon icon={iconMap[attributes.PhoneIcon]} />{attributes.li3Body4}</li>
                                        <li className="Foots-Container-Body-boddy-content-4-ul-li"><FontAwesomeIcon icon={iconMap[attributes.faxIcon]} />{attributes.li4Body4}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Foots-Container-Foot">
                        <div className="Foots-Container-Foot-body">
                            <div className="Foots-Container-Foot-body-Div-p">
                                <p>{attributes.p}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}