import axios from 'axios'

const httpService = axios.create()

// Add a request interceptor
httpService.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('Request-Url: ', config.url)
    console.log('Request-Headers: ', config.headers)
    console.log('Request-Data: ', config.data)

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
httpService.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    console.log('Response-Headers: ', response.headers)
    console.log('Response-Status: ', response.status)
    console.log('Response-Data: ', response.data)


    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });



export default httpService
