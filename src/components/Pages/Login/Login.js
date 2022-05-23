import React from 'react';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, rError] = useSendPasswordResetEmail(auth);
    const [signInWithEmailAndPassword, lUser, lLoading, lError,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    if (loading || lLoading) {
        return <button class="btn btn-square loading"></button>;
    }
    if (user) {
        console.log(user);
    }
    if (error || rError) {
        console.log(error, rError)
    }
    const onSubmit = (data, e) => {
        signInWithEmailAndPassword(data.email, data.password);
        reset();


    };



    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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
                                type="text"
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
                        <input type="submit" className='btn btn-primary text-white w-full max-w-xs' value='Login' />
                    </form>
                    <p>{error || rError}</p>
                    <p className='mt-4'>New to Doctors Portal? <Link to='/signup' className='text-primary font-bold'>SignUp</Link></p>
                    <p className='mt-1'>Forgot Your Password? <span onClick={() => sendPasswordResetEmail(console.log('Delete Console and replace with variable'))} style={{ cursor: "pointer" }} className='pointer text-primary font-bold'>Reset</span></p>
                </div>


                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()}
                    className="btn btn-outline m-5">Continute With Google</button>

            </div>


        </div>
    );
};

export default Login;