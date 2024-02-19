import Endpoint from "../services/endpoint";
import CallApi from "../services/request-helper";
const BASE_DEV = import.meta.env.VITE_BASE_DEV;

const listProduct = async (data) => {
    const url = BASE_DEV + Endpoint.productTiktok;
    const response = await CallApi({ url, method: "POST", data });
    const response1 = typeof response != "undefined" ? response.data : null;
    const response2 = typeof response1 != "undefined" && response1 != null ? response1 : null;
    return response2;
};

const updatePrice = async (data) => {
    const url = BASE_DEV + Endpoint.updatePriceTiktok;
    const response = await CallApi({ url, method: "PUT", data });
    return response;
};

const updateStock = async (data) => {
    const url = BASE_DEV + Endpoint.updateStockTiktok;
    const response = await CallApi({ url, method: "PUT", data });
    return response;
};

const TiktokRepository = {
    listProduct,
    updatePrice,
    updateStock
};

export default TiktokRepository;