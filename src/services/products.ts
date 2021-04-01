import  axios, { AxiosRequestConfig } from "axios";

require('dotenv').config();


export const getPrediction = async () => {
    const options: AxiosRequestConfig = {
            url: `${process.env.REACT_APP_RULE_ENGINE_SERVICE}/predict`,
            method: "get",
            
    }
    const result = await axios(options);
    return result
}