import Search from "./Search";


export default function Header() {
    return (
        <div className="header">
            <nav className="nav">
                <div className="homepage-logo">
                    <img src="/images/Logo.png" alt="logo icon" />
                </div>
                <img className="television" src="/images/tv.png" alt="television" />
                <Search />
                <div className="sign-in">
                    Sign in
                    <span className="rose-circle"><img src="/svg/menu.svg" alt="menu icon" /></span>

                </div>
            </nav>
            <div className="hero-detail">
                <h1>John Wick 3 : Parabellum</h1>
                <span >
                    <span className="span"> <img src="/images/imdb.png" alt="imdb logo" /> 88.0 / 100 </span>
                    <span> <img src="/images/orange.png" alt="orange logo" /> 97%</span>
                </span>
                <p className="overview">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                <button> <img src="/svg/play.svg" alt="play icon" /> WATCH TRAILER</button>
            </div>
        </div>
    )
}
