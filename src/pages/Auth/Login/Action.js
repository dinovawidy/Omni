import CallApi from "../../../services/request-helper";
import Endpoint from "../../../services/endpoint";
import Cookies from "js-cookie";
import GeneralUtility from "../../../utils/general-utility";
const URL_ENDPOINT = import.meta.env.VITE_API;

const handleInputChange = (e, setCallback, setError) => {
    const value = e.target.value;
    if (value) {
        return setCallback(e.target.value);
    }
    setError();
};

const handleSubmit = async (form, setError) => {
    const { username, password } = form;
    const payload = {
        username,
        password
    };
    const reply = await CallApi({
        url: URL_ENDPOINT + Endpoint.login,
        method: "POST",
        data: payload
    });

    const { status, data, error, message } = reply;
    if (error) {
        return GeneralUtility.failedPopup({
            title: "Oops!",
            text: message
        });
    }

    if (status === 200) {
        const { token, username } = data;
        Cookies.set("token", token);
        setError({
            username: null,
            password: null
        });
        Cookies.set("username", username);
        return window.location.href = "/dashboard";
    }
};

export const Action = {
    handleInputChange,
    handleSubmit
};