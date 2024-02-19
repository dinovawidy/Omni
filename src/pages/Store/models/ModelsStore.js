function ModelsStore({ accessToken, expire, platform, refreshToken, sellerName, icon }) {
    let obj = {};
    obj.accessToken = accessToken;
    obj.expire = expire;
    obj.platform = platform;
    obj.refreshToken = refreshToken;
    obj.sellerName = sellerName;
    obj.icon = icon;
    return obj;
  }
  
  export default ModelsStore;
  