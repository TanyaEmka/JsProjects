import React from "react";
import "./ThirdPage.css";
import { Heading } from "../Heading/Heading";
import { Button } from "../Button/Button";
import { LowDescription } from "../LowDescription/LowDescription";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export const ThirdPage: React.FC = () => {
    return (
        <div className="third_page">
            <div className="t_desc">
                <Heading text="A rethink of how we work" />
                <LowDescription
                    text="Being a freelancer is a rollercoaster of emotions. We built Slate to keep your"
                />
            </div>
            <div className="progress_box">
                <ProgressBar
                    name="Facebook"
                    percent={50}
                    max_value={72}
                />
            </div>
            <div>
                <Button buttonValue="Get Started For Free" buttonClass="blue_button" />
            </div>
        </div>
    )
}