import React from 'react';
import Hero from './Hero/Hero';
import { useTitle } from '../../hooks/useTitle';
import Facilities from './Facilities/Facilities';

const Home = () => {
    useTitle('Home | Sound Safari');
    return (
        <section>
            <Hero /> 
            <Facilities />
        </section>
    );
};

export default Home;