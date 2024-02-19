import React, { useState } from 'react';
import { Action } from './Action';

const Login = () => {
    const BASE_IMAGE = import.meta.env.VITE_BASE_IMAGE;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "") {
            setError((prevError) => ({ ...prevError, username: 'Username is required!' }));
        }

        if (password === "") {
            setError((prevError) => ({ ...prevError, password: 'Password is required!' }));
        }

        const isAvailable = username !== "" && password !== "";
        if (isAvailable) {
            Action.handleSubmit({ username, password }, setError);
        }
    };

    return (
        <div className='w-full min-h-screen relative bg-blue-900'>
            <div className='w-4/12 absolute -translate-x-2/4  -translate-y-2/4 top-1/2 left-1/2'>
                <img className='mb-4 w-56' src={BASE_IMAGE + "/logo-bw.png"} alt="Logo" />
                <div className="bg-white rounded-xl p-6 w-full">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                            <input
                                type="text"
                                id="username"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                    setError((prevError) => ({ ...prevError, username: null }));
                                }}
                            />
                            {error.username && <span className='text-red-600 text-sm inline-block mt-2'>{error.username}</span>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError((prevError) => ({ ...prevError, password: null }));
                                }}
                            />
                            {error.password && <span className='text-red-600 text-sm inline-block mt-2'>{error.password}</span>}
                        </div>
                        <div className="mb-8 flex justify-end">
                            <a className="inline-block text-sm text-slate-600 hover:text-black cursor-pointer hover:underline" href='#'>Forgot Password?</a>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <button type="submit" className={`bg-blue-500 hover:bg-blue-800  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>
                                Login
                            </button>
                            <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
