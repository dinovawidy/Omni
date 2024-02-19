import React from "react";
import CurrencyInput from "./CurrencyInput";
import StockInput from "./StockInput";
import { Action } from "../Action";

const TiktokTable = ({ items }) => {
  return (
    <div>
      <table className="table table-auto w-full font-sans text-zinc-500 bg-white">
        <thead>
          <tr className="">
            <th width="50" className="border-b text-center">No</th>
            {/* <th className="border-b text-left py-2 px-1">Images</th> */}
            <th className="border-b text-left py-2 px-1">
              Product
            </th>
            <th width="150" className="border-b text-right py-2 px-3">
              price
            </th>
            <th width="150" className="border-b text-right py-2 px-3">
              Stock
            </th>
            <th width="150" className="border-b text-right py-2 px-1">
              SKU
            </th>
            {/* <th className="border-b py-2 px-1 text-right">Aksi</th> */}
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item, index) => (
              <tr className="border-1 border-b" key={index}>
                <td className="py-2 px-1 text-center">{index + 1}</td>
                {/* <td>{item.images}</td> */}
                <td className="py-2 px-1 text-left">{item.name}</td>
                <td className="py-2 px-1">
                  <CurrencyInput
                    value={item.price}
                    onChange={(value) => {
                      Action.updatePrice(value, item);
                    }} />
                </td>
                <td className="py-2 px-1">
                  <StockInput
                    value={item.stock}
                    onChange={(value) => {
                      Action.updateStock(value, item);
                    }} />
                </td>
                <td className="py-2 px-1 text-right">{item.sku}</td>
                {/* <td className="py-2 px-1 text-right">{item.images}</td> */}
              </tr>
            ))
          ) : (
            <tr >
              <td colSpan={6} className="py-2 px-1 text-center">No Products Available!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TiktokTable;
