import React from 'react';

const SearchBar = () => {
    return (
        <div>
           <input type="text" 
           placeholder='Search Notes...' 
           className='w-full text-sm bg-transparent py-1 px-2 border-1 outline-none'
           />
        </div>
    );
};

export default SearchBar;