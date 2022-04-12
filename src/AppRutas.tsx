import React, { Component, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
//import { Contador } from './componentes/Contador';
//import { Usuario } from './componentes/Usuario';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';


class AppRutas extends Component{
  
  render(){
    return (
      <Router>
          <Routes>
            <Route path="/" element={<App/>}/>
            
            <Route path="/test" element={<h1>TEST</h1>}/>
            <Route path="*" element={<App/>}/>
          </Routes>
      </Router>
    );
  }
}

//<Route path="/contador" element={<Contador/>}/>

export default AppRutas;
