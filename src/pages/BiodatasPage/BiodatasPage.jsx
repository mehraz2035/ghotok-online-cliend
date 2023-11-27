import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";


import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useBiodatas from "../../hooks/useBiodatas";


const BiodatasPage = () => {

    const [biodatasPage] = useBiodatas();
    // const [biodatasPage, setBiodatasPage] = useState([]);

    // useEffect(() => {
    //     fetch('https://ghotok-online-server.vercel.app/biodatas')
    //         .then(res => res.json())
    //         .then(data => setBiodatasPage(data));
    // }, []);


    return (
        <div >
            <Helmet>
                <title>Ghotok online - Biodatas</title>
            </Helmet>
            <h1 className='font-bold text-2xl my-10'>Biodatas page</h1>
            <div className='grid grid-cols-4 gap-4'>
                <div className="grid h-36">


                    <label className="p-2 h-14">
                        Age Range:
                        <input
                            className="border border-black p-1  "
                            type="number"
                            placeholder="Enter Age"
                        // value={filters.age}
                        // onChange={(e) => handleFilterChange('age', e.target.value)}
                        />
                    </label>


                    <label className=" p-2 h-10  ">
                        Biodata Type:
                        <select
                            className="border border-black p-1  "
                        // value={filters.biodataType}
                        // onChange={(e) => handleFilterChange('biodataType', e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>

                    <label className=" p-2 h-14 ">
                        Division:
                        <select
                            className="border border-black p-1  "
                        // value={filters.division}
                        // onChange={(e) => handleFilterChange('division', e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattagram">Chattagram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barisal">Barisal</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Maymansign">Maymansign</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </label>
                </div>
                <div className=' col-span-3 grid grid-cols-3 gap-5'>
                    {biodatasPage.map((biodata) => (
                        <Card key={biodata._id} className=" w-fit rounded-none " >
                            <CardBody>
                                <CardHeader floated={false} className="h-fit rounded-none">
                                    <img src="https://img.freepik.com/free-photo/couple-walking-beach_23-2148111706.jpg" alt="profile-picture" />
                                </CardHeader>
                                <div className="px-5">
                                    <Typography variant="h5" color="blue-gray" className="my-2">
                                        UI/UX Review Check
                                    </Typography>
                                    <Typography>
                                        Because it&apos;s about motivating the doers. Because I&apos;m here to
                                        follow my dreams and inspire others.
                                    </Typography>
                                </div>
                            </CardBody>
                            <CardFooter className="py-2 px-2 ">

                                <Link to={`/biodataDetails/${biodata._id}`}>
                                    <Button size="sm" variant="text" className="flex items-center gap-2">
                                        Learn More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </Link>

                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BiodatasPage;
