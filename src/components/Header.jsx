import React, { useState } from 'react'

import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import {api, api_key} from '../api'
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/action/movies';

const Header = () => {
  const [movieName , setMovieName] = useState('')
  const dispatch = useDispatch();
  const searchMovie = async () =>{
    // console.log(movieName);
    if (movieName !== '') {
      const res =  await api.get(`/search/movie?query=${movieName}&api_key=${api_key}`)
      dispatch(fetchMovies(res.data.results))
    }else{
      const res = await api.get(`movie/now_playing?api_key=${api_key}`)
      dispatch(fetchMovies(res.data.results))
    }

  }


  return (
  <div>
    <Navbar fluid rounded>
        <Link to={'/'}>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Code-Lab Movies Channel
         </span>
        </Link>
      <div className="flex md:order-2">
        <TextInput placeholder='Search.....' value={movieName} onChange={(e)=>setMovieName(e.target.value)}></TextInput>
        <Button color="dark" className='ms-1' onClick={()=> searchMovie()}>Enter</Button>
      </div>
      
      
    </Navbar>
   
  </div>
  )
}

export default Header