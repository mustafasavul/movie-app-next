import Layout from "../../components/layout";
import unfetch from "isomorphic-unfetch";
import slug from "slug";
import CardDetail from "../../components/card-detail";

const baseURL = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=6b9aa903068d8a1efb9f84d8ca640133';
const apiURL = baseURL + 'movie/popular?' + apiKey;

function MovieDetail({movie}) {
    return <Layout>
        <div className="xl:pb-80">
            <CardDetail
                title={movie.title}
                poster={movie.poster_path}
                voteAverage={movie.vote_average}
                date={movie.release_date}
                summary={movie.overview}
                backdrop={movie.backdrop_path}
                genres={movie.genres.map((genre) => {
                    return <li key={genre.id}>{genre.name},</li>
                })}
                productions={movie.production_companies[0].name}
                status={movie.status}
                tagline={movie.tagline}
                imdb={movie.imdb_id}
            />
        </div>
    </Layout>
}

export async function getStaticPaths() {
    const data = await unfetch(apiURL)
    const movies = await data.json();

    const paths = movies.results.map(movie => {
        return {params: {slug: `${movie.id}-${slug(movie.title)}`}}
    });

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({params}) {
    // data fetch
    const id = params.slug.split("-").slice(0, 5)[0];

    const data = await unfetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=6b9aa903068d8a1efb9f84d8ca640133')
    const movie = await data.json();

    return {
        props: {
            movie
        },
    }
}

export default MovieDetail;