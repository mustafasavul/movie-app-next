function Card({title, popularity, date, overview, poster, altText}) {
    return (
        <article className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
            <div className="w-2 bg-gray-800"/>
            <div
                className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white">
                <div
                    className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"/>
                <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6">
                    <div className="poster__info align-self-end w-full">
                        <div className="h-32"/>
                        <div className="space-y-6 detail_info">
                            <div className="flex flex-col space-y-2 inner">
                                <h3 className="text-2xl font-bold text-white">{title}</h3>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col">
                                    <div className="popularity">{popularity}</div>
                                    <div className="text-sm text-gray-400">Popularity:</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="release">{date}</div>
                                    <div className="text-sm text-gray-400">Release date:</div>
                                </div>
                            </div>
                            <div className="flex flex-col overview">
                                <div className="flex flex-col"/>
                                <div className="text-xs text-gray-400 mb-2">Overview:</div>
                                <p className="text-xs text-gray-100 mb-6">
                                    {overview.slice(0, 300)}...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <img className="absolute inset-0 transform w-full -translate-y-4"
                     src={`https://image.tmdb.org/t/p/w500/` + poster}
                     alt={altText}
                     style={{filter: 'grayscale(0)'}}/>
            </div>
        </article>
    )
}

export default Card;