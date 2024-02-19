const BASE_IMAGE = import.meta.env.VITE_BASE_IMAGE;

export const platforms = [
    { name: "Tokopedia", image: BASE_IMAGE + "/marketplace/tokopedia.png", link: "https://www.tokopedia.com/" },
    { name: "Lazada", image: BASE_IMAGE + "/marketplace/shopee.png", link: "tokopedia.com" },
    { name: "Blibli", image: BASE_IMAGE + "/marketplace/blibli.png", link: "tokopedia.com" },
    { name: "TikTok", image: BASE_IMAGE + "/marketplace/tiktok.png", link: "tokopedia.com" },
];