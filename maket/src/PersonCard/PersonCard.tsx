import React from "react";
import "./PersonCard.css";

type PersonCardProps = {
    name: string,
    desc: string
}

export const PersonCard: React.FC<PersonCardProps> = ({name, desc}) => {
    return (
        <div className="person_card">
            <div className="avatar">
                <img src={require('../images/avatar.png')} />
            </div>
            <div className="info">
                <p className="p_name">{name}</p>
                <p className="p_desc">{desc}</p>
            </div>
        </div>
    )
}