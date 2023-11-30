import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Button } from "@material-tailwind/react";


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: userAll = [], refetch } = useQuery({
        queryKey: ['userAll'],
        queryFn: async () => {
            const res = await axiosSecure.get('/userAll');
            return res.data;
        }
    })


const handleMakeAdmin = userAll => {
    axiosSecure.patch(`/userAll/admin/${userAll._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })

}

    return (
        <div>
            <div>
                <h1 className=" text-center font-bold my-10">Manage Users</h1>
                

                <table className="text-center ">
                    <thead className="border-2">
                        <tr>
                            <th className="border-2 border-black p-2">No
                            </th>
                            <th className="border-2 border-black p-2">User name
                            </th>
                            <th className="border-2  border-black p-2">User email</th>
                            <th className="border-2  border-black p-2">Make premium</th>
                            <th className="border-2  border-black p-2">Role</th>

                        </tr>
                    </thead>



                    {
                        userAll.map((user, index) =>


                            <tbody key={user._id} className="text-center">
                                <th className="border-2  border-black p-2"><tr>{index + 1}</tr></th>
                                <th className="border-2  border-black p-2"><tr>{user?.name}</tr> </th>
                                <th className="border-2  border-black p-2"><tr>{user?.email}</tr></th>
                                <th className="border-2  border-black p-2"><Button className="bg-black h-6 text-white">Make premium</Button></th>

                                <th className="border-2  border-black p-2">


                                    { user.role === 'admin' ? 'Admin' : <Button className="bg-black h-6 text-white" onClick={() => handleMakeAdmin(userAll)}>Make Admin</Button>

                                    }
                                    
                                 </th>


                            </tbody>

                        )
                    }




                </table>
            </div>
        </div>
    );
};

export default ManageUsers;