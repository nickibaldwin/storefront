import React from 'react';

import Header from './components/Header.js';
import Categories from './components/Categories.js';
import Footer from './components/Footer.js';
import Products from './components/Products.js';

function App() {
  return (
    <>
      <Header />
      <Products />
      <Categories />
      <Footer />
    </>
  )
}

export default App;