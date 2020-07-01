import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import Response from './Response.json';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Register from './Register';
import Cart from './Cart';
import Products from './Products';
import Nav from './Nav';
import Brands from './Brands';
import ProductTypes from './ProductType';
import ProductDetail from './ProductDetail';



export default class App extends Component {
  constructor() {
    super()

    this.state = {
      products: [],
    }
  }

  async componentDidMount() {

    try {
      const response = await axios(`http://makeup-api.herokuapp.com/api/v1/products.json`)
      console.log(response.data)

      response ?

        this.setState({
          products: response.data
        })
        :
        this.setState({
          products: Response
        })

    } catch (error) {
      console.log(`${error}`)
    }

  }

  render() {
    return (
      <>
        <Route path='/'>
          <Header />
        </Route>

        <Route path='/'>
          <Nav />
        </Route>

        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/cart'>
          <Cart products={this.state.products} />
        </Route>

        <Route path='/allproducts'>
          <Products products={this.state.products} />
        </Route>

        <Route path='/allbrands'>
          < Brands products={this.state.products} />
        </Route>

        <Route path='/producttypes'>
          <ProductTypes products={this.state.products} />
        </Route>

        <Route path='/product/:id'>
          <ProductDetail products={this.state.products} />
        </Route>

        <Route>

        </Route>

        <Route path='/'>
          <Footer />
        </Route>

      </>
    )
  }
}

