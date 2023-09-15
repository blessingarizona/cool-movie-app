import MovieCard from "./MovieCard";


export default function MainSection({ movies }) {

    const movieArray = movies.results.slice(0, 10)
    console.log(movieArray[0]);

    return (
        <div className="main">
            <div className="title">
                <p>Featured Movie</p>
                <span>
                    see more
                    <img src="/svg/arrow.svg" alt="arrow icon" />
                </span>
            </div>
            <div className="movie-list">
                {movieArray.map(movie => {
                    return (
                        <div key={movie.id}> <MovieCard movie={movie} /> </div>
                    )
                })}
                
            </div>
        </div>
    )
}
