import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Users = () => {
    const [user] = useAuthState(auth);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/user`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            });
    }, [users])

    const makeAdmin = (email) => {
        const url = `http://localhost:5000/user/admin/${email}`;
        fetch(url, {
            method: 'PUT'

        })
            .then(res => res.json())
            .then(data => toast('successfully Made and admin'));
    }


    return (
        <div>
            <h2 className='text-xl'>All Users : {users.length}</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Make Admin</th>
                        <th>Delete User</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((u, index) => <tr key={u._id}>
                        <th>{index + 1}</th>
                        <td></td>
                        <td>{u.email}</td>
                        <td>{u.role || 'user'}</td>
                        <td>
                            <button disabled={u.role === 'admin'} className='btn btn-xs' onClick={() => makeAdmin(u.email)}>Make Admin</button>
                        </td>
                        <td>
                            <button className='btn btn-xs'>Remove User</button>
                        </td>

                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default Users;