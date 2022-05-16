import React from 'react';
import Banner from './Banner';
import Exceptional from './Exceptional';
import Info from './Info';
import OurService from './OurService';
import MakeAppointment from './MakeAppointment'

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <OurService></OurService>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;