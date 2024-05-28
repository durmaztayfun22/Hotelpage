import React from "react";
import './styles/About.css';
import Kafa from "./components/Kafa";
import WhyHoli from "./components/WhyHoli";
import AboutCont from "./components/AboutCont";
import Ayak from "./components/Ayak";

export default function About() {
    return(
        <>
            <div className="aboutpage">
                <Kafa />
                <WhyHoli/>
                <AboutCont />
                <Ayak/>
            </div>
        </>
    )
}