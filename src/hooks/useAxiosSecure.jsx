import axios from "axios";

 const axiosSecure = axios.create({
    baseURL: 'https://ghotok-online-server.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;