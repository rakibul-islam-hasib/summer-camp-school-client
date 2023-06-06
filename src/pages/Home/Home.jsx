import React from 'react';
import Hero from './Hero/Hero';
import { useTitle } from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home | Sound Safari');
    return (
        <section>
            <Hero /> 
            <h1>Tdbjv  </h1> 
        </section>
    );
};

export default Home;