import Endpoint from "../services/endpoint";
import CallApi from "../services/dummyHelper";
import ModelsOrderTiktok from "../pages/Orders/pages/TiktokOrders/models/ModelsOrderTiktok";

const BASE_DEV = import.meta.env.VITE_BASE_DEV;

const listOrder = async (data) => {
    const url = BASE_DEV + Endpoint.orders;
    const response = await CallApi({ url, method: "POST", data });
    const response1 = typeof response !== "undefined" ? response.data : null;
    const response2 =
        typeof response1 !== "undefined" && response1 !== null
        ? response1.data
        : null;

    const arrayListStore = [];
    for (let i = 0; i < response2.length; i++) {
        const element = response2[i];
        const orders = element.orders;
        for (let j = 0; j < orders.length; j++) {
            const order = orders[j];
            const item = new ModelsOrderTiktok({
                address: element.address ,
                buyerEmail: element.buyerEmail,
                buyerId: element.buyerId,
                orderStatus: element.orderStatus,
                paymentMethodName: element.paymentMethodName,
                phone: element.phone,
                totalAmount: element.totalAmount,
                shippingDiscountPlatform: element.shippingDiscountPlatform,
                shippingFee: element.shippingFee,
                totalOriginalPrice: element.totalOriginalPrice,
                price: order.price,
                productName: order.productName,
                sellerSku: order.sellerSku,
                skuImage: order.skuImage,
            });
            arrayListStore.push(item);
        }
    }

    let dataListOrder = {}
    dataListOrder.error = response1.error;
    dataListOrder.totalData = response1.totalData;
    dataListOrder.currentPage = response1.currentPage;
    dataListOrder.data = arrayListStore;
    return dataListOrder;
}

const OrderRepository = {
    listOrder,
}

export default OrderRepository;