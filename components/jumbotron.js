function Jumbotron({title}) {
    return (
        <div className="max-w-screen-lg bg-yellow-400 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
            <h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
                {title}
            </h2>

        </div>
    )
}

export default Jumbotron;