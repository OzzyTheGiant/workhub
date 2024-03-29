import axios from 'axios';

const api = axios.create({
	baseURL:getBaseUrl(),
	timeout:'15000',
    responseType:'json',
    responseEncoding:'utf8',
	withCredentials:true
});

export function getBaseUrl() {
	if (window.location.hostname === "localhost") {
		return "http://localhost:3000/";
	} else {
		return "http://workhub/api";
	}
}

const ajax = {
	get: (url, config) => api.get(url, config),
	post: (url, data, config) => api.post(url, data, config),
	put: (url, data, config) => api.put(url, data, config),
	delete: (url, config) => api.delete(url, config)
};

export default ajax;

