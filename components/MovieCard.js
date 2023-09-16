import Link from "next/link";


export default function MovieCard({ movie }) {
    const percentage_vote = (movie.vote_average / 10) * 100
    return (
        <>
            <Link href={`/${movie.id}`} style={{textDecoration: 'none'}}>

                <div className="movie-card" data-testid:movie-card>
                    <div className="movie-poster" data-testid:movie-poster>
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                    </div>
                    <p className="gray" data-testid:movie-release-date> {movie.release_date.slice(0, 4)} </p>
                    <p className="movie-card-title" data-testid:movie-title> {movie.title} </p>
                    <div className="movie-likes" >
                        <span className=""> <img src="/images/imdb.png" alt="imdb logo" /> {movie.vote_average} / {movie.vote_count} </span>
                        <span> <img src="/images/orange.png" alt="orange logo" /> {Math.ceil(percentage_vote)}%</span>
                    </div>
                    <p className="gray"> Action Adventure</p>
                </div>
            </Link>

        </>

    )
}
