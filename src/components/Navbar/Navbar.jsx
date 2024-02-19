import React, { useState, useRef, useEffect } from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { Action } from './Action';
import Cookies from 'js-cookie';

const Navbar = () => {
    const BASE_IMAGE = import.meta.env.VITE_BASE_IMAGE;
    const [dropDown, setDropDown] = useState(false);
    const dropdownRef = useRef(null);
    const username = Cookies.get("username")

    useEffect(() => {
        document.addEventListener("mousedown", (e) => Action.handleClickOutside(e, dropdownRef, setDropDown));
        return () => {
            document.removeEventListener("mousedown", (e) => Action.handleClickOutside(e, dropdownRef, setDropDown));
        };
    }, []);

    return (
        <div className="px-6 py-4 bg-blue-900 flex items-center justify-between">
            <div>
                <IoMenu size={28} color="#ffffff" className="cursor-pointer" />
            </div>
            <div className='relative' ref={dropdownRef}>
                <div
                    onClick={() => Action.changeDropDown(dropDown, setDropDown)}
                    className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-800 cursor-pointer">
                    <img src={BASE_IMAGE + "/avatar.jpg"} alt="" className="w-7 h-7 rounded-full" />
                    <span className="inline-block ml-3 text-white font-semibold">{username}</span>
                    <div className="ml-2">
                        <div className="w-0 h-0 border-solid border-3 border-transparent border-t-white border-l-white transform rotate-45"></div>
                    </div>
                </div>
                {dropDown ? (
                    <div className="absolute right-0 top-[50px] rounded-md bg-white py-1 min-w-30">
                        <ul>
                            <li className='flex items-center px-4 py-2 hover:bg-slate-50 hover:cursor-pointer'>
                                <IoIosPerson />
                                <span className='inline-block ml-2'>Profile</span>
                            </li>
                            <li
                                onClick={() => Action.logout()}
                                className='flex items-center px-4 py-2 hover:bg-slate-50 hover:cursor-pointer'>
                                <IoLogOutOutline />
                                <span className='inline-block ml-2'>Logout</span>
                            </li>
                        </ul>
                    </div>
                ) : ""}
            </div>
        </div>
    );
};

export default Navbar;
