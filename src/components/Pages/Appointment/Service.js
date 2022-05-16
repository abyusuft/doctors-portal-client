import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;

    return (
        <div class="card lg:max-w-lg  bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-2xl font-bold text-center text-primary">{name}</h2>
                <p>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>No Slot Available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} class="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary ">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;