import React, { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "./MovieList";

const Home = () => {

    const [ movies, setmovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setmovies(data.results))
    }, [])

    return (
        <div className="h-[500px] w-full relative">
            <div >   
                <Carousel
                    showIndicators={false}
                    showThumbs={false}
                    showArrows={false}
                    autoPlay={true}
                    transitionTime={5000}
                    infiniteLoop={true}
                    showStatus={false}
                    className="w-full h-full"
                >
                    {
                        movies.map(movie => (
                            <div className="h-[600px] w-full">
                                
                                <Link className="text-white" to={`/movie/${movie.id}`} >
                                <div className="h-full w-full bg-gradient-to-r from-black/50 absolute" />
                                <div className="h-full w-full">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} 
                                    className="w-full h-full object-cover"/>
                                </div>

                                <div className="absolute top-[30%] flex flex-col  left-[5%] h-full w-[400px] ">
                                <div className="text-5xl font-semibold w-full text-start">
                                    {movie ?.original_title}
                                </div>

                                <div className="w-full text-start text-md ">
                                     {movie?.release_date}
                                </div>

                                <div className="w-full text-start text-lg">
                                    Rating : {movie?.vote_average}
                                </div>

                                <div className="w-full text-start line-clamp-7 h-full ">{movie?.overview}</div>

                                </div>

                                </Link>
                            </div>
                            
                        ))
                    }
                </Carousel>     
            </div>

            <MovieList />


            
        </div>
    )
}

export default Home