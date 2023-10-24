import {ChangeEvent, useState} from "react";
function MainPage(props: { movies: Movie[]; getMoviesBySearch: Function, selectMovie: Function }) {
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
        console.log(searchTerm)
    }
    const moviesList: Movie[] = props.movies
    const [searchTerm, setSearchTerm] = useState<string>("");
    return (
        <>
            <input type={"text"} onChange={(event) => handleSearch(event)}/>
            <button onClick={() => props.getMoviesBySearch(searchTerm)}>Search</button>
            <div>
                {moviesList.map(movie => <div key={movie.id} onClick={()=>props.selectMovie(movie.id)}><a>{movie.title}</a></div>)}
            </div>
        </>
    );

}

export default MainPage;