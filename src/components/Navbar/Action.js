import Cookies from "js-cookie";

const logout = () => {
    Cookies.remove("token");
    return window.location.href = "/";
};

const changeDropDown = (dropDown, setDropDown) => {
    setDropDown(!dropDown);
};

const handleClickOutside = (e, dropdownRef, setDropDown) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropDown(false);
    }
};

export const Action = {
    logout,
    changeDropDown,
    handleClickOutside
};