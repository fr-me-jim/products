import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/new-product" component={AddProduct} />
        <Route exact path="/products" component={ProductsList} />
        <Route exact path="/products/edit/:id" component={EditProduct} />
        <Route  exact path="/products/:id" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
