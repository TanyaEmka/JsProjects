import React from "react";
import "./Button.css";

type ButtonProps = {
    buttonValue: string,
    buttonClass: string
}

export const Button: React.FC<ButtonProps> = ({ buttonValue, buttonClass }) => {
    return (
        <div className={"button " + buttonClass}>
            <input type="button" value={buttonValue} />
        </div>
    )
}