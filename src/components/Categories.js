import React from 'react';
import { connect } from 'react-redux';
import Products from './Products.js';

import { initialState } from '../store/categories.js';

const Categories = props => {
  // const categories = initialState.products.reduce((accumulator, currentVal) => {
  //   if(!accumulator.includes(currentVal.category)){
  //     accumulator.push(currentVal.category)
  //   }
  //   return accumulator
  // }, [])
  return (
    <section>
      <ul>
        {initialState.categories.map(category => (
            <li key={category}>
              <p>{category.name}</p>
              <ul>
                {props.counter.products.map(product => 
                  {if(product.category == category.name) {
                    return <li><p>{product.item}</p></li>
                  }}
                  )}
              </ul>
              {/* <ul>
                {props.counter.products.map(product => 
                  {if(product.category == category.name) {
                    return <li><Product name=product.name category=category.prodcut</li>
                  }}
                  )}
                
              </ul> */}
            </li>
        ))}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
