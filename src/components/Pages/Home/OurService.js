import React from 'react';
import Service from './Service';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import white from '../../../assets/images/whitening.png';

const OurService = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cativy Fillint',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: white
        }
    ]
    return (
        <div className='pt-10'>
            <div className='text-center'>
                <h3 className='uppercase text-primary font-bold text-lg'>Our Services</h3>
                <h2 className='text-4xl '>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto p-8'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}

                    >

                    </Service>)
                }

            </div>
        </div>
    );
};

export default OurService;