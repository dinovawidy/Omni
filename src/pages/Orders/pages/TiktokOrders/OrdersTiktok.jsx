import React, { useEffect, useState } from "react";
import SearchInput from "../../../../components/SearchInput/SearchInput";
import DropdownFilter from "../../../../components/DropdownFilter/DropdownFilter";
import OrderRepository from "../../../../repositories/OrdersRepository";
import TiktokOrderTable from "./components/TiktokOrderTable";
import Card from "../../../../components/Card/Card";

const OrdersTiktok = () => {

  const [searchValue, setSearchValue] = useState('');
  const [listOrder, setListOrder] = useState([]);
  const [pageOrder, setPageOrder] = useState();
  const [totalOrderData, setTotalOrderData] = useState(0);
  const [showDetail, setShowDetail] = useState(false);


const dataListOrder = async () => {
  const data = {
    limit: 100,
  }
  const response = await OrderRepository.listOrder(data);
  const res = response.data
  

    {/*
      let title = "";
  res.forEach((item, index) => {

    if(item.order_status === 100 ) {
      title = "Belum Bayar"
      console.log("Belum Bayar", item.order_id)
    } else if(item.order_status === 114) {
      title = "Dalam Pengiriman"
      console.log("Dalam Pengiriman", item.order_id)
    } else if(item.order_status === 140) {
      title = "Pesanan Batal"
      console.log("Pesanan Batal", item.order_id)
    } else if(item.order_status === 130) {
      title ="Pesanan Selesai"
      console.log("Pesanan Selesai", item.order_id)
    } else if(item.order_status === 105) {
      title = "Pesanan Ditahan"
      console.log("Pesanan Ditahan", item.order_id)
    }
})
*/}

  setListOrder(res);
  setPageOrder(response.currentPage)
  setTotalOrderData(response.totalData)
}

  const handleInputChange = (value) => {
    setSearchValue(value);
  };

  const handleShowDetail = () => {
    setShowDetail(true);
  }

  useEffect(() => {
    listOrder;
    totalOrderData;
    pageOrder;
    dataListOrder();
    handleShowDetail();
  },[listOrder, totalOrderData, pageOrder])

  useEffect(() => {
    totalOrderData
  }, [totalOrderData]);

  return (
    <div className="">
      
      <div className="flex gap-3">
        <Card totalData={totalOrderData} listOrder={listOrder} bg = "bg-green-600" title = "Semua"/>
        <Card totalData = {0} listOrder={listOrder} bg = "bg-blue-500" title = "Dalam Pengiriman"/>
        <Card totalData={0} listOrder={listOrder} bg = "bg-orange-500" title = "Permintaan Batal"/>
        <Card totalData={0} listOrder={listOrder} bg = "bg-slate-500" title = "Pesanan diretur"/>
        <Card totalData={0} listOrder={listOrder} bg = "bg-red-600" title = "Pesanan dikomplain"/>
        <Card totalData={totalOrderData} listOrder={listOrder} bg = "bg-slate-500" title = "Belum Bayar"/>
        </div>
        <div className="bg-white rounded-xl p-4 mt-4">
          
            <TiktokOrderTable showDetail={showDetail} listOrder={listOrder} />
        </div>
    </div>
  );
};

export default OrdersTiktok;
