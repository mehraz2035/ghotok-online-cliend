

import { Button } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";


const MyContactRequest = () => {

    const { user } = useContext(AuthContext);

    const [myContactRequest, setMyContactRequest] = useState([]);

    const url = `https://ghotok-online-server.vercel.app/emailBaseUser?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyContactRequest(data))
    }, [url])
    console.log(myContactRequest)


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://ghotok-online-server.vercel.app/emailBaseUser/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                           
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = myContactRequest.filter(contact => contact._id !== id);
                        setMyContactRequest(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div>
            

            <table className="text-center mt-32 ">
                <thead className="border-2">

                    <tr >
                        <th className="border-2 border-black p-2">Name</th>
                        <th className="border-2  border-black p-2">Email</th>
                        <th className="border-2  border-black p-2">Biodata Id
                        </th>
                        <th className="border-2  border-black p-2"> Status
                        </th>
                        <th className="border-2  border-black p-2"> Mobile No
                        </th>
                        <th className="border-2  border-black p-2"> Contact request Delete</th>

                    </tr>

                </thead>


                {
                    myContactRequest.map(contact =>
                        <tbody className="text-center" key={contact._id}>

                            <th className="border-2  border-black p-2"><tr></tr>{contact.name} </th>
                            <th className="border-2  border-black p-2"><tr>{contact.email}</tr></th>
                            <th className="border-2  border-black p-2"><tr>{contact.cartId}</tr></th>
                            <th className="border-2  border-black p-2"><tr>{contact.status}</tr></th>
                            <th className="border-2  border-black p-2"><tr>{contact.mobileNumber}</tr></th>
                            <th className="border-2  border-black p-2"><Button onClick={() => handleDelete(contact._id)} className="bg-black h-6 text-white">Delete</Button></th>

                        </tbody>
                    )
                }




            </table>
        </div>
    );
};

export default MyContactRequest;