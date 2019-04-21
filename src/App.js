import React from 'react'
// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MainContents from './components/MainContents'

function App(){
  return(
    <div>
      <Header />
      <MainContents />
      <Footer />
    </div>
  )
}

export default App;
