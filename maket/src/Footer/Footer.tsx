import React from "react";
import "./Footer.css";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";

export const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="logo_box">
                <div><Logo /></div>
                <div className="desc_text">
                    <span>Just type what's on your mind</span>
                </div>
            </div>
            <Menu menuClass="footer" />
            <div className="contacts">
                <a href="#"><img src={require('../images/twitter.png')} /></a>
                <a href="#"><img src={require('../images/facebook.png')} /></a>
                <a href="#"><img src={require('../images/in.png')} /></a>
            </div>
        </div>
    )
}