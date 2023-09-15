import Link from "next/link";
import { useRouter } from "next/router";
import Loading from "./loading";


export default function MovieDetailPage({ movie }) {
    const router = useRouter()
    if(router.isFallback){
        return (
            <Loading />
        )
    }

    return (
        <div className="movie-detail-page">
            <nav >
                <div className="logo"> <img src="/images/tv.png" alt="tv logo" /> <span>MovieBox</span></div>
                <ul>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <li className="gray bold"><img src="/images/Home.png" alt="Home logo" width={28} height={28} />Home</li>
                    </Link>
                    <li className="gray bold"><img src="/images/Movie Projector.png" alt="Movie Projector logo" width={28} height={28} />Movies</li>
                    <li className="gray bold"><img src="/images/TV Show.png" alt="TV Show logo" width={28} height={28} />TV Series</li>
                    <li className="gray bold"><img src="/images/Calendar.png" alt="Calendar logo" width={28} height={28} />Upcoming</li>
                </ul>
                <div className="movie-quiz">
                    <p className="gray bold free">Play movie quizes and earn free tickets</p>
                    <p className="gray">50k people are playing now</p>
                    <button>Start playing</button>
                </div>
                <div className="gray bold logout"> <img src="/images/Logout.png" alt="Logout logo" />Logout</div>
            </nav>
            <div className="details-section">
                <div className="movie-detail-poster flex">
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                    <span>
                        <div> <img src="/images/Play.png" alt="Play button" /> </div>
                        Watch Trailer
                    </span>
                </div>
                <div className="flex extra-details">
                    <div className="flex left">
                        <div>
                            <span className="bold gray">
                                <span> {movie.title} </span>
                                 • 
                                <span> {movie.release_date} </span>
                                 • 
                                <span> {movie.runtime}m </span>
                                 </span>
                                 {movie.genres.map((genre, i) => <span key={i} className="genre"> {genre.name} </span>) }
                            
                        </div>
                        <p className="gray overview"> {movie.overview} </p>
                        <div className="movie-makers flex">
                            <span>Director : <span className="rose">Joseph Kosinski</span></span>
                            <span>Writers : <span className="rose">Jim Cash, Jack Epps Jr, Peter Craig</span></span>
                            <span>Stars : <span className="rose">Tom Cruise, Jennifer Connelly, Miles Teller</span></span>
                        </div>
                        <div className="flex top-rated-box">
                            <span className="flex content">
                                <button className="top-rated">Top rated movie #65</button>
                                <span>Awards 9 nominations</span>
                            </span>
                            <img src="/images/ExpandArrow.png" alt="ExpandArrow button" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="flex movie-star-box">
                            <img src="/images/Star.png" alt="star icon" />
                            <span><span className="gray">6.8</span><span style={{ color: '#333' }}> | 350k</span></span>
                        </div>
                        <div>
                            <span className="more-options flex">See Showtimes</span>
                            <span className="flex more-options" style={{ color: '#333', background: 'rgba(190, 18, 60, 0.10)' }}>More watch options</span>
                        </div>
                        <div className="movie-preview-image"> <img src="/images/Rectangle 37.png" alt="movies preview inages" /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export async function getStaticPaths() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWY3ZjhjMjM5MmQxZjRmNzgyOTk3M2IyNjk4ZWRlOCIsInN1YiI6IjY1MDBjODYzZGI0ZWQ2MTAzM2EyM2E1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LvT7OvgSzHf4zXmOywW4YEK7_AZ_WvuUax5gVzlPeBI",
        },
    };

    const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
    );
    const data = await response.json();
    const paths = data.results.map((result) => {
        return {
            params: { movieID: `${result.id}` },
        };
    });
    return {
        paths,
        fallback: true,
    };
}
//   getStaticProps
export async function getStaticProps(context) {
    const { params } = context;
    const { movieID } = params;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWY3ZjhjMjM5MmQxZjRmNzgyOTk3M2IyNjk4ZWRlOCIsInN1YiI6IjY1MDBjODYzZGI0ZWQ2MTAzM2EyM2E1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LvT7OvgSzHf4zXmOywW4YEK7_AZ_WvuUax5gVzlPeBI",
        },
    };

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}`,
        options
    );
    const data = await response.json();

    return {
        props: { movie: data },
    };
}

