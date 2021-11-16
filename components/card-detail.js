import Image from "next/image";
import moment from "moment"

function CardDetail({
                        title,
                        summary,
                        genres,
                        productions,
                        voteAverage,
                        date,
                        poster,
                        backdrop,
                        status,
                        tagline,
                        imdb
                    }) {
    return (
        <article className="py-3 max-w-full">
            <div
                className="relative bg-no-repeat bg-left-top bg-cover bg-white shadow-lg border-gray-100 border sm:rounded-3xl p-8 flex flex-col md:flex-row space-x-8 card-detail-bg"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backdrop})`,
                }}>
                <div className="h-full md:h-12 overflow-visible w-full md:w-1/3 mb-5 md:mb-0">
                    <img className="rounded-3xl shadow-lg"
                         src={`https://image.tmdb.org/t/p/w500/` + poster}
                         alt={title}/>
                </div>

                <div className="flex flex-col w-full space-y-2 md:space-y-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center">
                                <h2 className="text-2xl text-white font-bold mr-2">{title}</h2>

                                <a href={`https://www.imdb.com/title/` + imdb} target="_blank"
                                   className="flex items-center">
                                    <Image priority src="/imdb.svg" width="40" height="20"/>
                                </a>
                            </div>
                            {tagline && <p className="text-gray-300">{tagline}</p>}
                        </div>
                        <div className="bg-yellow-400 text-white font-bold rounded-xl p-2">{voteAverage}</div>
                    </div>

                    <div className="text-white">{moment(date).format("DD.MM.YYYY")}</div>

                    <p className="text-gray-200">{summary}</p>

                    <div className="flex text-white">
                        <span className="font-bold">Categories: &nbsp;</span>
                        <ul className="flex"> {genres}</ul>
                    </div>

                    <div className="flex text-white">
                        <span className="font-bold">Productions: &nbsp;</span>
                        <ul className="flex"> {productions}</ul>
                    </div>

                    <div className="flex text-white">
                        <span className="font-bold">Status: &nbsp;</span>
                        <ul className="flex"> {status}</ul>
                    </div>

                </div>

            </div>
        </article>
    )
}

export default CardDetail;