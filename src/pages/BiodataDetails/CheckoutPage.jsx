import {  useParams } from "react-router-dom";

import { Card, Input, Typography, } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";




const CheckoutPage = () => {

    const { id } = useParams();
    const {user} = useContext(AuthContext)
    const [checkoutPage, setCheckoutPage] = useState({});
    const [userData, setUserData] = useState({})
    // console.log(id)

    // axios.get(`http://localhost:5000/users/indivitual/${user?.email}`)
    .then(res=>{
        setUserData(res.data)
        // console.log(res.data)
    })

    // const { user } = useContext(AuthContext);

    // const [checkoutPage, setCheckoutPage] = useState([]);
    // const url = `http://localhost:5000/userEdit?email=${user?.email}`;
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setCheckoutPage(data))
    // }, [url])

    // const [slaf] = useCheckoutPage();


    useEffect(() => {
        fetch(`http://localhost:5000/biodatasAll/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCheckoutPage(data);
            });
    }, [id]);

    const { _id } = checkoutPage
    

   
    return (

        <div className=" flex justify-center">
            

            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    ID : {_id}
                </Typography>

                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                             Biodata Id
                        </Typography>
                        <Input
                            size="xl"
                            type="text"
                            name="number"
                            value={_id}
                            placeholder="ID"
                            readOnly
                            className=" !border-blue-gray-200 focus:!border-t-gray-900 p-2"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Self Biodata Id
                        </Typography>
                        <Input
                            size="xl"
                            type="text"
                            name="number"
                            value={userData?._id}
                            placeholder="ID"
                            className=" !border-blue-gray-200 focus:!border-t-gray-900 p-2"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Stripe Card Number
                        </Typography>
                        <Input
                            size="xl"
                            type="text"
                            name="number"
                            placeholder="Stripe Number"
                            className=" !border-blue-gray-200 focus:!border-t-gray-900 p-2"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                       
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Self Email
                        </Typography>
                        <Input
                            size="xl"
                            type="email"
                            name="email"
                            defaultValue={userData.email}
                            placeholder="name@mail.com"
                            className=" !border-blue-gray-200 focus:!border-t-gray-900 p-2"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        

                        <Input
                            type="submit"
                            value='Submit'
                            className="bg-black text-xl font-bold text-white"
                            labelProps={{
                                className: "before:content-none after:content-none mt-6",
                            }}
                        />
                    </div>
                    
                </form>

              
            </Card>
        </div>
    );
};

export default CheckoutPage;