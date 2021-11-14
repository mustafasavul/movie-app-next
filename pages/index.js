import Layout from "../layout/index";
import Link from "next/link"
import unfetch from "isomorphic-unfetch";
import slug from "slug";
import Card from "../components/card";

function Homepage({movies}) {
    return <Layout headTitle={"Anasayfa"}>
        <h3 className="text-4xl m-5">Popular Movies</h3>

        <div className="grid grid-cols-3 gap-1 justify-between overflow-x-auto">
            {movies.results.map((movie) => (
                <div key={movie.id}>
                    <Link href="/movies/[slug]"
                          as={`/movies/${slug(movie.title)}-${movie.id}`}>

                        <Card
                            title={movie.title}
                            overview={movie.overview}
                            popularity={movie.popularity}
                            date={movie.release_date}
                            poster={movie.poster_path}
                            altText={movie.title}
                        />
                    </Link>
                </div>
            ))}
        </div>


    </Layout>
}

export async function getStaticProps() {
    const baseURL = 'https://api.themoviedb.org/3/';
    const apiKey = 'api_key=6b9aa903068d8a1efb9f84d8ca640133';
    const apiURL = baseURL + 'movie/popular?' + apiKey;

    // data fetch
    const data = await unfetch(apiURL)
    const movies = await data.json();

    return {
        props: {
            movies
        },
    }
}

export default Homepage;