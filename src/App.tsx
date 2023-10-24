import './App.css'
import MainPage from "./components/main-page.tsx";
import {useEffect, useState} from "react";
import {fetchPopular, getMovieById, searchMovies} from "./api.ts";
import {DetailsPage} from "./components/details-page.tsx";


function App() {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
    
    const getMoviesBySearch = (searchTerm: string) => {
        searchMovies(searchTerm).then((movies) => {
            return setMovies(movies);
        })
    }

    const getPopularMovies = () => {
        fetchPopular().then((movies) => {
            return setMovies(movies);
        })
    }

    const selectMovie = (id:never) => {
        // console.log('selecting movie with id ' + id)
        getMovieById(id).then(movie => {
            console.log("!!!!!!!!!!!!!!!!!!")
            console.log(movie)
            return setSelectedMovie(movie)

        })
    }
    useEffect(() => {
        getPopularMovies()

    }, []);

    return (
        <>
            <MainPage movies={movies} getMoviesBySearch={getMoviesBySearch} selectMovie={selectMovie}/>
            {true && <DetailsPage movie={selectedMovie}/>}
        </>
    )
}

export default App
