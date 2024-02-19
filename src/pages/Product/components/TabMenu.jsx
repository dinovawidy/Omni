import React from 'react';
import GeneralUtility from '../../../utils/general-utility';
import { useLocation } from 'react-router-dom';

const TabMenu = ({ item }) => {
    const location = useLocation();
    const isActive = GeneralUtility.isCurrentRoute(location, item.redirect);

    return (
        <a href={item.redirect} className={`py-2 px-3 rounded-xl  mr-2 flex items-center border-b-2 
            ${isActive ? "border-blue-600 bg-white" : "border-gray-600 bg-slate-200"}`}>
            <img src={item.image} alt="" className='w-5 h-5' />
            <span className='inline-block ml-2 font-md font-medium capitalize'>{item.menuName}</span>
        </a>
    );
};

export default TabMenu;