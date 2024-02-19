import React, { useEffect, useState } from "react";
import OrderRepository from "../../../repositories/OrdersRepository";

const TableOrder = ({listOrder}) => {


  return (
    <div>
      <table className="table table-auto w-full font-sans text-zinc-500 bg-white">
        <thead>
          
          <tr className="">
            <th width="50" className="border-b">No</th>
            <th className="border-b text-left py-2">Nama toko</th>
            <th className="border-b text-left py-2">
              Tanggal
            </th>
            <th className="border-b text-left py-2">
              Kode Pesanan
            </th>
            <th width="150" className="border-b text-left py-2">
              Nama Penerima
            </th>
            <th width="150" className="border-b text-left py-2">
              Harga
            </th>
            <th width="150" className="border-b text-left py-2">
              Jumlah
            </th>
            <th className="border-b py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
        {listOrder && listOrder.map((item, index) => (
          <tr key={index} className="border-1">
            <td className="py-2 text-center border-b">{index + 1}</td>
            <td></td>
            <td className="py-2 border-b text-left">{item.create_time}</td>
            <td className="py-2 border-b text-left">{item.order_id}</td>
            <td className="py-2 border-b text-center">{item.recipient_address.name}</td>
            <td className="py-2 border-b text-center">{item.order_line_list[0].sale_price}</td>
          </tr>
            ))}
        </tbody>

      </table>
    </div>
  );
};

export default TableOrder;
