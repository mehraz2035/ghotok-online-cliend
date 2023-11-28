import { Card, Input, Typography } from "@material-tailwind/react";

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {


    const { signIn, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.form?.pathname || "/";
    // console.log('state in the location', location.state)


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate(from, {replace: true });
            })
            .catch(error => console.log(error));
    }
    

    return (
        <div className=" flex justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Login
                </Typography>

                <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="xl"
                            type="email"
                            name="email"
                            placeholder="name@mail.com"
                            className=" !border-blue-gray-200 focus:!border-t-gray-900 p-2"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            name="password"
                            size="xl"
                            placeholder="********"
                            className=" !border-blue-gray-200 focus:!border-t-gray-900 p-2"
                            labelProps={{
                                className: "before:content-none after:content-none ",
                            }}
                        />

                        <Input
                            type="submit"
                            value='Login'
                            className="bg-black text-xl font-bold text-white"
                            labelProps={{
                                className: "before:content-none after:content-none my-6 h-10 ",
                            }}
                        />
                    </div>
                    <p className="text-center my-4">Dont have an account? <Link className="text-orange-600" to="/signUp">SignUp</Link></p>
                </form>
                <div className="flex justify-center mb-7">
                    <button onClick={googleLogin} className=" btn text-sm  flex items-center gap-2"><p>Login with Google</p><img className="w-6 h-6  " src="https://i.ibb.co/tKWsFHK/Google-G-Logo-svg.webp" alt="" /></button>
                </div>
            </Card>
        </div>
    );
};

export default Login;