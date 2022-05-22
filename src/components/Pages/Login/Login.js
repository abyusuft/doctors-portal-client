import React from 'react';
import SocialLogin from './SocialLogin';

const Login = () => {
    return (
        <div class="  min-h-screen">
            <div class="">
                <div class="card mx-auto mt-36 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                {/* <a href="#" class="label-text-alt link link-hover">Forgot password?</a> */}
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;