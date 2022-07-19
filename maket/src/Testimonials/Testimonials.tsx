import React, { useState } from "react";
import "./Testimonials.css";
import { Name } from "../Name/Name";
import { LowDescription } from "../LowDescription/LowDescription";
import { Button } from "../Button/Button";
import { PersonCard } from "../PersonCard/PersonCard";

export const Testimonials: React.FC = () => {

    return (
        <div className="testimonials_box">
            <img className="test1" src={require('../images/testimonials1.png')} />
            <img className="test2" src={require('../images/testimonials2.png')} />
            <div className="testimonials">
                <Name name="Testimonials" />
                <img className="ibm" src={require('../images/IBM.png')} />
                <div className="t_desc"><LowDescription text="Being a freelancer is a rollercoaster of emotions." /></div>
                <div className="t_desc"><LowDescription text="We built Slate to keep your freelance business less stressful." /></div>
                <div className="t_desc"><LowDescription text="We'd love to show you what we're building..." /></div>
                <PersonCard
                    name="Esther Webb"
                    desc="Designer"
                />
                <Button buttonValue="All Testimonials" buttonClass="blue_button" />
            </div>
        </div>
    )
}