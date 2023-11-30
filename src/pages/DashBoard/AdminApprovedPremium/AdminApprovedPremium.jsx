import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import useBiodatas from "../../../hooks/useBiodatas";




const AdminApprovedPremium = () => {

    const { user } = useContext(AuthContext);
    

    const [adminApprovedPremium] = useBiodatas();


    const handlePremium = (email) => {

        axios.post(`http://localhost:5000/make-premium/${email}`, { status: 'Premium' })
            .then(res => {
                console.log(res.data)
            })

    }

    return (
        <div>
           
                <div className="mt-32">
                   



                    <table className="text-center ">
                        <thead className="border-2">
                            <tr>
                                <th className="border-2 border-black p-2">Name</th>
                                <th className="border-2  border-black p-2">Email Id</th>
                                <th className="border-2  border-black p-2">Biodata Id</th>
                                <th className="border-2  border-black p-2">Make Premium</th>


                            </tr>
                        </thead>


                        {adminApprovedPremium.map((premium) => (
                        <tbody  key={premium._id} className="text-center">

                            <th className="border-2  border-black p-2"><tr>{premium.name}</tr></th>
                            <th className="border-2  border-black p-2"><tr>{premium.email}</tr></th>
                            <th className="border-2  border-black p-2"><tr></tr>{premium.biodataId}</th>
                            <th className="border-2  border-black p-2"><Button onClick={() => handlePremium(user?.email)} className="bg-black h-6 text-white">{premium.status}</Button></th>

                        </tbody>
                        ))    }



                    </table>
                </div>

            

         
        </div>
    );
};

export default AdminApprovedPremium;