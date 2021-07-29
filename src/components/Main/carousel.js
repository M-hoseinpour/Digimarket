import React, { Component } from 'react';
import  OwlCarousel from 'react-owl-carousel';
import  'owl.carousel/dist/assets/owl.carousel.min.css'
import  'owl.carousel/dist/assets/owl.theme.default.min.css'
import { Link } from "react-router-dom";

class Carousel extends Component {
  
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <OwlCarousel
      className="owl-theme"
        items={this.props.item}
        autoplay
        dots
        loop
        stagePadding='0'
        
      >
        <div className="item">
          <Link to='/product'>
          <img alt="" src={this.props.img1} />
          </Link>
        </div>
        <div className="item">
        <Link to='/product'>
          <img alt="" src={this.props.img2} />
          </Link>
        </div>
        <div className="item">
        <Link to='/product'>
          <img alt="" src={this.props.img3} />
          </Link>
        </div>
      </OwlCarousel>
    );
  }

}

export default Carousel;
