import  axios from "axios";

require('dotenv').config();
const backendUrl = "http://40.76.193.65:8080";

export const getEligibility = async (formData: any) => {
    const result = await axios.post(`${backendUrl}/eligibility`, {
        ...formData
    });
    console.log("axios getEligibility", result);
    return result.data;
}