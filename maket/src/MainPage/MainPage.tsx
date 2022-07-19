import React from "react";
import "./MainPage.css";
import { Navbar } from "../Navbar/Navbar";
import { MainText } from "../MainText/MainText";
import { ButtonBox } from "../ButtonBox/ButtonBox";

export const MainPage: React.FC = () => {
    return (
        <div className="main_page">
            <Navbar />
            <MainText />
            <ButtonBox 
                blueButton="Get Started" 
                whiteButton="Try For Free" 
                boxClass="main" 
            />
            <img className="screen" src={require('../images/screen.png')} />
        </div>
    )
}