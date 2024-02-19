import React, { useEffect, useState } from 'react'
import Table from '../../components/Table/Table';
import Card from '../../components/Card/Card';
import SearchInput from '../../components/SearchInput/SearchInput';
import OrderRepository from '../../repositories/OrdersRepository';
import TabMenu from './components/TabMenu';
import Tab from './static/menu';
import { Outlet } from 'react-router-dom';
import DropdownFilter from '../../components/DropdownFilter/DropdownFilter';

const Orders = () => {

  const [listOrder, setListOrder] = useState();
  const [searchValue, setSearchValue] = useState('');




  
  const handleInputChange = (value) => {
    setSearchValue(value);
  };


  return (
    <div>
        <div className="bg-white mt-5 p-3 flex mb-3 rounded-md">
        <SearchInput placeholder="Search by recipient name..." onInputChange={handleInputChange} />
        <DropdownFilter />
        </div>
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
        
    </div>
  )
}

export default Orders