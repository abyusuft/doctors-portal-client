import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, eUser, eLoading, eError,] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user || eUser);


    if (loading || eLoading) {
        return <button class="btn btn-square loading"></button>;
    }
    if (user || eUser) {
        console.log(user);
    }
    const onSubmit = (data, event) => {
        createUserWithEmailAndPassword(data.email, data.password);


        event.target.reset();
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    }
                                })}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.name?.type === 'required' && `${errors?.name?.message}`}</span>
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                                type="email"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.email?.type === 'required' && `${errors?.email?.message}`}</span>
                                <span className="label-text-alt text-red-500">{errors.email?.type === 'parrern' && `${errors?.email?.message}`}</span>
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Provide a valid Password'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                                type="password"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.password?.type === 'required' && `${errors?.password?.message}`}</span>
                                <span className="label-text-alt text-red-500">{errors.password?.type === 'parrern' && `${errors?.password?.message}`}</span>
                                <span className="label-text-alt text-red-500">{errors.password?.type === 'minLength' && `${errors?.password?.message}`}</span>
                            </label>
                        </div>
                        <input type="submit" className='btn btn-primary text-white w-full max-w-xs' value='SignUp' />
                    </form>
                    <p className='mt-4'>Already have an account? <Link to='/login' className='text-primary font-bold'>Login</Link></p>

                </div>


                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()}
                    className="btn btn-outline m-5">Continute With Google</button>

            </div>


        </div>
    );
};

export default SignUp;