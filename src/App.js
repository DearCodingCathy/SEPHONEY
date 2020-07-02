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
      myCart: [],
      subtotal: 0,
      taxPercent: 5,
      taxTotal: 0,
      deliveryFee: 0,
      orderTotal: 0,
      quantity: 1,
    }
  }

  async componentDidMount() {

    try {
      if (localStorage.getItem('data')) {
        const products = localStorage.getItem('data')
        this.setState({
          products: JSON.parse(products)
        })
      } else {
        const response = await axios(`http://makeup-api.herokuapp.com/api/v1/products.json`)
        console.log(response.data)

        const productQ = response.data.map((product) => {
          product.quantity = 1
          return (product)
        })

        this.setState({
          products: productQ
        })
        localStorage.setItem('data', JSON.stringify(productQ))
      }

    } catch (error) {
      const productQ = Response.map((product) => {
        product.quantity = 1
        return (product)
      })

      this.setState({
        products: productQ
      })
    }
  }

  handleClick = (item) => {
    this.setState(prevState => ({
      myCart: [...prevState.myCart, item]
    }), this.calcTotal)
  }

  updateQuantity = (quantity, index) => {
    let oldItems = this.state.myCart.slice()
    let item = oldItems[index]
    item.quantity = item.quantity + quantity < 0 ? 0 : item.quantity + quantity

    const updatedCart = this.state.myCart
    updatedCart[index] = item

    this.setState({
      myCart: updatedCart
    }, this.calcTotal)
  }

  calcTotal() {
    let { myCart, taxPercent, deliveryFee } = this.state
    let subtotal = myCart
      .filter(item => item.quantity > 0)
      .map(item => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0)

    let taxTotal = Math.round((subtotal * (taxPercent / 100)) * 100) / 100
    let orderTotal = subtotal + taxTotal + deliveryFee

    this.setState({
      subtotal,
      taxTotal,
      orderTotal,
    })
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
          <Cart products={this.state.products} cart={this.state.myCart} qtyfunction={this.updateQuantity} qty={this.state.quantity} subtotal={this.state.subtotal} ordertotal={this.state.orderTotal} taxtotal={this.state.taxTotal} />
        </Route>

        <Route path='/allproducts'>
          <Products products={this.state.products} cart={this.state.myCart} func={this.handleClick} />
        </Route>

        <Route path='/allbrands'>
          < Brands products={this.state.products} />
        </Route>

        <Route path='/producttypes'>
          <ProductTypes products={this.state.products} />
        </Route>

        <Route path='/product/:id'>
          <ProductDetail products={this.state.products} cart={this.state.myCart} func={this.handleClick} />
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

