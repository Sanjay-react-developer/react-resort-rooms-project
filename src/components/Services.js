import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services:[
           {
            icons:<FaCocktail/>,
            title:"free cocktail",
            info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
            icons:<FaHiking/>,
            title:"Endlees Hiking",
            info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
            icons:<FaShuttleVan/>,
            title:"Free Shutlle",
            info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
            icons:<FaBeer/>,
            title:"Strong Beer",
            info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div class="services-center">
                    {this.state.services.map((item, index) => {
                       return <article className="service" key={index}>
                           <span>{item.icons}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article> 
                    })}
                </div>
            </section>
        )
    }
}
