import Layout from "../layout/index";
import Link from "next/link"
import unfetch from "isomorphic-unfetch";
import slug from "slug";

function Homepage({movies}) {
    return <Layout headTitle={"Anasayfa"}>
        <h1>Hello Welcome</h1>

        <ul>
            {movies.results.map((movie) => (
                <li key={movie.id}>
                    <Link href="/movies/[slug]"
                          as={`/movies/${slug(movie.title)}-${movie.id}`}>
                        <a>{movie.title}</a>
                    </Link>
                </li>

            ))}
        </ul>
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