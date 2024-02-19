import React from 'react';
import { IoCaretDown } from "react-icons/io5";

const IntegrateStore = () => {
    return (
        <button className='rounded-xl bg-slate-600 hover:bg-slate-500 px-3 py-2 text-white font-medium flex items-center'>
            <span className='mr-1'>Add Configuration</span>
            <IoCaretDown />
        </button>
    );
};

export default IntegrateStore;