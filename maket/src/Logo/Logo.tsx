import React from "react";
import "./Logo.css";

export const Logo: React.FC = () => {
    return (
        <div className="figma_pic">
            <img src={require('../images/figma_pic.png')}/>
        </div>
    )
}