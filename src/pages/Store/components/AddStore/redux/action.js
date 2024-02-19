import MarketPlaceRepository from "../../../../../repositories/MarketplaceRepository";
import { setMarketPlace } from "./reducer";

const marketPlace = async (dispatch) => {
    const response = await MarketPlaceRepository.addMarketplace();
    console.log("action", response)
    dispatch(setMarketPlace(response))
};

const Action = {
    marketPlace,
};

export default Action;