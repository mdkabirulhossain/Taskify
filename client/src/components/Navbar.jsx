import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ProfileInfo from './Cards/ProfileInfo';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    
    const handleSearch = () =>{

    }
    const onClearSearch = () =>{
        setSearchQuery("");
    }

    const onLogout = () =>{
        navigate('/login');
    }

    return (
        <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow-[0_6px_1px_rgba(0,0,0,0.25)]'>
            <h2 className='text-xl font-medium text-black py-2'>Taskify</h2>
        
            <SearchBar value={searchQuery}
            onChange={({target})=> setSearchQuery(target.value)}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
            />

            <ProfileInfo onLogout={onLogout} />
        </div>
    );
};

export default Navbar;