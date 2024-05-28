import React from "react";
import './styles/Contact.css';
import Kafa from "./components/Kafa";
import Connection from "./components/Connection";

import Ayak from "./components/Ayak";
export default function Contact() {
    return(
        <>
            <div className="Contact-Home">
                <Kafa />
                <Connection />
                <Ayak />
            </div>
        </>
    )
}