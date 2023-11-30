
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";



const DashBoard = () => {
    const [isAdmin, setAdmin] = useState({})
    const { user } = useAuth()

    useEffect(() => {
        axios.get(`http://localhost:5000/get-admin/${user?.email}`)
            .then(res => {
                setAdmin(res.data)
            })
    }, [user?.email])


    return (
        <div className="flex">
            {/* side bar */}
            <div className=" mr-20 lg:mr-40 min-h-screen  bg-[#213555] text-white py-4">
                <ul className="p-4 m-5 uppercase font-bold text-lg ">
                    {
                        isAdmin?.Admin ===true ? <>
                            <li>
                                <NavLink to='/dashBoard/adminDashboard'>Admin Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashBoard/manageUsers'>Manage Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashBoard/adminApprovedPremium'> Approved Premium
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashBoard/approvedContactRequest'>Approved Contact Request</NavLink>
                            </li>
                        </> :
                            <>
                                <li>
                                    <NavLink to='/dashBoard/editBiodata'>Edit Biodata</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashBoard/viewBiodata'>View Biodata</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashBoard/myContactRequest'>My Contact Request</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashBoard/favouritesBiodata'>Favourites Biodata</NavLink>
                                
                                </li>
                                <li>
                                    <NavLink to='/dashBoard/gotMarried'>Got Married</NavLink>
                                
                                </li>
                            </>
                    }




                    <div className="border my-6"></div>

                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>


                </ul>
            </div>
            {/* content */}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;