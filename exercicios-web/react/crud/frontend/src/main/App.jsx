import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import Logo from '../Components/template/Logo'
import Nav from '../Components/template/Nav'
import Routes from './Routes'
import Footer from '../Components/template/Footer'

export default props =>
<BrowserRouter>
<div className="app">
    <Logo />
    <Nav />
    <Routes />
    <Footer />
</div>
</BrowserRouter>