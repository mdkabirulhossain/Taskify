import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Log the login data to console
        console.log('Login Data:', {
            email: email,
            password: password
        });
        
        setEmail('');
        setPassword('');
    };

    return (
        <div className='flex justify-center min-h-screen bg-gray-100 md:items-center items-start mt-10 md:mt-0'>
            <div className='bg-white p-8 rounded-lg shadow-md w-96'>
                <div>
                    <h4 className='text-2xl font-bold mb-7 text-center text-gray-800'>Login</h4>
                    
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-semibold mb-2'>
                            Email
                        </label>
                        <input
                            type="email"
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-semibold mb-2'>
                            Password
                        </label>
                        <div className='relative'>
                            <input
                                type={showPassword ? "text" : "password"}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
                                placeholder='Enter your password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
                            >
                                {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className='mb-4 text-red-500 text-sm text-center'>
                            {error}
                        </div>
                    )}

                    <button
                        onClick={handleSubmit}
                        className='w-full bg-gray-300 text-black py-2 rounded-lg hover:bg-gray-400 transition duration-200 font-semibold cursor-pointer'
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;