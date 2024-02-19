import React from "react";

const TableStore = ({ accessMarketplace }) => {

  return (
    <div>
      <table className="table table-auto w-full font-sans text-zinc-500 bg-white items-center">
        <thead>
          <tr className="">
            <th width="50" className="border-b">
              No
            </th>
            <th className="border-b text-left py-2">Nama toko</th>
            <th width="150" className="border-b text-left py-2">
              Status
            </th>
            <th width="150" className="border-b text-left py-2">
              Chat Fitur
            </th>
            <th className="border-b py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {accessMarketplace && accessMarketplace.map((item, index) => (
            <tr key={index} className="border-1 items-center">
              <td className="py-2 text-center border-b">{index+1}</td>
              <td className="py-2 flex "> <img className="w-5 h-5 mr-2" src={`data:image/jpg;base64,${item.icon}`} alt={item.sellerName} /> {item.sellerName}</td>
              <td className="py-2 border-b text-left"></td>
              <td className="py-2 border-b text-left"></td>
              <td className="py-2 border-b text-center"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableStore;
