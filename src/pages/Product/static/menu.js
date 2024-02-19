const BASE_IMAGE = import.meta.env.VITE_BASE_IMAGE;

const menu = [
    {
        menuName: "master",
        image: BASE_IMAGE + "/marketplace/master-product.png",
        redirect: "/product/master"
    },
    {
        menuName: "tokopedia",
        image: BASE_IMAGE + "/marketplace/tokopedia.png",
        redirect: "/product/tokopedia"
    },
    {
        menuName: "shopee",
        image: BASE_IMAGE + "/marketplace/shopee.png",
        redirect: "/product/shopee"
    },
    {
        menuName: "blibli",
        image: BASE_IMAGE + "/marketplace/blibli.png",
        redirect: "/product/blibli"
    },
    {
        menuName: "tiktok",
        image: BASE_IMAGE + "/marketplace/tiktok.png",
        redirect: "/product/tiktok"
    },
];

const Tab = {
    menu
};

export default Tab;