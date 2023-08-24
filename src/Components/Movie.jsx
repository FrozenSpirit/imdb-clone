import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

const Movie = () => {
    const [movie, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    return (
        <div className="w-full h-screen">
            <div className="w-full h-full">
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ""}`} />
            </div>

            <div className="absolute top-[50%] w-full md:w-[80%] md:mx-10 gap-3 flex bg-black/30">
                
                <div className=" max-w-[300px] flex flex-col justify-center">
                <div className="w-[150px] h-[300px] sm:w-[210px] sm:h-[350px] lg:w-[250px] lg:h-[380px] py-2 mx-2">
                    <div className="h-full w-full rounded-xl">
                        <img className="object-cover h-full w-full rounded-xl" src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} />
                    </div>
                </div>
                </div>
                
                    <div className="w-full flex  flex-col py-3 justify-between ">
                            <div className="text-3xl py-2">{movie?.original_title}</div>
                                
                                
                                
                            <div className="text-white py-2">
                                {Math.round(movie?.vote_average * 10) / 10} 
                                <span className="text-white ">{` (${movie?.vote_count})`}</span>
                            </div>  
                                
                                
                            <div className="text-white py-2">{movie ? movie.runtime + " mins" : ""}</div>
                                
                                
                            <div className="text-white py-2">{movie ? "Release date: " + movie.release_date : ""}</div>
                                
                                
                            <div className="text-black py-2 flex flex-wrap">
                              {movie?.genres?.map(genre => (
                                    <span className="px-2 py-2 rounded-2xl m-1 bg-[#FFD523] text-black " id={genre.id}>{genre.name}</span>
                                )) }
                            </div>
                        <div className="text-white w-full md:w-[80%] flex flex-col mt-1 py-2">
                            <div className="text-xl font-semibold">Overview</div>
                            <div className="line-clamp-6">{movie?.overview}</div>
                        </div>

                    </div>
                        
                    

                </div>
                        
             </div>
           
           
      
    )
}

export default Movie