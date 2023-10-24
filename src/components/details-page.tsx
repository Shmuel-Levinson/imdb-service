export function DetailsPage(props: {movie:Movie | null}) {
    return <>
        {props.movie &&
            <div>
                <a href={`http://imdb.com/title/${props.movie.imdb_id}`}><h1> {props.movie.title}</h1></a>
                <p>{props.movie.overview}</p>
            </div>
        }
    </>
}