import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/productDetail" exact component={ProductDetail} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;