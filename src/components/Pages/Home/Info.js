import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto p-8 pt-0'>
            <InfoCard p='Everyday 10AM - 05PM' title='Opening Hours' bg='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard p='Shewrapara, Dhaka, Bangladesh' title='Visit our location' bg='bg-accent' img={marker}></InfoCard>
            <InfoCard p='01700000000' title='Contact us now' bg='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>
        </div>
    );
};

export default Info;