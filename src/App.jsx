import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { Route, Routes } from 'react-router'
import NotFoundPage from './components/NotFoundPage'
import Detail from './components/Detail'



const App = () => {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/movies/details/:movieId' element={<Detail></Detail>}></Route>

       <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
     
    </div>
  )
}

export default App