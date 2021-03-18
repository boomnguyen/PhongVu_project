import React from 'react';
import './App.scss';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Main from './container/Main/Main';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;