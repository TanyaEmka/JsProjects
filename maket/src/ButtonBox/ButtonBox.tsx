import React from "react";
import "./ButtonBox.css";
import { Button } from "../Button/Button";

type ButtonBoxProps = {
    blueButton: string,
    whiteButton: string,
    boxClass: string
}

export const ButtonBox: React.FC<ButtonBoxProps> = ({ blueButton, whiteButton, boxClass }) => {
    return (
        <div className={"buttons " + boxClass + "_buttons"}>
            <Button buttonValue={blueButton} buttonClass={((boxClass == "main") ? (boxClass + "_") : "") + "blue_button"} />
            <Button buttonValue={whiteButton} buttonClass={((boxClass == "main") ? (boxClass + "_") : "") + "white_button"} />
        </div>
    )
}