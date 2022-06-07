import React from "react";
import "./NotesBox.css";
import { Note } from "../Note/Note";

export const NotesBox = () => {
    const styles = [1, 2, 3, 4, 5, 6];

    return (
        <div>
            <p className="notes">Notes</p>
            <div className="cards">
                {styles.map((item) => {
                    return(
                        <Note cardstyle={item} key={item} />
                    )
                })}
            </div>
            <a href="https://www.figma.com/file/aPKX4e421diHNYOpjT70BZ/Notes?node-id=0%3A1"><p className="design">{">>>"}Design</p></a>
        </div>
    )
}