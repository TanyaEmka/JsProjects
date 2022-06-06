import React from "react";
import "./NotesBox.css";
import { Note } from "../Note/Note";

export const NotesBox = () => {
    return (
        <div>
            <p className="notes">Notes</p>
            <div className="cards">
                <Note index={1} />
                <Note index={2} />
                <Note index={3} />
                <Note index={4} />
                <Note index={5} />
                <Note index={6} />
            </div>
            <a href="https://www.figma.com/file/aPKX4e421diHNYOpjT70BZ/Notes?node-id=0%3A1"><p className="design">{">>>"}Design</p></a>
        </div>
    )
}