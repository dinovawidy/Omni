import TiktokRepository from "../../../../repositories/TiktokRepository";
import GeneralUtility from "../../../../utils/general-utility";
import TiktokProductListModel from "./model/TiktokProductListModel";

const handleInputChange = ({ value, setSearchValue }) => {
    setSearchValue(value);
};

const productListTiktok = async ({ setProductList }) => {
    const data = {
        offset: 1,
        limit: 50,
    };
    const response = await TiktokRepository.listProduct(data);
    const result = [];
    for (let row of response) {
        const item = TiktokProductListModel({
            id: safetyString(row.id),
            images: safetyString(row.thumbnail),
            name: safetyString(row.productName),
            price: safetyString(GeneralUtility.formatCurrency(row.originalPrice)),
            stock: safetyString(row.stock),
            sku: safetyString(row.sku),
            skuId: safetyString(row.skuId),
            wareHouseId: safetyString(row.wareHouseId),
        });
        result.push(item);
    }
    setProductList(result);
};

const safetyString = (value) => {
    return value || "";
};

const formatPrice = (item) => {
    const { currency, originalPrice } = item;
    return currency + " " + originalPrice;
};

const updatePrice = async (value, item) => {
    const newPrice = GeneralUtility.removeFormatCurrency(value);
    const payload = {
        productId: item.id,
        skuId: item.skuId,
        originalPrice: newPrice
    };
    const reply = await TiktokRepository.updatePrice(payload);
    const { error, status } = reply;
    if (!error) {
        GeneralUtility.successPopup({
            title: "Successful",
            text: "Price updated successfully!"
        });
    }
};

const updateStock = async (value, item) => {
    const payload = {
        productId: item.id,
        skuId: item.skuId,
        availableStock: value,
        warehouseId: item.warehouseId,
    };
    const reply = await TiktokRepository.updateStock(payload);
    const { error } = reply;
    if (!error) {
        GeneralUtility.successPopup({
            title: "Successful",
            text: "Stock updated successfully!"
        });
    }
};

export const Action = {
    handleInputChange,
    productListTiktok,
    updatePrice,
    updateStock
};