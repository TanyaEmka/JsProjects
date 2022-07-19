import React from "react";
import "./Menu.css";

type MenuProps = {
    menuClass: string
}

export const Menu: React.FC<MenuProps> = ({menuClass}) => {
    return (
        <div className={"menu " + "menu_" + menuClass}>
            <div><p>Home</p></div>
            <div><p>Product</p></div>
            <div><p>About</p></div>
            <div className="last"><p>Contact</p></div>
        </div>
    )
}