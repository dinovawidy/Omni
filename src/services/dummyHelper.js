import axios from "axios";
import GeneralUtility from "../utils/general-utility";
import Endpoint from "./endpoint";

export default async function CallApi({ url, method, data }) {
  let headers = {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*"
  };


  if (!isSignInUrl(url)) {
    const accessToken = GeneralUtility.getAccessToken();
    const token = GeneralUtility.getToken();
    headers.authorization = `Bearer ${token}`;
    headers.access_token = accessToken;
  }

  const response = await axios({ url, method, data, headers })
    .catch((err) => err.response);

  if (response.status > 300) {
    return handleErrorStatus(response);
  } else {
    return {
      error: false,
      status: response.status,
      message: response.data.message,
      data: response.data,
    };
  }
}

const isSignInUrl = (url) => {
  return url.includes(Endpoint.login);
};

const handleErrorStatus = (response) => {
  let res = {
    error: true,
    status: "",
    message: "",
    data: "",
    error_message: "",
  };

  if (response.status === 400 || response.status === 403 || response.status === 500) {
    // Bad request or internal server error
    res = {
      error: true,
      status: response.status,
      message: response.data.message,
      data: response.data,
      error_message: response.data.errors,
    };
    return res;
  }
};