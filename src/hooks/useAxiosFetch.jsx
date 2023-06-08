import { useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your base URL
  });

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use((config) => {
      // You can add custom request headers or modify the request config here if needed
      return config;
    });

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        // You can handle response errors here if needed
        throw error; // Rethrow the error to maintain consistent error handling
      }
    );

    return () => {
      // Clean up interceptors when the component unmounts
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [axiosInstance]);

  return axiosInstance;
};

export default useAxiosFetch;
