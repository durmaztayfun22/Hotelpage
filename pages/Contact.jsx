import React from "react";

import Head from 'next/head'; 
import Kafa from "./components/Kafa";
import Connection from "./components/Connection";

import Ayak from "./components/Ayak";
export default function Contact() {
    return(
        <>
            <Head></Head>
            <div className="Contact-Home">
                <Kafa />
                <Connection />
                <Ayak />
            </div>
        </>
    )
}