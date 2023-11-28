// api, axios (axios secure), tan stack 

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useFavourites = () => {
    const axiosSecure = useAxiosSecure();
   const {user} = useAuth();
    const { refetch, data: favourite = [] } = useQuery({
        queryKey: ['favourite', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/favourites?email=${user.email}`);
            return res.data;
        }
    })

    return [favourite, refetch] 
};

export default useFavourites;

