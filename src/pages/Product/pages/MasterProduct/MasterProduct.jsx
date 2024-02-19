import React from 'react';

const MasterProduct = () => {
    return (
        <>
            <div className='mt-4 grid grid-cols-3 gap-4'>
                <div className="rounded-xl bg-white p-4 ">
                    <p className='font-bold mb-2'>
                        <span className='text-md'>Rp </span>
                        <span className='text-3xl'>80.000.000</span>
                    </p>
                    <p className='text-sm font-medium capitalize text-slate-400'>total inventory</p>
                </div>
                <div className="rounded-xl bg-white p-4 ">
                    <p className='font-bold mb-2 text-3xl'>
                        20
                    </p>
                    <p className='text-sm font-medium capitalize text-slate-400'>total barang</p>
                </div>
                <div className="rounded-xl bg-white p-4 ">
                    <p className='font-bold mb-2 text-3xl'>
                        2
                    </p>
                    <p className='text-sm font-medium capitalize text-slate-400'>total sku</p>
                </div>
            </div>
            <div className='bg-white rounded-xl p-4 mt-4'>
                MasterProduct
            </div>
        </>
    );
};

export default MasterProduct;