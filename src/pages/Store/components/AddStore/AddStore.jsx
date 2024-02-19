import React, { useEffect, useRef, useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { platforms } from "../../static/platforms";
import { Provider, useDispatch } from "react-redux";
import StoreHelper from "../../../../services/store-helper";
import reducerSlice from "./redux/reducer";
import MarketPlaceRepository from "../../../../repositories/MarketplaceRepository";

const AddStore = () => {
  const store = StoreHelper.generateStoreState(reducerSlice);

  const MainComponent = () => {
    const dispatch = useDispatch();

    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedPlatform, setSelectedPlatform] = useState(null);
    const [marketPlace, setMarketPlace] = useState();
    const [tiktokAuth, setTiktokAuth] = useState();

    const dataMarketPlace = async () => {
      const response = await MarketPlaceRepository.addMarketplace();
      setMarketPlace(response);
    };




    const handlePlatformSelect = async (marketPlace) => {
      setSelectedPlatform(marketPlace.name);
      
      if (marketPlace.name === "TikTok") {
        if (marketPlace.url) {
          const tiktokResponse = await MarketPlaceRepository.tiktokAuth(marketPlace.url);
          console.log("nama", tiktokResponse)
          const urlTiktok = tiktokResponse.url
          setTiktokAuth(urlTiktok);
          if (tiktokResponse) {
            window.location.href = tiktokResponse.url;

            {/*
          window.location.href = encodeURIComponent(tiktokResponse.data.url);
            handleUrlChange();
          */}


          } else {
            console.error("TikTok URL is not available in the response");
          }
        }

      } else if (marketPlace.url) {

      } else {
        console.error(`URL not available for ${marketPlace.name}`);
      }
    };

    const dropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
      dataMarketPlace();
    };

    const closeDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener("click", closeDropdown);
      return () => {
        document.removeEventListener("click", closeDropdown);
      };
    }, []);


    return (
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <button
          onClick={dropdownToggle}
          className="ml-2 rounded-xl bg-blue-500 hover:bg-blue-400 px-3 py-2 text-white font-medium flex items-center"
        >
          <span className="mr-1">Add Store</span>
          <IoCaretDown />
        </button>

        {isDropdownOpen && (
          <div className="bg-white">
            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {marketPlace &&
                  marketPlace.map((item) => {
                    const platform = platforms.find(
                      (platformItem) => platformItem.name === item.name
                    );
                    return (
                      <button
                        key={item.id}
                        onClick={() => handlePlatformSelect(item)}
                        className={`${selectedPlatform === item.name ? "bg-gray-100" : ""
                          } 
                  flex items-center px-4 py-2 text-sm text-gray-700 w-full text-left`}
                        role="menuitem"
                      >
                        <img
                          src={`data:image/jpg;base64,${item.icon}`}
                          alt={item.name}
                          className="w-6 h-6 mr-2"
                        />
                        {item.name}
                      </button>

                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default AddStore;
