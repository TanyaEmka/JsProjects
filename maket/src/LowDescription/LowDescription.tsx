import React from "react";
import "./LowDescription.css";

type LowDescriptionProps = {
    text: string,
    descClass?: string
}

export const LowDescription: React.FC<LowDescriptionProps> = ({text, descClass}) => {
    return (
        <p className={"low_description" + ((descClass) ? (" " + descClass) : "")}>
            {text}
        </p>
    )
}