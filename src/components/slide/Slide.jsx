import React from 'react';
import './Slide.scss';
import { Link } from 'react-router-dom';
import Slider from 'infinite-react-carousel';
import CatCard from '../catCard/CatCard';


const Slide = ({ slidesToShow, arrowsScroll,children }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;



