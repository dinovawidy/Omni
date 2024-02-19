const BASE_IMAGE = import.meta.env.VITE_BASE_IMAGE;

const menu = [
    {
        menuName: "tokopedia",
        image: BASE_IMAGE + "/marketplace/tokopedia.png",
        redirect: "/orders/tokopedia"
    },
    {
        menuName: "shopee",
        image: BASE_IMAGE + "/marketplace/shopee.png",
        redirect: "/orders/shopee"
    },
    {
        menuName: "blibli",
        image: BASE_IMAGE + "/marketplace/blibli.png",
        redirect: "/orders/blibli"
    },
    {
        menuName: "tiktok",
        image: BASE_IMAGE + "/marketplace/tiktok.png",
        redirect: "/orders/tiktok"
    },
];

const Tab = {
    menu
};

export default Tab;