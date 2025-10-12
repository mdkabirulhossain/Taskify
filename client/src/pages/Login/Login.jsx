import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-md w-96'>
                <div>
                    <h4 className='text-2xl font-bold mb-7 text-center text-gray-800'>Login</h4>
                    
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-semibold mb-2'>
                            Email
                        </label>
                        <input
                            type="email"
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1F5F1]'
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
                        <input
                            type="password"
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1F5F1]'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && (
                        <div className='mb-4 text-red-500 text-sm text-center'>
                            {error}
                        </div>
                    )}

                    <button
                        onClick={handleSubmit}
                        className='w-full bg-[#D1D5D1] text-blac py-2 rounded-lg hover:bg-[#B0B5B0] transition duration-200 font-semibold cursor-pointer'
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;