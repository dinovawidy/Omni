import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register";
import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Product from "./pages/Product/Product";
import MasterProduct from "./pages/Product/pages/MasterProduct/MasterProduct";
import TokopediaProduct from "./pages/Product/pages/TokopediaProduct/TokopediaProduct";
import ShopeeProduct from "./pages/Product/pages/ShopeeProduct/ShopeeProduct";
import BlibliProduct from "./pages/Product/pages/BlibliProduct/BlibliProduct";
import TiktokProduct from "./pages/Product/pages/TiktokProduct/TiktokProduct";
import OrdersShopee from "./pages/Orders/pages/ShopeeOrders/OrdersShopee";
import OrdersTiktok from "./pages/Orders/pages/TiktokOrders/OrdersTiktok";
import OrdersBlibli from "./pages/Orders/pages/BlibliOrders/OrdersBlibli";
import OrdersTokopedia from "./pages/Orders/pages/TokopediaOrders/OrdersTokopedia";
import Store from "./pages/Store/Store";
import Chat from "./pages/Chat/Chat";
import Orders from "./pages/Orders/Orders";
import Authorize from "./pages/Auth/authorize";

import "./App.css";
import GeneralUtility from "./utils/general-utility";

export default function App() {
  const isAuthenticated = GeneralUtility.getToken();

  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/authorize" element={<Authorize />} />

      {isAuthenticated ?
        <Route Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route element={<Orders />}>
            <Route path="orders/tokopedia" element={<OrdersTokopedia />} />
            <Route path="orders/shopee" element={<OrdersShopee />} />
            <Route path="orders/blibli" element={<OrdersBlibli />} />
            <Route path="orders/tiktok" element={<OrdersTiktok />} />
          </Route>
          <Route element={<Product />}>
            <Route path="product/master" element={<MasterProduct />} />
            <Route path="product/tokopedia" element={<TokopediaProduct />} />
            <Route path="product/shopee" element={<ShopeeProduct />} />
            <Route path="product/blibli" element={<BlibliProduct />} />
            <Route path="product/tiktok" element={<TiktokProduct />} />
          </Route>
          <Route path="store" element={<Store />} />
          <Route path="chat" element={<Chat />} />
        </Route>
        : ""}
    </Routes >
  );
}