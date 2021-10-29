import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../images/banner/banner1.png'
import Banner2 from '../../../images/banner/banner2.png'

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img style={{height: 500}}
      className="d-block w-100"
      src={Banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <div className="text-start my-3">
      <h1 style={{fontSize: 60}}>Amazing Tour <br /> In Hampshire</h1>
      <h1 style={{color: 'coral'}}>7 Days, 8 Night Tour</h1>
      <button style={{fontSize: 25, color: 'white'}} className="bg-success">BOOK NOW</button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: 500}}
      className="d-block w-100"
      src={Banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <div className="text-start my-3">
      <h1 style={{fontSize: 60}}>Amazing Tour <br /> In Madagascar</h1>
      <h1 style={{color: 'coral'}}>7 Days, 8 Night Tour</h1>
      <button style={{fontSize: 25, color: 'white'}} className="bg-success">BOOK NOW</button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;