import React from "react";
import '../styles/stylesComponents/Connection.css';

export default function Connection() {
    return(
        <>
            <div className="ConnectionHome">
                <div className="ConnectionHome-Container">
                    <div className="ConnectionHome-Container-BackgroundImg">
                        <div className="ConnectionHome-Container-BackgroundImg-Card">
                            <div className="ConnectionHome-Container-BackgroundImg-Card-Content">
                                <div className="ConnectionHome-Container-BackgroundImg-Card-Content-Div-h1">
                                    <h1 className="ConnectionHome-Container-BackgroundImg-Card-Content-h1">Contact US</h1>
                                </div>
                                <div className="ConnectionHome-Container-BackgroundImg-Card-Content-Div-span">
                                    <span className="ConnectionHome-Container-BackgroundImg-Card-Content-span">"Our priority is the comfort and satisfaction of our valued guests. If you have any questions, suggestions, or reservation requests, please feel free to contact us. Our professional and hospitable team is here to provide you with the best service possible. Throughout your stay at our hotel, you will be provided with any assistance and conveniences you may need. Additionally, feel free to reach out to us for more information about our hotel facilities, comfortable accommodations, and the exclusive services we offer. We look forward to welcoming you and providing you with an unforgettable stay."</span>
                                </div>
                                <div className="ConnectionHome-Container-BackgroundImg-Card-Content-Body">
                                    <div className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form">
                                        <div className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-Div-ul">
                                            <ul className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul">
                                                <li className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li">
                                                    <input type="text" className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li-input" name="name" id="name" placeholder="Name"/>
                                                    <input type="text" className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li-input" name="surname" id="surname" placeholder="Surname"/>
                                                </li>
                                                <li className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li">
                                                    <input type="text" className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li-input" name="phone" id="phone" placeholder="Phone"/>
                                                    <input type="text" className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li-input" name="mail" id="mail" placeholder="Mail"/>
                                                </li>
                                                <li className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li">
                                                    <input type="text" className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-ul-li-input" name="description" id="description" placeholder="Description"/>
                                                </li>
                                            </ul>
                                            <button className="ConnectionHome-Container-BackgroundImg-Card-Content-Body-Form-Div-ul-Button">SEND MESSAGE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1519001112248-fbd7b9b8df52?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="ConnectionHome-Container-BackgroundImg-img" alt="Contact-1" />
                    </div>
                </div>
            </div>
        </>
    )
}