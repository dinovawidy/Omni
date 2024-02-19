function ModelsOrderTiktok({
  address,
  buyerEmail,
  buyerId,
  orderStatus,
  paymentMethodName,
  phone,
  totalAmount,
  shippingDiscountPlatform,
  shippingFee,
  totalOriginalPrice,
  price,
  productName,
  sellerSku,
  skuImage,
}) {
  let obj = {};
  obj.address = address;
  obj.buyerEmail = buyerEmail;
  obj.buyerId = buyerId;
  obj.orderStatus = orderStatus;
  obj.paymentMethodName = paymentMethodName;
  obj.phone = phone;
  obj.totalAmount = totalAmount;
  obj.shippingDiscountPlatform = shippingDiscountPlatform;
  obj.shippingFee = shippingFee;
  obj.totalOriginalPrice = totalOriginalPrice;
  obj.price = price;
  obj.productName = productName;
  obj.sellerSku = sellerSku;
  obj.skuImage = skuImage;
  return obj;
}

export default ModelsOrderTiktok;
