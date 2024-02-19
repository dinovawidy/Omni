export default function TiktokProductListModel({
    id,
    images,
    name,
    price,
    stock,
    sku,
    wareHouseId,
    skuId
}) {
    return {
        id,
        images,
        name,
        price,
        stock,
        sku,
        wareHouseId,
        skuId
    };
}