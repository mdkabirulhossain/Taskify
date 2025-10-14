import React from 'react';
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";


const NoteCard = ({tags, onDelete,onEdit,content,isPinned, onPinNote, title, date }) => {
    return (
        <div className='border border-gray-300 rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out'>
            <div className='flex justify-between items-center'>
                <div>
                    <h6 className='text-sm font-medium'>Hi{title}</h6>
                    <span className='text-sm  text-green-700'>Hello{date}</span>
                </div>

                <MdOutlinePushPin
                    className={`cursor-pointer ${isPinned ? "text-green-600" : "text-slate-300"}`}
                    onClick={onPinNote}
                />
            </div>
            <p className='text-xs text-slate-600 mt-2'>{content?.slice(0, 60)}</p>
            <div className='flex items-center justify-between mt-2'>
                <div className='text-xs text-slate-500'>
                        {tags}
                </div>
                <div className='flex items-center gap-2'>
                    <MdCreate className={`cursor-pointer hover:text-green-600`} 
                    onClick={onEdit}
                    />

                    <MdDelete 
                    className='cursor-pointer hover:text-red-500'
                    onClick={onDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteCard;