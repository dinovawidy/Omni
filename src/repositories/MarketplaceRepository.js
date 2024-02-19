import ModelsOrder from "../pages/Orders/ModelsOrder";
import ModelsStore from "../pages/Store/models/ModelsStore";
import Endpoint from "../services/endpoint";
import CallApi from "../services/request-helper";

const BASE_API = import.meta.env.VITE_LOCAL_API;
const BASE_LORDGENT = import.meta.env.VITE_LORDGENT_API;
const BASE_DEV = import.meta.env.VITE_BASE_DEV;

const addMarketplace = async () => {
  const url = BASE_DEV + Endpoint.marketPlace;
  const response = await CallApi({ url, method: "GET" });
  const response1 = typeof response != "undefined" ? response.data : null;
  console.log("market", response1)
  return response1;

  {/*
*/}


};
const tiktokAuth = async (tiktokUrl) => {
  const url = BASE_DEV + tiktokUrl;
  const response = await CallApi({ url, method: "GET" });
  const response1 = typeof response != "undefined" ? response.data : null;
  
  return response1;
}

const accessTokenTiktok = async (code) => {
  const url = BASE_DEV + Endpoint.accessTokenTiktok;
  const data =  { code }
  const response = await CallApi({ url, method: "POST", data, withCredentials: true });
  const response1 = typeof response != "undefined" ? response.data : null;
  const response2 =
    typeof response1 != "undefined" && response1 != null
      ? response1.data
      : null;
  return response;
  
}

const listStore = async () => {
  const url = BASE_DEV + Endpoint.accessMarketplace;
  const response = await CallApi({ url, method: "GET" });
  const response1 = typeof response != "undefined" ? response.data : null;
  const accessListStore = [];
  for (let i = 0; i < response1.length; i++) {
    const element = response1[i];
    const item = new ModelsStore({
      accessToken: element.accessToken,
      expire: element.expire,
      platform: element.platform,
      refreshToken: element.refreshToken,
      sellerName: element.sellerName,
      icon: element.icon,
    });
    accessListStore.push(item);
  }
  
  let dataListStore = {};
  dataListStore.error = response.error;
  dataListStore.data = accessListStore;
  return dataListStore;
}

const MarketPlaceRepository = {
  addMarketplace,
  tiktokAuth,
  accessTokenTiktok,
  listStore,
};

export default MarketPlaceRepository;
