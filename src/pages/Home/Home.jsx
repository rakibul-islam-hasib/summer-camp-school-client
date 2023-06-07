import React from 'react';
import Hero from './Hero/Hero';
import { useTitle } from '../../hooks/useTitle';
import Facilities from './Facilities/Facilities';
import Map from './Map/Map';
import Footer from '../../components/footer/Footer';

const Home = () => {
    useTitle('Home | Sound Safari');
    return (
        <section>
            <Hero /> 
            <Facilities />
            <Map />
            <Footer />
        </section>
    );
};

export default Home;