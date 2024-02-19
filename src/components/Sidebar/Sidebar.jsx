import React from 'react';
import { redirect, useLocation } from 'react-router-dom';
import * as ReactIcons from 'react-icons/io5';
import MenuNavbar from './static/menu';
import GeneralUtility from '../../utils/general-utility';

const Sidebar = () => {
    const BASE_IMAGE = import.meta.env.VITE_BASE_IMAGE;
    const location = useLocation();

    return (
        <div className='w-full max-w-[250px] bg-white overflow-x-hidden overflow-y-auto'>
            <div className='w-full px-4 pt-6 pb-4'>
                <img src={BASE_IMAGE + "/logo-color.png"} alt="" />
            </div>
            <div className="w-full px-4 py-2">
                <ul className='w-full'>
                    {MenuNavbar.menu1.map((item, index) => {
                        let Icon = ReactIcons[item.iconName];
                        const isActive = GeneralUtility.isCurrentRoute(location, item.redirect);
                        return (<li className='mb-2' key={index}>
                            <a className={`px-2 py-2 flex items-center ${isActive ? 'bg-slate-300' : 'hover:bg-slate-200'} rounded w-full`} href={item.redirect}>
                                {Icon && <Icon size={item.sizeIcon} color={item.colorIcon} />}
                                <span className='inline-block ml-2 font-medium'>{item.menuName}</span>
                            </a>
                        </li>);
                    })}
                </ul>
            </div>
            <div className="w-full px-4 mb-2">
                <div className='w-full h-0 border-b border-gray-100' />
            </div>
            <div className="w-full px-4 py-2">
                <ul className='w-full'>
                    {MenuNavbar.menu2.map((item, index) => {
                        let Icon = ReactIcons[item.iconName];
                        const isActive = GeneralUtility.isCurrentRoute(location, item.route);
                        return (<li className='mb-2' key={index}>
                            <a className={`px-2 py-2 flex items-center ${isActive ? 'bg-slate-300' : 'hover:bg-slate-200'} rounded w-full`} href={item.redirect}>
                                {Icon && <Icon size={item.sizeIcon} color={item.colorIcon} />}
                                <span className='inline-block ml-2 font-medium'>{item.menuName}</span>
                            </a>
                        </li>);
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
