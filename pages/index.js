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
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODhhZTFkY2JkODExMmFhZjQ0OWJkNmQzNWUyMmY1YSIsInN1YiI6IjY1MDFhNDVkZGI0ZWQ2MTAzNDQwMjgzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JraT-M2Dy97do69cZhnjZ3xtbUeE8Q5qYKhahH7Gsa8",
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