import React from 'react'
// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.css';
import './style.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MainContents from './components/MainContents'
import TodoItem from './TodoItem'

function App(){
  return(
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default App;
