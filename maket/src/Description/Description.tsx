import React from "react";
import "./Description.css";

type DescriptionProps = {
    text: string
}

export const Description: React.FC<DescriptionProps> = ({text}) => {
    return (
        <p className="description">
            {text}
        </p>
    )
}