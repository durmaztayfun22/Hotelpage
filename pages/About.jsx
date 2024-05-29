import React from "react";

import Head from 'next/head'; 
import Kafa from "./components/Kafa";
import WhyHoli from "./components/WhyHoli";
import AboutCont from "./components/AboutCont";
import Ayak from "./components/Ayak";

export default function About() {
    return(
        <>
            <Head>
            </Head>
            <div className="aboutpage">
                <Kafa />
                <WhyHoli/>
                <AboutCont />
                <Ayak/>
            </div>
        </>
    )
}