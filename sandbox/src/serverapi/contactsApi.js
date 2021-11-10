import axios from 'axios';

const contactsApi = axios.create(
    {
        baseURL: "http://localhost:3006"
    }
);

const appserverApi = axios.create(
    {
        baseURL: "http://localhost/appserver/api/his/wsp"        
    }
);

const fakeproductsApi = axios.create(
    {
        baseURL: "https://fakestoreapi.com"        
    }
);

const loginApi = axios.create(
    {
        baseURL: "http://localhost:3001/"        
    }
);

export {contactsApi, appserverApi, fakeproductsApi, loginApi};


