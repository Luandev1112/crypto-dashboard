import axios from 'axios';
import _get from "lodash/get";

const options = {
    withCredentials: true
};

const handleHTTPSuccess = response => response.data || response;

const handleHTTPError = error => {
    throw _get(error, "response.data", error);
};

//For DB APIS
export const dbAxios = axios.create({
    baseURL: process.env.DB_API_ROOT,
});

export const dbHttpGet = (path, params) => dbAxios.get(path, { params, ...options }).then(handleHTTPSuccess).catch(handleHTTPError);
export const dbHttpPost = (path, body, config) => dbAxios.post(path, body, { ...options, ...config }).then(handleHTTPSuccess).catch(handleHTTPError);
export const dbHttpPatch = (path, body) => dbAxios.patch(path, body, options).then(handleHTTPSuccess).catch(handleHTTPError);
export const dbHttpPut = (path, body) => dbAxios.put(path, body, options).then(handleHTTPSuccess).catch(handleHTTPError);
export const dbHttpDelete = (path, body) => dbAxios.delete(path, body, options).then(handleHTTPSuccess).catch(handleHTTPError);

//For external APIs
export const httpGet = (path, params) => axios.get(path, { params, ...options }).then(handleHTTPSuccess).catch(handleHTTPError);
export const httpPost = (path, body, config) => axios.post(path, body, { ...options, ...config }).then(handleHTTPSuccess).catch(handleHTTPError);
export const httpPatch = (path, body) => axios.patch(path, body, options).then(handleHTTPSuccess).catch(handleHTTPError);
export const httpPut = (path, body) => axios.put(path, body, options).then(handleHTTPSuccess).catch(handleHTTPError);
export const httpDelete = (path, body) => axios.delete(path, body, options).then(handleHTTPSuccess).catch(handleHTTPError);