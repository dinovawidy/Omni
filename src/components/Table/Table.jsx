import React from "react";

const Table = () => {
  return (
    <div>
      <table className="table table-auto w-full font-sans text-zinc-500 bg-white">
        <thead>
          <tr className="">
            <th width="50" className="border-b">No</th>
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
          <tr className="border-1">
            <td className="py-2 text-center border-b">1</td>
            <td>tt</td>
            <td className="py-2 border-b text-left">ere</td>
            <td className="py-2 border-b text-left">ere</td>
            <td className="py-2 border-b text-center">n</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
