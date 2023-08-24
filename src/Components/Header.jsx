import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (

    <div className="w-full h-[60px] flex justify-between items-center ">

        <div className="flex justify-start items-center w-full sm:w-2/3  h-[55px] ml-1 md:ml-2">
        
        <Link to={'/'}>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png'} alt="imdb logo" className="h-[55px] mr-10" /> 
        </Link>

        <Link to={'/movies/top_rated'}> 
            <div className="text-[#FFED00] md:text-lg hover:text-red-600 text-md  md:mx-3  ">
                Top Rated
            </div>
        </Link>
        <Link to={'/movies/popular'}> 
            <div className=" text-md mx-2  md:text-lg text-[#FFED00] hover:text-red-600">
                Popular
            </div>
        </Link>
        <Link to={'/movies/upcoming'}> 
            <div className=" text-md mx-2  md:text-lg text-[#FFED00] hover:text-red-600">
                Upcoming
            </div>
        </Link>
        </div>

        <div className="hidden sm:flex sm:w-1/3 justify-end items-center  h-[55px]">
            <div className="cursor-pointer hover:bg-orange-500 bg-orange-700 mr-7 px-3 py-2">Log In</div>
        </div>

    </div>
    )
}

export default Header

