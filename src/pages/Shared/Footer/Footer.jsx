import { Typography } from "@material-tailwind/react";

const Footer = () => {
    return (
        <div className="mt-10 bg-[#0766AD]">
            <footer className="w-full p-8 bg-[#0766AD] ">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">

                    <div className=" w-36 flex justify-center items-center text-white">
                        <img className="h-16   " src="https://cdn-icons-png.flaticon.com/512/4741/4741308.png" alt="" />
                        <h1 className=" w-16 flex justify-center font-bold text-md uppercase"> Online <br />Ghotok</h1>
                    </div>

                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 text-white">
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
                            >
                               Home
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
                            >
                                About Us
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
                            >
                                Contact Us
                            </Typography>
                        </li>
                       
                    </ul>
                </div>
                <hr className="my-8 border-blue-gray-50" />
                <Typography color="blue-gray" className="text-center font-normal text-white">
                    &copy; 2023 Ghotok online
                </Typography>
            </footer>
        </div>
    );
};

export default Footer;