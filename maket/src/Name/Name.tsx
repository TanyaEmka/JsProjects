import React from "react";
import "./Name.css";

type NameProps = {
    name: string
}

export const Name: React.FC<NameProps> = ({name}) => {
    return (
        <p className="name">{name}</p>
    )
}