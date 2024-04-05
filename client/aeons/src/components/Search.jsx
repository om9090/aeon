import React from 'react';
import { Icon } from '@iconify/react';

const Search = () => {
    return (
        <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
            <Icon icon="ic:sharp-search" className="text-gray-400 " />
            <input 
                type="text" 
                placeholder="Search" 
                className="outline-none w-full ml-2 placeholder-gray-400 bg-gray-50 text-gray-500 text-sm"
            />
        </div>
    );
};

export default Search;
