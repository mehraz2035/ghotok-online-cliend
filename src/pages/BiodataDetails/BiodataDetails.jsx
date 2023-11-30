
import {
    Button,
    Typography,
} from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";


import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useBiodatas from "../../hooks/useBiodatas";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import useFavourites from "../../hooks/useFavourites";






const BiodataDetails = () => {

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useFavourites();

    const handleFavourites = () => {
        if (user && user.email) {
            // add favourites data base 
            console.log(user.email);
            const favouritesItem = {
                favouritesItemId: _id,
                email: user.email,
                name,
                profileImage: user.downloadURL,
            }
            axiosSecure.post('/favourites', favouritesItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your favouri parson`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: " You are not logged In",
                text: "Please login to add to the Favourites",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // user to the login page
                    navigate('/login', { state: { from: location } })

                }
            });
        }
    }

    const [biodataDetailsAll] = useBiodatas();

    const { id } = useParams();
    const [biodataDetails, setBiodataDetails] = useState({});
    console.log(id)


    useEffect(() => {
        fetch(`http://localhost:5000/biodatasDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBiodataDetails(data);
            });
    }, [id]);

    const { _id, biodataId, name, profileImage, gender, email, mobileNumber } = biodataDetails

    return (

        <div>
            
            <Link to='/biodatasPage'>
                <Button className="h-8 bg-black text-white mb-10 "  >Back</Button>
            </Link>


            <div className='grid grid-cols-4 gap-4'>
                {/* Details */}

                <div className='col-span-3 '>
                    <Card className="w-full max-w-auto flex-row rounded-none h-[450px]  ">
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-2/5 shrink-0 rounded-none">
                            <img
                                src={profileImage}
                                alt="card-image"
                                className="h-full w-full object-cover" />
                        </CardHeader>
                        <CardBody className=" p-5">


                            <Typography variant="h4" color="blue-gray" className="mb-4">
                                Name : {name}
                            </Typography>
                            <Typography color="gray" className="mb-2 font-normal">
                                Email : {email}
                            </Typography>
                            <Typography color="gray" className="mb-2 font-normal">
                                Mobile Number : {mobileNumber}
                            </Typography>
                            <Typography color="gray" className="mb-2 font-normal">
                                Gender : {gender}
                            </Typography>
                            <Typography variant="h6" color="gray" className="mb-2 uppercase">
                                ID : {biodataId}
                            </Typography>

                            <div className="mt-40">
                                <Link to={`/checkoutPage/${_id}`}>
                                    <Button variant="outlined  " className=" bg-black h-8 text-white" >Checkout</Button>
                                </Link>
                                <Button className="h-8 bg-black text-white  " onClick={handleFavourites} >Favourites</Button>
                            </div>

                        </CardBody>
                    </Card>
                </div>

                {/* biodata hook thiaka data paitace */}
                {biodataDetailsAll.map((biodata) => (
                    <div key={biodata._id} className='col-span-4 sm:col-span-2 md:col-span-1'>
                        <Card>
                            <CardHeader shadow={false} floated={false} className="h-56 rounded-none mt-0 mb-4">
                                <img
                                    src={biodata.profileImage}
                                    alt={biodata.name}
                                    className="h-full w-full object-cover" />
                            </CardHeader>
                            <CardBody className="pl-3">
                                <Typography color="blue-gray" className="font-medium">
                                    {biodata.name}
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                    Age: {biodata.biodataId}
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                    Age: {biodata.age}
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                    Occupation: {biodata.occupation}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Button
                                    ripple={false}
                                    fullWidth={true}
                                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 h-8 mt-2"
                                >
                                    Contact
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))}



            </div>

        </div>
    );
};

export default BiodataDetails;
