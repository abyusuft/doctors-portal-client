import React from 'react';
import Service from './Service';

const OurService = () => {
    return (
        <div className='pt-10'>
            <div className='text-center'>
                <h3 className='uppercase text-secondary font-bold text-lg'>Our Services</h3>
                <h2 className='text-4xl '>Service We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto p-8'>
                <Service></Service>
            </div>
        </div>
    );
};

export default OurService;