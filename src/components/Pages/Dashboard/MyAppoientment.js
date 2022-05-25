import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';

const MyAppoientment = () => {
    const [appointment, setAppointment] = useState([]);
    const [user] = useAuthState(auth);
    const [token] = useToken(user);

    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/booking?patient=${user?.email}`;
            fetch(url, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setAppointment(data)
                });
        }


    }, [user])



    return (
        <div>
            <h2 className='my-5'>My Appoientment : {appointment.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Treatment</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointment.map(app => <tr key={app._id}>
                            <th>{app.treatment}</th>
                            <td>{app.patientName}</td>
                            <td>{app.patient}</td>
                            <td>{app.date}</td>
                            <td>{app.slot}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoientment;