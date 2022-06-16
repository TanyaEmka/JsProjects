import React from "react";
import "./Edit.css";

export const Edit = () => {
    return (
        <div className="edit_box">
            <div className="edit_name">
                <input type="text" value="Note" />
            </div>
            <div className="edit_text">
                <textarea className="edit_text">
                    This is a very important note that is worth keeping so that at the right time you do not forget about the important thing written in it.
                </textarea>
            </div>
            <div className="settings">
                <div className="clear">
                    <p>Clear</p>
                </div>
                <div className="delete">
                    <p>Delete</p>
                </div>
            </div>
        </div>
    );
}