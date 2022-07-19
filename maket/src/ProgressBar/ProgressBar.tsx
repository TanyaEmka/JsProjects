import React from "react";
import "./ProgressBar.css";
import { useState } from "react";

type ProgressBarProps = {
    name: string,
    percent: number,
    max_value: number 
}

export const ProgressBar: React.FC<ProgressBarProps> = ({name, percent, max_value}) => {
    const divStyle = {
        width: percent.toString() + "%"
    }
    const [PBStyle, setPBStyle] = useState(divStyle);
    const [currPercent, setPercent] = useState(percent);
    const [pValue, setPValue] = useState((Math.round(max_value * currPercent / 100 * 100) / 100));
    const [roundValue, setRoundValue] = useState(pValue);

    const progressBarClick = (e: React.MouseEvent<HTMLElement>) => {
        const currentTargetRect = e.currentTarget.getBoundingClientRect();
        const x = e.pageX - currentTargetRect.left;
        const width = (window.innerWidth - currentTargetRect.left * 2) * (60/64);
        let new_percent = x / width * 100;
        if (new_percent > 100)
            new_percent = 100;
        if (new_percent < 2)
            new_percent = 2;
        setPercent(Number(new_percent));
        setPValue((Math.round(max_value * currPercent / 100 * 100) / 100));
        if (pValue < 0.000)
            setRoundValue(0.000)
        else
            setRoundValue(pValue);
        setPBStyle({width: new_percent.toString() + "%"});
    }

    return (
        <div className="progress">
            <div 
                className="help_progress_bar"
                onClick={progressBarClick}
                onMouseMove={progressBarClick}
            >
            </div>
            <div 
                className="progress_bar" 
                id="progress_bar"
            >
                <div 
                    className="value" 
                    id="value"
                    style={PBStyle}
                >
                </div>
            </div>
            <div className="sign">
                <div>{name}</div>
                <div className="p_value">{roundValue}</div>
            </div>
        </div>
    )
}