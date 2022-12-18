import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Home from './components/home'
import Navbar from './components/Navbar'
import Details from './components/details'


function App() {
    return (
        <>
            <Navbar/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="/details" element={ <Details/> }/>
                </Routes>
            </BrowserRouter>

            <Footer/>
        </>
    )
}

export default App
