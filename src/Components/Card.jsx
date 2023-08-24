import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="overflow-hidden h-[300px] m-2 w-[200px]">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} className="h-[270px] md:h-[300px] md:w-[200px] m-2 w-[200px]">
            <div className="overflow-hidden h-[250px] w-[180px] sm:h-[270px] sm:w-[200px] md:h-[300px] md:w-[200px] m-2  rounded-xl hover:scale-105 duration-150 relative group">

                <div className="h-full w-full group-hover:bg-black/70 absolute z-[50]"/>

                <img className="w-full h-full  object-cover absolute" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} />

                <div className="absolute  w-full h-full hover:flex flex-col justify-end  z-[100]">
                  <div className="w-full h-[60%]  mx-2 mb-2 flex-col justify-evenly hidden group-hover:flex">
                    <div className="text-md font-semibold">
                        {movie?.original_title}
                    </div>
                    <div className="text-sm font-semibold">
                        {movie?.release_date}
                    </div>
                    <div className="text-sm">
                        Language : {movie?.original_language}
                    </div>

                    <div className="line-clamp-3 text-sm">
                        {movie?.overview}
                    </div>
                  </div>
                </div>
            </div>

            
        </Link>
    }
    </>
}

export default Cards