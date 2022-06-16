import React from "react";
import "./Note.css";
import "../NoteStyles/reset_css.css";
import "../NoteStyles/style1.css";
import "../NoteStyles/style2.css";
import "../NoteStyles/style3.css";
import "../NoteStyles/style4.css";
import "../NoteStyles/style5.css";
import "../NoteStyles/style6.css";

type NoteProps = {
    cardstyle: number
}

export const Note: React.FC<NoteProps> = ({cardstyle}) => {
    const firstText = "This is a very important note that is worth keeping so that at the right time you do not forget about the important thing written in it.";

    return (
        <div className={"card" + cardstyle.toString() + " card"}>
            <div className={"other" + cardstyle.toString()}>
            </div>
            <div className={"note" + cardstyle.toString() + " note"}>
                <div className="info">
                    <div className="name">
                        <p><span>Note</span></p>
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
                <div className="settings">
                    <div className="edit">   
                        <div>Edit</div>
                    </div>
                    <div className="delete">
                        <div>Delete</div>
                    </div>
                </div>
            </div>
        </div>
    )
}