import "./Movie_list.css"
import React from "react";

type Movie = {
    title: string,
    grade: number
}

type MovieParams = {
    movies: Movie[],
    deleteMovie: (index: number) => void
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>
}

function Movie_list({movies, deleteMovie, setMovies}: MovieParams) {

    const sortMovieList = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.id === "alphabetical") {
            setMovies([...movies].sort((x, y) => x.title.toLowerCase() > y.title.toLowerCase() ? 1 : -1));
        } else if (e.currentTarget.id === "grade") {
            setMovies([...movies].sort((x, y) => y.grade - x.grade))
        }
    }

    return (
        <>
            <ul>
                {movies.map((movie: Movie, index: number) => {
                    const rating = []
                    for (let i = 0; i < movie.grade; i++) {
                        rating.push(<img key={i} src="/assets/star.png" alt="star"/>)
                    }

                    return (<li key={index} id="movie-list">
                        {movie.title}
                        <div>{rating}
                            <button onClick={() => deleteMovie(index)}><img src="/assets/delete.png" alt="delete"
                                                                            id="delete-button"/></button>
                        </div>
                    </li>);
                })}
            </ul>
            <br/>
            <div>
                <button id="alphabetical" onClick={sortMovieList}>Alphabetisk ordning</button>
                <button id="grade" onClick={sortMovieList}>Betygsordning</button>
            </div>
        </>

    );
}

export default Movie_list;