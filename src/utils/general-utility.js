import Cookies from "js-cookie";
import Swal from "sweetalert2";

const isCurrentRoute = (location, endpoint) => {
    return location.pathname.startsWith(endpoint);
};

const getToken = () => {
    const token = Cookies.get("token");
    if (!token) {
        return null;
    }
    return token;
};

const getAccessToken = () => {
    const token = Cookies.get("accessToken");
    if (!token) {
        return null;
    }
    return token;
};

const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const removeFormatCurrency = (value) => {
    return value.replace(/,/g, "");
};

const successPopup = ({ title, text }) => {
    Swal.fire({
        icon: "success",
        title,
        text
    });
};

const failedPopup = ({ title, text }) => {
    Swal.fire({
        icon: "error",
        title,
        text
    });
};

const addCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const GeneralUtility = {
    isCurrentRoute,
    getToken,
    getAccessToken,
    formatCurrency,
    removeFormatCurrency,
    successPopup,
    failedPopup,
    addCommas,
};

export default GeneralUtility;