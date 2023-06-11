import React from 'react';
import Hero from './Hero/Hero';
import { useTitle } from '../../hooks/useTitle';
import Facilities from './Facilities/Facilities';
import Map from './Map/Map';
import PopularClasses from './PopularClasses/PopularClasses';
import PopularInstructor from './PopularTeacher/PopularInstructor';

const Home = () => {
    useTitle('Home | Sound Safari');
    return (
        <section>
            <Hero /> 
            <Facilities />
            <PopularClasses /> 
            <PopularInstructor /> 
            <Map />
        </section>
    );
};

export default Home;