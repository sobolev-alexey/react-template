import axios from 'axios';

const callApi = async (url, payload, customHeaders = null) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            ...customHeaders
        };

        const response = await axios.get(url, payload, { headers });
        return response?.data; 
    } catch (error) {
        return { error };
    }
}

export default callApi;