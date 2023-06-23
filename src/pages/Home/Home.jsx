import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import Facilities from './Facilities/Facilities';
import Map from './Map/Map';
import PopularClasses from './PopularClasses/PopularClasses';
import PopularInstructor from './PopularTeacher/PopularInstructor';
import ExtraFacilities from './Facilities/ExtraFacilities';
import HeroContainer from './Hero/HeroContainer';

const Home = () => {
    useTitle('Home | Sound Safari');
    return (
        <section>
            <HeroContainer />
            <div className="max-w-screen-xl mx-auto">
                <Facilities />
                <PopularClasses />
                <ExtraFacilities />
                <PopularInstructor />
            </div>
            <Map />
        </section>
    );
};

export default Home;