import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import room1 from "../images/details-1.jpeg";
import room2 from "../images/details-2.jpeg";
import room3 from "../images/details-3.jpeg";
import Button from 'react-bootstrap/Button';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default class carousal extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null,
        };
      }
    
      handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }
    
      render() {
        const { index, direction } = this.state;
    
        return (
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100 h-80"
                src={room1}
                alt="First slide"
              />
              <Carousel.Caption>
              <Banner title="Luxuries Rooms"
        subtitle="Delux rooms Start 1000rs">
            <Link to="/rooms/" className="btn-primary">Our Rooms</Link> 
            </Banner>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-80"
                src={room2}
                alt="Third slide"
              />
    
              <Carousel.Caption>
              <Banner title="Luxuries Rooms"
        subtitle="Delux rooms Start 1000rs">
            <Link to="/rooms/" className="btn-primary">Our Rooms</Link> 
            </Banner>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-80"
                src={room3}
                alt="Third slide"
              />
    
              <Carousel.Caption>
              <Banner title="Luxuries Rooms"
        subtitle="Delux rooms Start 1000rs">
            <Link to="/rooms/" className="btn-primary">Our Rooms</Link> 
            </Banner>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
}
