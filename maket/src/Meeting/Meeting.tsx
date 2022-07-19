import React from "react";
import "./Meeting.css";
import { Name } from "../Name/Name";
import { LowDescription } from "../LowDescription/LowDescription";
import { Button } from "../Button/Button";

export const Meeting: React.FC = () => {
    return (
        <div className="meeting_box">
            <div className="meeting">
                <div className="m_name">
                    <Name name="We focus on ergonomic meeting"/>
                </div>
                <div className="m_desc">
                    <div>
                        <LowDescription
                            text="Being a freelancer is a rollercoaster of emotions. We built Slate to keep your freelance business building..."
                        />
                    </div>
                    <div>
                        <LowDescription
                            text="Being a freelancer is a rollercoaster of emotions. We built Slate to keep your freelance business building..."
                        />
                    </div>
                    <div>
                        <Button buttonValue="Get Started" buttonClass="blue_button" />
                    </div>
                </div>
            </div>
        </div>
    )
}