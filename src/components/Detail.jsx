import React, { useEffect } from "react";
import { Card ,Spinner } from "flowbite-react";
import {  useNavigate, useParams } from "react-router-dom";
import {api, api_key} from '../api'
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovie, selectedMovie } from "../redux/action/movies";

const Detail = () => {
  const {movieId} = useParams();
 const dispatch = useDispatch();
 
  const movieDetail = async() =>{
    const res = await api.get(`/movie/${movieId}?api_key=${api_key}`)

    dispatch(selectedMovie(res.data))
  }
  useEffect(()=>{
  if(movieId){
    movieDetail();
  }
  return ()=> dispatch(removeSelectedMovie({}))
  },[]);

  let movie = useSelector((state)=> state.movies.movie)
 
  const navigate = useNavigate();
  return (
    <div className="container mx-auto max-w-xl ">
      <div className="">
        <span  className="flex my-1  " onClick={() => navigate("/")}>
          <svg
            className="w-6 h-6 text-white dark:text-white bg-black rounded me-2 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
          Back 
          
        </span>
      </div>
      {JSON.stringify(movie)== '{}'? (
        <div className="text-center">
           <h1><Spinner aria-label="Extra large spinner example" size="xl" /></h1> 

        </div>
      ) : (
        <div className="">
      <Card
            className=""
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={` https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>

            <div className="flex">
              <span className="flex bg-black text-white p-3 rounded-xl">
                <svg
                  className="w-6 h-6 text-white dark:text-white me-1 "  aria-hidden="true"  xmlns="http://www.w3.org/2000/svg"
                  width="24"  height="24" fill="currentColor"  viewBox="0 0 24 24"                 
                >
                 <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                {movie.vote_average}
              </span> 
                
              <span className="ms-2 flex bg-black text-white p-3 rounded-xl">
                <svg
                  className="w-6 h-6 text-white dark:text-white me-2" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" 
                  width="24" height="24"  fill="none"  viewBox="0 0 24 24"
                 >
                 <path
                    stroke="currentColor" strokeLinecap="round" stroke-linejoin="round"  stroke-width="2"
                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                    />
                  </svg> 
                  {movie.release_date}
              </span>  

              <span className="ms-2 flex bg-black text-white p-3 rounded-xl me-1">
                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                </svg>
                {movie.vote_count}
              </span>

              <span className="flex bg-black text-white p-3 rounded-xl me-2">
                 <svg className="w-6 h-6 text-white dark:text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z" clip-rule="evenodd"/>
                </svg>

                {movie.production_countries[0].name}
              </span>
                
            </div>
          </Card>
                  
                 
                 
              
                 

             


            
      </div>
      )}

      
    </div>
  );
};

export default Detail;
