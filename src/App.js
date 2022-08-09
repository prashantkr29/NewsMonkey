import './App.css'

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
       
        <Route exact path='/science' element={<News key="science"category='science'/>}/>
        <Route exact path='/health' element={<News key="health"category='health'/>}/>
        <Route exact path='/technology' element={<News key="technology"category='Technology'/>}/>
        <Route exact path='/entertainment' element={<News key="entertainment"category='Entertainment'/>}/>
        <Route exact path='/sports' element={<News key="sports"category='Sports'/>}/>
        <Route exact path='/politics' element={<News key="politics"category='Politics'/>}/>
        <Route exact path='/buisness' element={<News key="buisness"category='buisness'/>}/>
       

      </Routes>
      </BrowserRouter>
     
      </>
    )
  }
}
