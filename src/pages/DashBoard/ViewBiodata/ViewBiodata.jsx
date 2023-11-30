import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Button } from "@material-tailwind/react";
import axios from "axios";

const ViewBiodata = () => {
    const { user } = useContext(AuthContext);

    const [viewBiodata, setViewBiodata] = useState([]);
    const url = `http://localhost:5000/userEdit?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setViewBiodata(data))
    }, [url]);

    const handlePremium = (email) => {

        axios.post(`http://localhost:5000/make-premium/${email}`, { status: 'pending' })
            .then(res => {
                console.log(res.data)
            })

    }

    return (
        <div>
            <h1 className=" text-center font-bold my-10">View Biodata</h1>
            <table className="table-auto  mt-24 ">
                <thead className="border border-black">
                    <tr className="border border-black">
                        <th className="border px-4 py-2 w-[200px]">USER DATA</th>
                        <th className="border px-4 py-2">INFORMSTION</th>
                    </tr>
                </thead>


                {viewBiodata?.map((item, index) => (
                    <tbody key={index} >

                        <tr className="border border-black">
                            <td className="border px-4 py-2 w-[200px]">Biodata Type
                            </td>
                            <td className="border px-4 py-2">{item.gender}</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Name
                            </td>
                            <td className="border px-4 py-2">{item.name}</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Profile Image
                            </td>
                            <td className="border px-4 py-2 w-20">{item.profileImage
                            }</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.dateofbirth
                            }</td>
                        </tr>

                        <tr className="border border-black">
                            <td className="border px-4 py-2">Height</td>
                            <td className="border px-4 py-2">{item.height}</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Weight
                            </td>
                            <td className="border px-4 py-2">{item.weight
                            }</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Age</td>
                            <td className="border px-4 py-2">{item.age}</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Occupation</td>
                            <td className="border px-4 py-2">{item.occupation}</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Race
                            </td>
                            <td className="border px-4 py-2">{item.race
                            }</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Fathers name
                            </td>
                            <td className="border px-4 py-2">{item.fathersName
                            }</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Mothers name</td>
                            <td className="border px-4 py-2">{item.mothersName}</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Permanent Division</td>
                            <td className="border px-4 py-2">{item.permanentDivision}</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Present Division</td>
                            <td className="border px-4 py-2">{item.presentDivision}</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Expected Partner Age</td>
                            <td className="border px-4 py-2">{item.expectedPartnerAge}</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2 ">Expected Partner Height</td>
                            <td className="border px-4 py-2">{item.expectedPartnerHeight}</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Expected Partner Weight
                            </td>
                            <td className="border px-4 py-2">{item.expectedPartnerWeight
                            }</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Contact Email</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr className="border border-black">
                            <td className="border px-4 py-2">Mobile Number</td>
                            <td className="border px-4 py-2">{item.mobileNumber}</td>
                        </tr>



                    </tbody>
                ))}


            </table>
            <div className="my-10 flex justify-center items-center font-bold ">
                <h1>Do you want to premium your profile?</h1>
                <div className="flex items-center ">
                    <Button onClick={() => handlePremium(user?.email)} className=" bg-black h-10 ml-5">Yes! Premium</Button>
                </div>
            </div>
        </div>
    );
};

export default ViewBiodata;
