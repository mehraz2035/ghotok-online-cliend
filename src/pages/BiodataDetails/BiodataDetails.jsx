
import { Card, CardHeader, CardBody, Typography, Button, CardFooter } from "@material-tailwind/react";
import useBiodatas from "../../hooks/useBiodatas";
// import { useLoaderData } from "react-router-dom";
// import useBiodataDetails from "../../hooks/useBiodataDetails";




const BiodataDetails = () => {
    const [biodataDetails] = useBiodatas();
    // const { id } = useParams();
    // const [biodataDetails, setBiodataDetails] = useState({});


    // useEffect(() => {
    //     fetch(`https://ghotok-online-server.vercel.app/biodatasId/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setBiodataDetails(data);
    //         });
    // }, [id]); 

    // const biodataAll = useLoaderData();
    // const { name, age, weight, biodataType, fathersName, mothersName } = biodataAll;
    const { name } = biodataDetails
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
                            <a href="#" className="inline-block">
                                <Button variant="text" className="flex items-center gap-2">
                                    Learn More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </a>
                        </CardBody>
                    </Card>
                </div>


                {biodataDetails.map((biodata) => (
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
