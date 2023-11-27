
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";


const SuccessStories = () => {
    return (
        <div className='my-32'>



            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Card
                        shadow={false}
                        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-cente r"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://img.freepik.com/free-photo/couple-walking-beach_23-2148111706.jpg')] bg-cover bg-center"
                        >
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                        </CardHeader>
                        <CardBody className="relative py-14 px-6 md:px-12">
                            <Typography
                                variant="h2"
                                color="white"
                                className="mb-6 font-medium leading-[1.5]"
                            >
                                How we design and code open-source projects?
                            </Typography>
                            <Typography variant="h5" className="mb-4 text-gray-400">
                                Tania Andrew
                            </Typography>

                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                <Card
                        shadow={false}
                        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-cente r"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://media.istockphoto.com/id/1365865879/photo/happy-face-at-the-beach.jpg?s=612x612&w=0&k=20&c=NOOEN-pgXsY2xYsGDUNV0xRdH11uxkIlk61oPodgvwY=')] bg-cover bg-center"
                        >
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                        </CardHeader>
                        <CardBody className="relative py-14 px-6 md:px-12">
                            <Typography
                                variant="h2"
                                color="white"
                                className="mb-6 font-medium leading-[1.5]"
                            >
                                How we design and code open-source projects?
                            </Typography>
                            <Typography variant="h5" className="mb-4 text-gray-400">
                                Tania Andrew
                            </Typography>

                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                <Card
                        shadow={false}
                        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-cente r"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://media.istockphoto.com/id/672865682/photo/love-is-the-best.webp?b=1&s=170667a&w=0&k=20&c=s9iUTkkhfT5TOiLPczimtXlE2gnaeTB1O1D4PwLCK4k=')] bg-cover bg-center"
                        >
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                        </CardHeader>
                        <CardBody className="relative py-14 px-6 md:px-12">
                            <Typography
                                variant="h2"
                                color="white"
                                className="mb-6 font-medium leading-[1.5]"
                            >
                                How we design and code open-source projects?
                            </Typography>
                            <Typography variant="h5" className="mb-4 text-gray-400">
                                Tania Andrew
                            </Typography>

                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                <Card
                        shadow={false}
                        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-cente r"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://img.freepik.com/free-photo/attractive-happy-couple-laughing-traveling-summer-by-sea-man-woman-wearing-sunglasses_285396-2287.jpg')] bg-cover bg-center"
                        >
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                        </CardHeader>
                        <CardBody className="relative py-14 px-6 md:px-12">
                            <Typography
                                variant="h2"
                                color="white"
                                className="mb-6 font-medium leading-[1.5]"
                            >
                                How we design and code open-source projects?
                            </Typography>
                            <Typography variant="h5" className="mb-4 text-gray-400">
                                Tania Andrew
                            </Typography>

                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                <Card
                        shadow={false}
                        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-cente r"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://img.freepik.com/free-photo/couple-walking-beach_23-2148111706.jpg')] bg-cover bg-center"
                        >
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                        </CardHeader>
                        <CardBody className="relative py-14 px-6 md:px-12">
                            <Typography
                                variant="h2"
                                color="white"
                                className="mb-6 font-medium leading-[1.5]"
                            >
                                How we design and code open-source projects?
                            </Typography>
                            <Typography variant="h5" className="mb-4 text-gray-400">
                                Tania Andrew
                            </Typography>

                        </CardBody>
                    </Card>
                </SwiperSlide>

            </Swiper>





        </div>
    );
};

export default SuccessStories;