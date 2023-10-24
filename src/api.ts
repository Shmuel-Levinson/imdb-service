import axios from "axios";


const getSearchUrl = (searchTerm: string) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`;
    return url
}

const getFetchhPopularUrl = () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    return url
}

const getFetchMovieByIdUrl = (id: never) => {
    const url=`https://api.themoviedb.org/3/movie/${id}?api_key=2c581ff65dbe9562e37b2ab16767e367`
    return url
}


// const url = 'https://api.themoviedb.org/3/search/movie?query=mind&include_adult=false&language=en-US&page=1';
const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzU4MWZmNjVkYmU5NTYyZTM3YjJhYjE2NzY3ZTM2NyIsInN1YiI6IjY1Mzc5NDIxMWY3NDhiMDBjNmYyZWRlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KTP6kAQS7Aja8OuizV7mdlGVfnfAPH0YGO3WXbq-_2c'
}

export const searchMovies = async (searchTerm: string): Promise<Movie[]> => {
    try {
        // console.log("searching "+ searchTerm)
        const response = await axios.get(getSearchUrl(searchTerm), {headers});
        return response.data.results as Movie[];
    } catch (error) {
        throw new Error('An error occurred while fetching the data.');
    }
};

export const fetchPopular = async (): Promise<Movie[]> => {
    try {

        const response = await axios.get(getFetchhPopularUrl(), {headers});
        return response.data.results as Movie[];
    } catch (error) {
        throw new Error('An error occurred while fetching the data.');
    }
};

export const getMovieById =
async (id: never) => {
    try {
        const response = await axios.get(getFetchMovieByIdUrl(id), {headers});
        console.log(response)
        return {id:response.data.id, title: response.data.original_title, overview: response.data.overview, imdb_id: response.data.imdb_id} as Movie;
    } catch (error) {
        throw new Error('An error occurred while fetching the data.');
    }
};






