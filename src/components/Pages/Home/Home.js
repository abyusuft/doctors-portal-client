import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Exceptional from './Exceptional';
import Info from './Info';
import OurService from './OurService';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <OurService></OurService>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;