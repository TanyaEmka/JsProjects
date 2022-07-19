import React from "react";
import "./LearnMore.css";

type LearnMoreProps = {
    href: string
}

export const LearnMore: React.FC<LearnMoreProps> = ({href}) => {
    return (
        <p className="learn_more"><a href={href}>LEARN MORE</a></p>
    )
}