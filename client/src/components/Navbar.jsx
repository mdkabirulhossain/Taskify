import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ProfileInfo from './Cards/ProfileInfo';

const Navbar = () => {
    return (
        <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow-[0_6px_1px_rgba(0,0,0,0.25)]'>
            <h2 className='text-xl font-medium text-black py-2'>Taskify</h2>
        
            <SearchBar />

            <ProfileInfo />
        </div>
    );
};

export default Navbar;