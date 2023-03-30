import React from 'react'
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'

function App() {

  return (
      <div>
        <h2>Shopping Cart</h2>
        <hr/>
        <ProductsList />
        <hr/>
        <Cart />
      </div>
  )}

export default App