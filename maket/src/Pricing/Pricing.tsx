import React from "react";
import "./Pricing.css";
import { Heading } from "../Heading/Heading";
import { LowDescription } from "../LowDescription/LowDescription";
import { Button } from "../Button/Button";

export const Pricing: React.FC = () => {
    return (
        <div className="pricing_box">
            <div className="pricing">
                <div className="left_box">
                    <Heading text="Pricing" />
                    <LowDescription
                        descClass="white"
                        text="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
                    />
                </div>
                <div className="right_box">
                    <div>
                        <LowDescription
                            descClass="white"
                            text="30-DAY FREE TRIAL"
                        />
                    </div>
                    <div className="user_price">
                        <div className="price">$5</div>
                        <div className="info">
                            <div>/month per</div>
                            <div>user</div>
                        </div>
                    </div>
                    <div>
                        <LowDescription
                            descClass="white"
                            text="Most calendars are designed for teams."
                        />
                    </div>
                    <div>
                        <Button buttonValue="Get Started" buttonClass="main_blue_button" />
                    </div>
                </div>
            </div>
        </div>
    )
}