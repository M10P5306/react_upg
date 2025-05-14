import React, { useState } from "react";
import "./Movie_form.css"

type Props = {
addMovie: (title: string, grade: number) => void
}

function Movie_form({addMovie}: Props) {

    const [title, setTitle] = useState<string>("");
    const [grade, setGrade] = useState<number>(0);

    const form_result = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (title === "") {
            alert("Title is required");
            return;
        }
        if (grade <= 0) {
            alert("Grade is required");
            return;
        }

        addMovie(title, grade);

        setTitle('');
        setGrade(0);
    }

    return (
        <form onSubmit={form_result}>
            <label>Titel:</label>
            <input type="text" id="titel" placeholder="Titel här..." value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}/>
            <br></br>
            <label>Betyg:</label>
            <select id="rating-field" value={grade} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setGrade(Number(e.target.value))}>
                <option>Välj betyg:</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Movie_form;