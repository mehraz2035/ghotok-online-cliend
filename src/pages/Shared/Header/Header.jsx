import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { Avatar } from "@material-tailwind/react";
import useFavourites from "../../../hooks/useFavourites";



const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [favourite] = useFavourites();


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/biodatasPage'>Biodatas</Link></li>
        
        <li><Link to='/addFood'>About Us</Link></li>
        <li><Link to='/userBaseManagesFoods'>Contact Us +{favourite.length}</Link></li>
        {user?.email && (
            <li><Link to='/dashboard'>Dashboard</Link></li>
        )}
        
    </>


    return (
        <div className=" mb-10 ">




            <nav className="mx-auto block w-full max-w-auto bg-[#0766AD]  text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4 ">
                <div>
                    <div className="container mx-auto flex items-center justify-between text-gray-900">
                        <div className=" w-36 flex justify-center items-center text-white">
                            <img className="h-16   " src="https://cdn-icons-png.flaticon.com/512/4741/4741308.png" alt="" />
                            <h1 className=" w-16 flex justify-center font-bold text-md text-center  uppercase"> Online <br />Ghotok</h1>
                        </div>
                        <ul className="hidden items-center gap-6 lg:flex text-white">
                            {navItems}
                        </ul>

                        <div className="flex gap-4 ">
                            {user?.email && (
                                <div className="flex justify-center items-center gap-2 font-bold text-white text-md ">
                                    <Avatar
                                        size="sm"
                                        alt="avatar"
                                        src={user?.photoURL}
                                        className=" h-9 w-9 rounded-full"
                                    />
                                    <h1>{user?.displayName}</h1>
                                </div>
                            )}

                            {
                                user ? <>
                                    <button onClick={handleLogOut}
                                        className="middle none center hidden  bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block border h-8"
                                        type="button"
                                        data-ripple-light="true"
                                    >
                                        <span>Log Out</span>
                                    </button></> :
                                    <><Link to={'/login'}>
                                        <button
                                            className="middle none center hidden  bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                            type="button"
                                            data-ripple-light="true"
                                        >
                                            <span>Login</span>
                                        </button>
                                    </Link></>
                            }

                        </div>

                    </div>


                </div>
            </nav>



        </div>
    );
};

export default Header;