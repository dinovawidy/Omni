import React from 'react';
import { Outlet } from 'react-router-dom';
import TabMenu from "./components/TabMenu";
import Tab from "./static/menu";

const Product = () => {
    return (
        <div>
            <div className='flex items-center'>
                <ul>
                    {Tab.menu.map((item, index) => (
                        <li className='inline-block' key={index}>
                            <TabMenu item={item} />
                        </li>
                    ))}
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Product;