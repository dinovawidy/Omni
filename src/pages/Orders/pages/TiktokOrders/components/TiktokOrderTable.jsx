import React, { useEffect, useState } from "react";
import GeneralUtility from "../../../../../utils/general-utility";
import { FaEye } from "react-icons/fa";

const TiktokOrderTable = ({ showDetail, listOrder }) => {

  console.log("tanya", listOrder)
  return (
    <div>
      <table className="table table-auto w-full font-sans text-zinc-500 bg-white">
        <thead>
          <tr className="">
            <th width="50" className="border-b">
              No
            </th>
            <th width="700" className="border-b text-left py-2 min-w-[200px]">Nama Produk</th>
            <th width="100" className="border-b text-left py-2 ">SKU</th>
            <th width="200" className="border-b text-left py-2 ">Harga</th>
            <th width="200" className="border-b text-left py-2 ">Total Bayar</th>
            <th width="150" className="border-b text-left py-2">Email</th>
            <th width="100" className="border-b py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {listOrder &&
            listOrder.map((item, index) => (
              <tr key={index} className="border-1">
                <td width="50" className="py-2 text-center border-b">{index + 1}</td>
                <td width="700" className="py-2 relative border-b text-left min-w-[200px]">{item.productName ? item.productName : ""}</td>
                <td width="100" className="py-2 border-b text-left">{item.sellerSku}</td>
                <td width="200" className="py-2 border-b text-left">Rp. {GeneralUtility.addCommas(item.price)}</td>
                <td width="200" className="py-2 border-b text-left">Rp. {GeneralUtility.addCommas(item.totalAmount)}</td>
                <td width="150" className="py-2 border-b text-left max-w-[300px] overflow-hidden">{item.buyerEmail}</td>
                <td width="100" className="py-2 border-b text-center">
                
                  <div className="relative cursor-pointer inline-block px-4 py-2 text-sm font-medium leading-5 
                  text-white transition-all duration-300 border border-transparent rounded-md shadow-md bg-slate-100 hover:transform hover:-translate-y-1 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
                  onClick={() => showDetail}>
                    <span className="absolute inset-0 bg-slate-200 opacity-50 rounded-md"></span>
                    <FaEye color="blue" />
                  </div>
            
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TiktokOrderTable;
