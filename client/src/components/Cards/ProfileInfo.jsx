import React from 'react';
import { getInitials } from '../../utils/helper';

const ProfileInfo = ({onLogout}) => {
    return (
        <div className='flex items-center gap-3'>
            <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>
                {getInitials("Kabirul Hossain")}
            </div>
            <div>
                <p className='text-sm font-medium hidden md:block'>Kabirul Hossain</p>
            </div>

            <button onClick={onLogout} className='text-sm px-2 py-1 rounded-md bg-slate-400 hover:opacity-80' >Logout</button>
        </div>
    );
};

export default ProfileInfo;