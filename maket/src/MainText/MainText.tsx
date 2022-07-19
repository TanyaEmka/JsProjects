import React from "react";
import "./MainText.css";
import { Description } from "../Description/Description";

export const MainText: React.FC = () => {
    return (
        <div className="main_text">
            <div className="first">Lightning fast prototyping</div>
            <div className="second">
                <Description 
                    text="Most calendars are designed for teams. Slate is designed for freelancers."
                />
            </div>
        </div>
    )
}