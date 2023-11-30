import { useParams } from "react-router-dom";

import { Card, Input, Typography, } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";




const CheckoutPage = () => {

    const { id } = useParams();
    const { user } = useContext(AuthContext)
    const [checkoutPage, setCheckoutPage] = useState({});
    const [userData, setUserData] = useState({})
    // console.log(id)
    useEffect(() => {
        axios.get(`http://localhost:5000/users/indivitual/${user?.email}`)
            .then(res => {
                setUserData(res.data)
            })

        fetch(`http://localhost:5000/biodatasDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setCheckoutPage(data);
            });
    }, [id, user?.email]);


    const { biodataId, name, status, mobileNumber } = checkoutPage


    const handleContactRequest = event => {
        event.preventDefault();
        const form = event.target;
        const cartId = checkoutPage?.biodataId;
        const selfBiodataId = userData?._id;
        const email = userData?.email;
        const stripeNumber = form.stripeNumber.value;
        const contactRequest = {
            cartId,
            selfBiodataId,
            email,
            stripeNumber,
            name,
            status,
            mobileNumber,
            request: 'Pending'
        }
        console.log(contactRequest);

        // fetch('http://localhost:5000/contactRequests', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application'
        //     },
        //     body: JSON.stringify(contactRequest)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })

        axios.post('http://localhost:5000/contactRequests',contactRequest)
        .then(res=>{
            // console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Submit  success",
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
        })

     
    }

const handleRequest = () =>{
    axios.post(`http://localhost:5000/request-status/${user?.email}`, {requst: 'Pending'})
    .then(res=>{
     console.log(res.data)
    })
}

    return (

        <div className=" flex justify-center">


            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Checkout
                </Typography>

                <form onSubmit={handleContactRequest} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Biodata Id
                        </Typography>
                        <Input
                            size="lg"
                            type="number"
                            name="cartId"
                            defaultValue={biodataId || ''}
                            placeholder="ID"
                            readOnly
                            className=" !border-blue-gray-200 focus:!border-t-gray-900 p-2"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }} />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Self Biodata Id
                        </Typography>
                        <Input
                            size="lg"
                            type="text"
                            name="selfBiodataId"
                            readOnly
                            defaultValue={userData._id}
                            placeholder="ID"
                            className=" !border-blue-gray-200 focus:!border-t-gray-900 p-2"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }} />


                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Self Email
                        </Typography>
                        <Input
                            size="lg"
                            type="email"
                            name="email"
                            readOnly
                            defaultValue={userData.email}
                            placeholder="name@mail.com"
                            className=" !border-blue-gray-200 focus:!border-t-gray-900 p-2"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }} />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Stripe Card Number
                        </Typography>
                        <Input
                            size="lg"
                            type="number"
                            name="stripeNumber"
                            placeholder="Stripe Number"
                            className=" !border-blue-gray-200 focus:!border-t-gray-900 p-2"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }} />

                        <Input
                            type="submit"
                            value='Submit'
                            onClick={handleRequest}
                            className="bg-black text-xl font-bold text-white"
                            labelProps={{
                                className: "before:content-none after:content-none mt-6",
                            }} />
                    </div>

                </form>
            </Card>
        </div>
    );
};

export default CheckoutPage;