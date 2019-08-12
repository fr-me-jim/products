import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Product from './components/Product';

function App() {

  //state
  const [ products, setProducts ] = useState([]);

  return (
    <Router>
      <Header />

      <main className="container mt-5">
        <Switch>
          <Route exact path="/products/new" component={AddProduct} />
          <Route exact path="/products" component={ProductsList} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
          <Route  exact path="/products/:id" component={Product} />
        </Switch>
      </main>

      <p className="mt-4 p-2 text-center">All rights reserved</p>
    </Router>
  );
}

export default App;
