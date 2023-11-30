import { Button } from "@material-tailwind/react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ApprovedContactRequest = () => {

    const axiosSecure = useAxiosSecure();
    const { data: contactRequests = [] } = useQuery({
        queryKey: ['contactRequests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/contactRequests');
            return res.data;
        }
    })

    return (
        <div>
            

            <table className="text-center mt-32 ">
                <thead className="border-2">
                    
                            <tr >
                                <th className="border-2 border-black p-2">Name</th>
                                <th className="border-2  border-black p-2">Email</th>
                                <th className="border-2  border-black p-2">Biodata Id
                                </th>
                                <th className="border-2  border-black p-2">Approved contact request</th>

                            </tr>
                       
                </thead>


                {
                        contactRequests.map(contact =>
                <tbody className="text-center" key={contact._id}>

                    <th className="border-2  border-black p-2"><tr></tr>{contact.name} </th>
                    <th className="border-2  border-black p-2"><tr>{contact.email}</tr></th>
                    <th className="border-2  border-black p-2"><tr>{contact.cartId}</tr></th>
                    <th className="border-2  border-black p-2"><Button className="bg-black h-6 text-white">Approved</Button></th>

                </tbody>
                     )
                    }




            </table>
        </div>
    );
};

export default ApprovedContactRequest;