import React from 'react';
import './App.scss';
import Header from './container/Header/Header';
import Main from './container/Main/Main';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  )
}

export default App;