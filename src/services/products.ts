import  axios, { AxiosRequestConfig } from "axios";
require('dotenv').config();


export const getProfile = async () => {
    const options: AxiosRequestConfig = {
            url: `${process.env.REACT_APP_GREETING_SERVICE}/profile`,
            method: "get",
            // withCredentials: true,
    }
    const result = await axios(options);
    return result
}