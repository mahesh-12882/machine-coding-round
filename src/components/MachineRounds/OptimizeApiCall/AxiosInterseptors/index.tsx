// axiosInstance.js
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
//   method:"get",
  baseURL: 'https://dummyjson.com', // Base URL for your API
  timeout: 10000, // Timeout duration,
  headers: {'Content-Type': 'application/json'}
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
      // Add an Authorization header, or any other logic before the request is sent
    //   const token = localStorage.getItem('authToken');
    //   if (token) {
    //     config.headers['Authorization'] = `Bearer ${token}`;
    //   }
    console.log("config",config)
      return config;
    },
    (error) => {
      // Handle any request errors before they are sent
      return Promise.reject(error);
    }
  );



  
// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
      // Optionally modify the response data before it reaches the component
      return response;
    },
    (error) => {
      // Handle global response errors
      if (error.response) {
        // For example, if the token expires, log the user out
        if (error.response.status === 401) {
          // Redirect to login page or handle authentication errors
          console.error('Unauthorized access - redirecting to login');
          // Do some logout or redirect logic here
        }
        // Handle other HTTP errors (e.g., 500, 404)
        console.error('API Error: ', error.response.status, error.response.data);
      } else {
        // Handle cases where there's no response (e.g., network error)
        console.error('Network Error: ', error.message);
      }
  
      // Optionally, you could use a global error handling or notification system
      return Promise.reject(error); // Ensure the error propagates to the component
    }
  );
  
  export default axiosInstance;




// const API_URL = 'https://api.example.com/resource';
// const BEARER_TOKEN = 'your_bearer_token_here';

// axios.get(API_URL, {
//     headers: {
//         'Authorization': `Bearer ${localStorage.getItem('authtoken')}`
//     }
// })
// .then(response => {
//     console.log('Data:', response.data);
// })
// .catch(error => {
//     console.error('Error:', error);
// });