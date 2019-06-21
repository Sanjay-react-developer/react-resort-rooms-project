import React from 'react';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
const Error = () => {
    return (
       <Hero>
           <Banner title="404" subtitle="Page not Found">
               <Link to="/" className="btn-primary">Back To Home</Link>
               </Banner>

       </Hero>
    );
}

export default Error
