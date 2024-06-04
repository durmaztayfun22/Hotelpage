import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// import { connectionApi } from '../singleTypes/SingleTypesApi';
import axios from 'axios';

export default function Connection() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const connectionApiEndpoint = 'https://st2-x0kh.onrender.com/api/connection';


    const fetchData = async () => {
        try {
            const res = await axios.get(`${connectionApiEndpoint}`);
            console.log("API Response : ", res.data);
            setData(res.data.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching Data : ", error);
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
        return <div>Error: Data not available</div>
    }

    const { attributes } = data;

    return (
        <>
            <div key={data.id} className="ConnectionHome">
                <div className="ConnectionHome-Container">
                    <div className="ConnectionHome-Container-BackgroundImg">
                        <div className="ConnectionHome-Container-BackgroundImg-Card">
                            <div className="ConnectionHome-Container-BackgroundImg-Card-Content">
                                <div className="ConnectionHome-Container-BackgroundImg-Card-Content-Div-h1">
                                    <h1 className="ConnectionHome-Container-BackgroundImg-Card-Content-h1">{attributes.h1}</h1>
                                </div>
                                <div className="ConnectionHome-Container-BackgroundImg-Card-Content-Div-span">
                                <span className="ConnectionHome-Container-BackgroundImg-Card-Content-span">{attributes.span}</span>
                                </div>
                                <div className="ConnectionHome-Container-BackgroundImg-Card-Content-Body">
                                    <div className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form">
                                        <div className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-Div-ul">
                                            <ul className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul">
                                                <li className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li">
                                                    <input type="text" className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li-input" name="name" id="name" placeholder="Name" />
                                                    <input type="text" className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li-input" name="surname" id="surname" placeholder="Surname" />
                                                </li>
                                                <li className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li">
                                                    <input type="text" className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li-input" name="phone" id="phone" placeholder="Phone" />
                                                    <input type="text" className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li-input" name="mail" id="mail" placeholder="Mail" />
                                                </li>
                                                <li className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li">
                                                    <input type="text" className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li-input" name="description" id="description" placeholder="Description" />
                                                </li>
                                            </ul>
                                            <button className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-Div-ul-Button">{attributes.button}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ConnectionHome-Container-BackgroundImg-img">
                            <Image
                                src="https://images.unsplash.com/photo-1519001112248-fbd7b9b8df52?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Contact-1"
                                className="ConnectionHome-Container-BackgroundImg-img"
                                width={1500}
                                height={950}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
