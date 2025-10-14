import React from 'react';
import NoteCard from '../../components/Cards/NoteCard';

const Home = () => {
    return (
        <div className='container px-4 sm:px-10 md:px-14'>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
            </div>
        </div>
    );
};

export default Home;