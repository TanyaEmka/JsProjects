import React from "react";
import "./SecondPage.css";
import { ButtonBox } from "../ButtonBox/ButtonBox";
import { Description } from "../Description/Description";
import { Heading } from "../Heading/Heading";

export const SecondPage: React.FC = () => {
    return (
        <div className="second_page">
            <div>
                <p className="yellow_text">Just type</p>
                <div className="f_heading"><Heading text="Fastest way to navigate" /></div>
                <div className="second">
                    <Description
                        text="Most calendars are designed for teams. Slate is designed for freelancers."
                    />
                </div>
            </div>
            <ButtonBox blueButton="Download" whiteButton="See Walkthrough" boxClass="second" />
        </div>
    )
}