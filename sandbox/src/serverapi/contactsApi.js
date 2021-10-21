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

export {contactsApi, appserverApi};


