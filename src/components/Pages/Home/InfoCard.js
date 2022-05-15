import React from 'react';

const InfoCard = ({ img, bg, title, p }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bg} text-white p-3`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{p}</p>
            </div>
        </div>
    );
};

export default InfoCard;