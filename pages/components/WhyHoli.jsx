import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from 'next/image';

export default function WhyHoli() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const whyHoliApiEndpoint = 'https://st2-x0kh.onrender.com/api/whyholi';

    const fetchData = async () => {
        try {
            const res = await axios.get(whyHoliApiEndpoint);
            console.log("API Response:", res.data);
            setData(res.data.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (!data || !data.attributes) {
        return <div>Error: Data not available</div>;
    }

    const { attributes } = data;

    return(
        <div key={data.id} className="whyholi">
            <div className="whyholi-Container">
                <div className="whyholi-Container-Div-img remove-on-small">
                    <Image src={attributes.img1} width={720} height={900} className="whyholi-Container-img" alt="womansunbathing"/>
                </div>
                <div className="whyholi-Container-Content">
                    <div className="whyholi-Container-Content-Div-h3">
                        <h3 className="whyholi-Container-Content-h3">{attributes.h3}</h3>
                    </div>
                    <div className="whyholi-Container-Div-ul">
                        <ul className="whyholi-Container-ul">
                            <li className="whyholi-Container-ul-li">{attributes.li1}</li>
                            <li className="whyholi-Container-ul-li">{attributes.li2}</li>
                            <li className="whyholi-Container-ul-li">{attributes.li3}</li>
                            <li className="whyholi-Container-ul-li">{attributes.li4}</li>
                            <li className="whyholi-Container-ul-li">{attributes.li5}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
