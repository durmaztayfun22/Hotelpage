import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/stylesComponents/AboutCont.css';
import { AboutContApi } from "../singleTypes/SingleTypesApi";

export default function AboutCont() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${AboutContApi}`);
            const veri = res.data;
            setData(veri.data);
            console.log(veri);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (!data || !data.attributes) {
        return <div>Loading...</div>;
    }

    return (
        <div className="AboutContainerHome">
            <div key={data.id} className="AboutContainer">
                <div className="AboutCont">
                    <div className="AboutCont-Right">
                        <div className="AboutCont-Right-Card">
                            <div className="AboutCont-Right-Card-Div">
                                <div className="AboutCont-Right-Card-Div-h3">
                                    <h3 className="AboutCont-Right-Card-h3">{data.attributes.RightH3Head}</h3>
                                </div>
                                <div className="AboutCont-Right-Card-Div-Span">
                                    <span className="AboutCont-Right-Card-Span">{data.attributes.RightSpanHead}</span>
                                </div>
                            </div>
                            <div className="AboutCont-Right-Card-Div-img">
                                <img src={data.attributes.RightImageURLHead} alt="" className="AboutCont-Right-Card-img"/>
                            </div>
                        </div>
                    </div>
                    <div className="AboutCont-Left">
                        <div className="AboutCont-Left-Card">
                            <div className="AboutCont-Left-Card-Div-img">
                                <img src={data.attributes.LeftImageURL} alt="" className="AboutCont-Left-Card-img"/>
                            </div>
                            <div className="AboutCont-Left-Card-Div">
                                <div className="AboutCont-Left-Card-Div-h3">
                                    <h3 className="AboutCont-Left-Card-h3">{data.attributes.LeftH3}</h3>
                                </div>
                                <div className="AboutCont-Left-Card-Div-Span">
                                    <span className="AboutCont-Left-Card-Div-Span">{data.attributes.LeftSpan}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="AboutCont-Right">
                        <div className="AboutCont-Right-Card">
                            <div className="AboutCont-Right-Card-Div">
                                <div className="AboutCont-Right-Card-Div-h3">
                                    <h3 className="AboutCont-Right-Card-h3">{data.attributes.RightH3Foot}</h3>
                                </div>
                                <div className="AboutCont-Right-Card-Div-Span">
                                    <span className="AboutCont-Right-Card-Div-Span">{data.attributes.RightSpanFoot}</span>
                                </div>
                            </div>
                            <div className="AboutCont-Right-Card-Div-img">
                                <img src={data.attributes.RightImageURLFoot} alt="" className="AboutCont-Right-Card-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}