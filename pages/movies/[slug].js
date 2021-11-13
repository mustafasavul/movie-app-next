import Layout from "../../layout";
import unfetch from "isomorphic-unfetch";
import slug from "slug";

const baseURL = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=6b9aa903068d8a1efb9f84d8ca640133';
const apiURL = baseURL + '{movie_id}?' + apiKey;

function MovieDetail({movie}) {
    return <Layout>
        <div>
            {movie.title}
        </div>

        <figure>
            <img src={movie.poster_path} alt={movie.title}/>
        </figure>
    </Layout>
}

export async function getStaticPaths() {
    const data = await unfetch(apiURL)
    const movies = await data.json();

    const paths = movies.results.map(movie => {
        return {params: {slug: `${slug(movie.title)}-${movie.id}`}}
    });

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({params}) {
    // data fetch
    const id = params.slug.split("-").slice(-1)[0];

    const data = await unfetch(apiURL + id)
    const movie = await data.json();

    return {
        props: {
            movie
        },
    }
}

export default MovieDetail;