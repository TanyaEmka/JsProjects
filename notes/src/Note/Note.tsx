import React from "react";
import "./Note.css";
import "../NoteStyles/reset_css.css"
import "../NoteStyles/style1.css";
import "../NoteStyles/style3.css";

type NoteProps = {
    index: number
}

export const Note: React.FC<NoteProps> = ({index}) => {
    const firstText = "This is a very important note that is worth keeping so that at the right time you do not forget about the important thing written in it.";

    return (
        <div className={"card" + index.toString() + " card"}>
            <div className={"note" + index.toString() + " note"}>
                <div className="info">
                    <div className="name">
                        <p>Note</p>
                    </div>
                    <div className="text">
                        <p>
                            {firstText}
                        </p>
                    </div>
                    <div className="data">
                        <p>00.00.0000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}