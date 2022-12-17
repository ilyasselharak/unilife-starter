import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Seeallcities from './pages/Seeallcities';
import CityDetails from './pages/CityDetails';


  
function App() {
  const [cities,setCities] = useState([])
  const [Pro,setPro]=useState([])
  useEffect(()=>{
    axios.get(`https://unilife-server.herokuapp.com/cities?limit=9`)
.then(response=>{
  setCities(response.data.response)
})
.catch(err=>{console.log(err)})
    axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
.then(response=>{
  setPro(response.data.response)
})
.catch(err=>{console.log(err)})
  },[])
  
  return (
    <BrowserRouter>
    <Header />
     <Routes>
       <Route path="/seeallcities" element={<Seeallcities pro={Pro}/>}/>
       <Route path='/' element={<HomePage pro={Pro} city={cities}/>}/>
       <Route path='/detail/:city' element={<CityDetails/>}/>
     </Routes>
       
       <Footer />
    </BrowserRouter>
  );
}

export default App;