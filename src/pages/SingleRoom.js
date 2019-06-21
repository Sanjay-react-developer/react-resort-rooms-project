import React, { Component } from 'react';

import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import defaultbcg from '../images/room-1.jpeg';
import {RoomContext} from '../contex';
import StyledHero from '../components/StyledHero';

export default class extends Component {
    constructor(props){
        super(props);

           this.state={
               slug:this.props.match.params.slug,
               defaultbcg
           }
        
    }
    static contextType = RoomContext; 
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
      if(!room) {
          return (
              <div className="error">
                  <h3>No Such Rooms...</h3>
                  <Link to='/rooms' className="btn-primary">Back to Rooms Pages</Link>
              </div>
          )
      }
      const {name,
        images,
        size,
        description,
        capacity,
        price,
        extras,
        breakfast,
        pets}=room;
        const [mainImg, ...defaultImg] = images 
        return (
            <>
            <StyledHero  img={mainImg || this.state.defaultbcg}>
                <Banner title={`${name} Room`}>
                    <Link className="btn-primary" to="/rooms">Back To Room</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item, index)=> {
                       return <img src={item} alt={name} key={index}/>
                    })}

                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>deatils</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>Price: ${price}</h6>
                        <h6>Size: ${size}</h6>
                        <h6>
                            max Capacity :{capacity > 1 ? `${capacity} People`:  `${capacity} person`}
                        </h6>
                        <h6>{pets?"Pets Allowed":"No Pets Allowed"}</h6>
                        <h6>{breakfast && "free breakfast allowed"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item,index)=>{
                       return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}
