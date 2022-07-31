import axios from 'axios';
import { apiNames } from '../constants'; 


const getApiName = async (name) => {
    try {
        const response = await axios.get(`https://api.factoryfour.com/${name}/health/status`);
        return response.data;
    } catch (error) {
        return ({
            message: error.message,
            nameApi:name
        });
    }
};


export const getApis = async () => {
    let factoryList = [];
    for (let name of apiNames) {
        const api = await getApiName(name);
        factoryList.push(api)
    }
    return factoryList;
};