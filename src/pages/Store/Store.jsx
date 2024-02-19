import React, { useEffect, useState } from 'react';
import IntegrateStore from "./components/IntegrateStore/IntegrateStore";
import AddStore from "./components/AddStore/AddStore";
import { Provider, useDispatch, useSelector } from 'react-redux';
import StoreHelper from '../../services/store-helper';
import reducerSlice from "./redux/reducer";
import MarketPlaceRepository from '../../repositories/MarketplaceRepository';
import TableStore from './components/TableStore';
import Cookies from "js-cookie";

const MainComponent = () => {

    const [accessMarketplace, setAccessMarketplace] = useState();

    const dataListMarketplace = async () => {
        const response = await MarketPlaceRepository.listStore()
        const listData = response.data
        console.log("first", listData)
        Cookies.set("accessToken", listData[0].accessToken)
        setAccessMarketplace(listData);
        return listData;
    }
    useEffect(() => {
        dataListMarketplace()
    },[])
    
    return (
        <div>
            <div className="flex items-center justify-between">
                <p className='font-semibold text-gray-800 text-2xl'>Daftar Toko</p>
                <div className='flex items-center'>
                    <IntegrateStore />
                    <AddStore />
                </div>
            </div>
            <div className="mt-5">
                <TableStore accessMarketplace={accessMarketplace} />
            </div>
        </div>
    );
};

const Store = () => {
    const store = StoreHelper.generateStoreState(reducerSlice);

    return (
        <Provider store={store}>
            <MainComponent />
        </Provider>
    );
};

export default Store;