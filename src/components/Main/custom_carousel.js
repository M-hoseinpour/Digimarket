import React, { Component } from 'react';
import  Carousel from 'react-elastic-carousel';
import  'owl.carousel/dist/assets/owl.carousel.min.css'
import  'owl.carousel/dist/assets/owl.theme.default.min.css'

import Product from './Product'

function Custom_carousel(props) {
    

    const breakPoints = [
        {width: 200, itemsToShow: 1, itemsToScroll: 1, pagination :'false'},
        {width: 300, itemsToShow: 2, itemsToScroll: 1, pagination :'false'},
        {width: 400, itemsToShow: 3, itemsToScroll: 1, pagination :'false'},
        {width: 600, itemsToShow: props.num, itemsToScroll: 1},
        {width: 1400, itemsToShow: props.num, itemsToScroll: 1},
    ];
  
    return (
      <Carousel breakPoints={breakPoints}>
        {props.items.map(item => (
            <div>
                <Product img={item.img} key={Math.random()} title={item.title}  off={item.off} d_price={item.d_price} time={item.time} price={item.price} quantity={item.quantity} id = {item.id}/>
            </div>
        ))}
</Carousel>)}

export default Custom_carousel;