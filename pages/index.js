import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";

export default function Index({ movies }) {

    return (
        <>
            <div>
                <Header />
                <MainSection movies={movies} />
                <Footer />
            </div>
        </>
    )
}

export async function getStaticProps() {
  
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
      ).then(res => res.json()).catch(res => console.error('Error while fetching movies: ', res))
      
    return {
      props: { movies: response },
    };
  }