import React from "react";
import './styles/Contact.css';
import Head from 'next/head'; 
import Kafa from "./components/Kafa";
import Connection from "./components/Connection";

import Ayak from "./components/Ayak";
export default function Contact() {
    return(
        <>
            <Head>
                <Kafa />
            </Head>
            <div className="Contact-Home">
                <Connection />
                <Ayak />
            </div>
        </>
    )
}