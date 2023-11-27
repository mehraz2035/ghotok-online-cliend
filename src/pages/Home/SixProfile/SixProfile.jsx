import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    CardHeader,
} from "@material-tailwind/react";

const SixProfile = () => {
    return (
        <div className="my-20 ">
            <h1 className="text-center text-4xl font-bold">Premium Member</h1>

            <div className=" grid grid-cols-3 w-auto justify-between gap-10">

                <Card className="mt-10 w-fit rounded-none mb-20 " >
                    <CardBody>
                        <CardHeader floated={false} className="h-80 rounded-none">
                            <img src="https://img.freepik.com/free-photo/couple-walking-beach_23-2148111706.jpg" alt="profile-picture" />
                        </CardHeader>
                        <div className="px-5">
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                UI/UX Review Check
                            </Typography>
                            <Typography>
                                Because it&apos;s about motivating the doers. Because I&apos;m here to
                                follow my dreams and inspire others.
                            </Typography>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-3 pb-4 ">
                        <a href="#" className="inline-block">
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
                        </a>
                    </CardFooter>
                </Card>


                <Card className="mt-10 w-fit rounded-none  mb-20" >
                    <CardBody>
                        <CardHeader floated={false} className="h-80 rounded-none">
                            <img src="https://img.freepik.com/free-photo/couple-walking-beach_23-2148111706.jpg" alt="profile-picture" />
                        </CardHeader>
                        <div className="px-5">
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                UI/UX Review Check
                            </Typography>
                            <Typography>
                                Because it&apos;s about motivating the doers. Because I&apos;m here to
                                follow my dreams and inspire others.
                            </Typography>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-3 pb-4 ">
                        <a href="#" className="inline-block">
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
                        </a>
                    </CardFooter>
                </Card>



                <Card className="mt-10 w-fit rounded-none mb-20 " >
                    <CardBody>
                        <CardHeader floated={false} className="h-80 rounded-none">
                            <img src="https://img.freepik.com/free-photo/couple-walking-beach_23-2148111706.jpg" alt="profile-picture" />
                        </CardHeader>
                        <div className="px-5">
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                UI/UX Review Check
                            </Typography>
                            <Typography>
                                Because it&apos;s about motivating the doers. Because I&apos;m here to
                                follow my dreams and inspire others.
                            </Typography>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-3 pb-4 ">
                        <a href="#" className="inline-block">
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
                        </a>
                    </CardFooter>
                </Card>


                <Card className="mt-10 w-fit rounded-none mb-20 " >
                    <CardBody>
                        <CardHeader floated={false} className="h-80 rounded-none">
                            <img src="https://img.freepik.com/free-photo/couple-walking-beach_23-2148111706.jpg" alt="profile-picture" />
                        </CardHeader>
                        <div className="px-5">
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                UI/UX Review Check
                            </Typography>
                            <Typography>
                                Because it&apos;s about motivating the doers. Because I&apos;m here to
                                follow my dreams and inspire others.
                            </Typography>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-3 pb-4 ">
                        <a href="#" className="inline-block">
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
                        </a>
                    </CardFooter>
                </Card>


               
            </div>
        </div>
    );
};

export default SixProfile;