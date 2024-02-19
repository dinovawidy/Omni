import React, { useEffect, useState } from "react";
import TiktokTable from "./components/TiktokTable";
import SearchInput from "../../../../components/SearchInput/SearchInput";
import DropdownFilter from "../../../../components/DropdownFilter/DropdownFilter";
import { Action } from "./Action";

const TiktokProduct = () => {
  const [searchValue, setSearchValue] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Action.productListTiktok({ setProductList });
  }, []);

  return (
    <>
      {/* <div className="bg-white mt-5 p-3 flex">
        <SearchInput
          value={searchValue}
          placeholder="Search Name of Product"
          onInputChange={(value) => Action.handleInputChange({ value, setSearchValue })}
        />
        <DropdownFilter />
      </div> */}
      <div className="bg-white rounded-xl p-4 mt-4">
        {productList.length > 0 ? (
          <TiktokTable items={productList} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default TiktokProduct;
