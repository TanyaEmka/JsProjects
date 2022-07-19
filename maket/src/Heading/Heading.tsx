import React from "react";
import "./Heading.css";

type HeadingProps = {
    text: string
}

export const Heading: React.FC<HeadingProps> = ({text}) => {
    return (
        <p className="heading">{text}</p>
    )
}