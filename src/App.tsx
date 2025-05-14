import Header from './components/Header.tsx'
import Movie_form from './components/Movie_form.tsx'
import Movie_list from "./components/Movie_list.tsx";
import Midder from "./components/Midder.tsx";
import './App.css'
import {useState} from "react";

type Movie = {
    title: string,
    grade: number;
};

function App() {

    const [movies, setMovies] = useState<Movie[]>([])

    const addMovie = function(title: string, grade: number) {
        const movie: Movie = {
            title, grade
        };
        setMovies(movies => movies.concat(movie));
    };

    const deleteMovie = function(index: number) {
        setMovies(prevMovies => prevMovies.filter((_,i) => i !== index));
    }

    return (
        <>
            <Header/>
            <Movie_form addMovie = {addMovie}/>
            <Midder/>
            <Movie_list movies = {movies} deleteMovie = {deleteMovie} setMovies = {setMovies}/>
        </>
    )
}

export default App
