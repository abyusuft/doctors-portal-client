import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import bg from '../../../assets/images/appointment.png'

const Appointment = () => {
    return (
        <div className="hero mt-36" style={{ backgroundImage: `url(${bg})` }} >
            <div className="hero-content flex-col lg:flex-row p-0">
                <img src={doctor} alt='' className="sm:w-full lg:w-6/12 mr-12 rounded-lg -mt-40 " />
                <div>
                    <h2 className='text-secondary'>Appointment</h2>
                    <h1 className="text-3xl mt-5 font-bold text-white">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;