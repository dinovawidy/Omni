const menu1 = [
    {
        "iconName": "IoAlbums",
        "sizeIcon": 20,
        "colorIcon": "#3652AD",
        "menuName": "Dashboard",
        "route": "/dashboard",
        "redirect": "/dashboard"
    },
    {
        "iconName": "IoNewspaperSharp",
        "sizeIcon": 20,
        "colorIcon": "#FB6340",
        "menuName": "Orders",
        "route": "/orders",
        "redirect": "/orders/tokopedia"
    },
    {
        "iconName": "IoChatbubbles",
        "sizeIcon": 20,
        "colorIcon": "#FF6868",
        "menuName": "Chat",
        "route": "/chat",
        "redirect": "/chat"
    }
];

const menu2 = [
    {
        "iconName": "IoBagHandle",
        "sizeIcon": 20,
        "colorIcon": "#FF9843",
        "menuName": "Product",
        "route": "/product",
        "redirect": "/product/master"
    },
    {
        "iconName": "IoStorefront",
        "sizeIcon": 20,
        "colorIcon": "#597E52",
        "menuName": "Store",
        "route": "/store",
        "redirect": "/store"
    }
];

const MenuNavbar = {
    menu1,
    menu2
};

export default MenuNavbar;