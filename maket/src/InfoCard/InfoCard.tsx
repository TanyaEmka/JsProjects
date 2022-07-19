import React from "react";
import { Description } from "../Description/Description";
import {LearnMore} from "../LearnMore/LearnMore";
import { Name } from "../Name/Name";

type InfoCardProps = {
    name: string,
    description: string,
    href: string
}

export const InfoCard: React.FC<InfoCardProps> = ({name, description, href }) => {
    return (
        <div className="info_card">
            <Name name={name} />
            <Description
                text={description}
            />
            <LearnMore href={href} />
        </div>
    )
}