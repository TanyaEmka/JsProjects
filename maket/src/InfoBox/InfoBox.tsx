import React from "react";
import "./InfoBox.css";
import { InfoCard } from "../InfoCard/InfoCard";

export const InfoBox: React.FC = () => {
    return (
        <div>
            <div className="f_box">
                <div className="f_info_box">
                    <div className="desc">
                        <InfoCard
                            name="OpenType features"
                            description="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
                            href="#"
                        />
                    </div>
                    <div className="pic">
                        <img src={require('../images/image1.png')} />
                    </div>
                </div>
            </div>
            <div className="s_box">
                <div className="s_info_box">
                    <div className="pic">
                        <img src={require('../images/image2.png')} />
                    </div>
                    <div className="desc">
                        <InfoCard
                            name="Variable fonts"
                            description="Most calendars are designed for teams. Slate is designed for freelancers"
                            href="#"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}