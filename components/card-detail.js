import moment from "moment"

function CardDetail({title, summary, genres, productions, voteAverage, date, overview, poster, altText, backdrop}) {
    return (
        <article className="py-3 max-w-full">
            <div
                className="relative bg-no-repeat bg-left-top bg-cover bg-white shadow-lg border-gray-100 max-h-80 border sm:rounded-3xl p-8 flex space-x-8 card-detail-bg"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backdrop})`,
                }}>
                <div className="h-12 overflow-visible w-1/5">
                    <img className="rounded-3xl shadow-lg"
                         src={`https://image.tmdb.org/t/p/w500/` + poster}
                         alt={title}/>
                </div>

                <div className="flex flex-col w-full space-y-4">
                    <div className="flex justify-between items-start">
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <div className="bg-yellow-400 font-bold rounded-xl p-2">{voteAverage}</div>
                    </div>

                    <div>
                        <div className="text-lg text-gray-800">{moment(date).format("DD.MM.YYYY")}</div>
                    </div>

                    <p className=" text-gray-400 max-h-40 overflow-y-hidden">{summary}</p>
                    <div className="flex text-2xl font-bold text-a">ad</div>
                </div>

            </div>
        </article>
    )
}

export default CardDetail;