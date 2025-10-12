import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const SearchBar = ({value, onChange, handleSearch, onClearSearch}) => {
    return (
        <div className='w-40 sm:w-60 md:w-80 flex items-center px-2 bg-slate-400 rounded-md'>
           <input type="text" 
           placeholder='Search Notes...' 
           className='w-full text-sm bg-transparent py-1 px-2 outline-none'
           value={value}
           onChange={onChange}
           />

           {
            value && <IoClose className='text-slate-500 text-xl cursor-pointer hover:text-black mr-2'
            onClick={onClearSearch}
            />
           }

           <FaMagnifyingGlass
           onClick={handleSearch}
           className='cursor-pointer'
           />
        </div>
    );
};

export default SearchBar;