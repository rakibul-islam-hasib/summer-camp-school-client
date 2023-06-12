import { useQuery } from "@tanstack/react-query"
import { useAuth } from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

export const useUser = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: currentUser  , isLoading , refetch} = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email && !!localStorage.getItem('token'),
    })
    // console.log(isLoading , 'isLoading')
    return { currentUser  , isLoading , refetch}
}