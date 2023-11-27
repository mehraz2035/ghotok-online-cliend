import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-screen bg-[#213555] text-white py-4">
                <ul className="p-4">
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
                        <NavLink to='/dashBoard/favouritesBiodata'>Contact Request</NavLink>
                    </li>
                    <div className="border"></div>

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