
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


import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useBiodatas from "../../hooks/useBiodatas";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import useFavourites from "../../hooks/useFavourites";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";






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
                biodataId,
                email: user.email,
                name,
                profileImage: user.downloadURL,
                occupation,
                permanentDivision,
            }
            axiosSecure.post('/favourites', favouritesItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your favourit parson`,
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

    // const [biodataDetailsAll] = useBiodatas();

    const { id } = useParams();

    const [biodataDetails, setBiodataDetails] = useState({});
    const [users, setUsers] = useState([])
    const [pusers, setPusers] = useState({})
    console.log(id)

    useEffect(() => {
        axios.get(`https://ghotok-online-server.vercel.app/get-premium/${user?.email}`)
            .then(res => {
                setPusers(res.data)
                console.log(res.data)
            })
    }, [user?.email])



    useEffect(() => {
        fetch(`https://ghotok-online-server.vercel.app/biodatasDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBiodataDetails(data);
            });
    }, [id]);

    const { _id, biodataId, name, profileImage, gender, email, mobileNumber, occupation, permanentDivision
    } = biodataDetails

    useEffect(() => {
        axios.get(`https://ghotok-online-server.vercel.app/gender-filter/${gender}`)
            .then(res => {
                setUsers(res.data)
            })
    }, [gender])

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
                            {
                                pusers?.Premium === true ?
                                    <>
                                        <Typography color="gray" className="mb-2 font-normal">
                                            Email : {email}
                                        </Typography>
                                        <Typography color="gray" className="mb-2 font-normal">
                                            Mobile Number : {mobileNumber}
                                        </Typography>
                                    </>
                                    :
                                    'Please Check Out to Get Data'
                            }

                            <Typography color="gray" className="mb-2 font-normal">
                                Gender : {gender}
                            </Typography>
                            <Typography variant="h6" color="gray" className="mb-2 uppercase">
                                ID : {biodataId}
                            </Typography>

                            <div className="mt-40">
                                {
                                    pusers.Premium === true ?
                                        ''
                                        :
                                        <Link to={`/checkoutPage/${_id}`}>
                                            <Button variant="outlined  " className=" bg-black h-8 text-white" >Checkout</Button>
                                        </Link>
                                }
                                <Button className="h-8 bg-black text-white  " onClick={handleFavourites} >Favourites</Button>
                            </div>

                        </CardBody>
                    </Card>
                </div>

                {/* biodata hook thiaka data paitace */}
                {users?.map((biodata) => (
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
                                    {biodata.gender}
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                    ID: {biodata.biodataId}
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
