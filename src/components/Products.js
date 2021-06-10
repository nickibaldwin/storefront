import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, reset } from '../store/products.js';

const Products = props => {
  return (
    <section>
      <ul>
        {props.counter.products.map(product => {
          if(product.category===props.categoriesReducer.activeCategory)
          return(
            <li key={product.item}>
              <p>{product.item} : {product.total}</p>
              <button onClick={() => props.increment(product.item)}>+</button>
              <button onClick={() => props.decrement(product.item)}>-</button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  counter: state.productsReducer,
  categoriesReducer: state.categoriesReducer
})

const mapDispatchToProps = { increment, decrement, reset }

export default connect(mapStateToProps, mapDispatchToProps)(Products);
