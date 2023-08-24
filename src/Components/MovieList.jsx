import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import Card from "./Card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    const github = 'https://github.com/FrozenSpirit';
    return (
        
        <div>
            <div className="w-full h-full justify-center items-center mb-3 ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl ml-3 my-3">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="w-full grid-cols-2 grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 ">
                {
                    movieList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>

            
            </div>

            <div className="h-[200px] w-full border-white border-t-3 text-white flex justify-center items-center">
                <div onClick={() => window.open(github)} className="border-t-4 border-white  w-[97%] text-center py-6 text-lg hover:text-blue-500 cursor-pointer">
                Website made by Amit Martha
                <br />
                Click to view source code
                </div>

            </div>
        </div>
    )
}

export default MovieList