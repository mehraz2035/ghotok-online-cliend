import React, { useContext } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";
import {

    Card,
    CardHeader,
    CardBody,
    CardFooter,

} from "@material-tailwind/react";

// import useBiodatas from "../../hooks/useBiodatas";  CardFooter
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useBiodatas from "../../hooks/useBiodatas";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import useFavourites from "../../hooks/useFavourites";

// import { useLoaderData } from "react-router-dom";
// import useBiodataDetails from "../../hooks/useBiodataDetails";




const BiodataDetails = () => {



    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
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
                if(res.data.insertedId){
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
                    navigate('/login', { state: {from: location}})
                    
                }
            });
        }
    }

    const [biodataDetailsAll] = useBiodatas();

    const { id } = useParams();
    const [biodataDetails, setBiodataDetails] = useState({});
    console.log(id)


    useEffect(() => {
        fetch(`http://localhost:5000/biodatasAll/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBiodataDetails(data);
            });
    }, [id]);

    // const biodataAll = useLoaderData();
    // const { name, age, weight, biodataType, fathersName, mothersName } = biodataAll;
    const { _id, name } = biodataDetails
    return (

        <div>
            <h1 className='font-bold text-2xl my-10'>Biodata Details</h1>


            <div className='grid grid-cols-4 gap-4'>
                {/* Details */}

                <div className='col-span-3 '>
                    <Card className="w-full max-w-auto flex-row rounded-none  ">
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-2/5 shrink-0 rounded-none"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                alt="card-image"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody className=" p-5">
                            <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                Name:{name}
                            </Typography>

                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Lyft launching cross-platform service this week
                            </Typography>
                            <Typography color="gray" className="mb-8 font-normal">
                                Like so many organizations these days, Autodesk is a company in
                                transition. It was until recently a traditional boxed software company
                                selling licenses. Yet its own business model disruption is only part
                                of the story
                            </Typography>
                            <a href="#buttons-with-link">
                                <Button onClick={handleFavourites} variant="outlined">Favourites</Button>
                            </a>
                            <Link to={`/checkoutPage/${_id}`}>
                                <Button variant="outlined">Checkout Page</Button>
                            </Link>


                            <div className="w-[500px] mt-60">
                                <div className="w-[500px]">
                                    <Button onClick={handleOpen}>Long Dialog</Button>
                                    <Dialog className="mt-60 bg-none" open={open} handler={handleOpen} >
                                        <DialogHeader >Checkout Page</DialogHeader>
                                        <DialogBody className="h-fit w-full overflow-scroll  ">
                                            <Typography className="font-normal text-center">
                                                I&apos;ve always had unwavering confidence in my abilities, and I
                                                believe our thoughts and self-perception are the primary forces that
                                                shape us. Many people limit themselves by their own self-doubt,
                                                slowing their progress. Fortunately, I was raised with the belief
                                                that I could achieve anything.

                                            </Typography>
                                        </DialogBody>
                                        <DialogFooter className="space-x-2">
                                            <Button variant="text" color="blue-gray" onClick={handleOpen}>
                                                cancel
                                            </Button>
                                            <Button variant="gradient" color="green" onClick={handleOpen}>
                                                confirm
                                            </Button>
                                        </DialogFooter>
                                    </Dialog>
                                </div>

                            </div>


                        </CardBody>
                    </Card>
                </div>


                {biodataDetailsAll.map((biodata) => (
                    <div key={biodata._id} className='col-span-4 sm:col-span-2 md:col-span-1'>
                        <Card>
                            <CardHeader shadow={false} floated={false} className="h-56 rounded-none mt-0 mb-4">
                                <img
                                    src={biodata.profileImageLink}
                                    alt={biodata.name}
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody className="pl-3">
                                <Typography color="blue-gray" className="font-medium">
                                    {biodata.name}
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
