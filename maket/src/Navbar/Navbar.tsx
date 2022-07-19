import React from "react";
import "./Navbar.css";
import { Menu } from "../Menu/Menu";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";

export const Navbar: React.FC = () => {
    return (
        <div>
            <div className="navbar">
                <Logo />
                <Menu menuClass="navbar" />
                <div className="block">
                    <Button buttonValue="Login" buttonClass="login_button" />
                    <img className="menu_pic" src={require('../images/menu.png')} />
                </div>
            </div>
        </div>
    )
}