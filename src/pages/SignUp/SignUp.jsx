/* eslint-disable no-unused-vars */
import {Card, Input, Typography,} from "@material-tailwind/react";


import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/firebase.config";
import axios from "axios";
import Swal from "sweetalert2";

function fileToUint8Array(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const arrayBuffer = reader.result;
            const uint8Array = new Uint8Array(arrayBuffer);
            resolve(uint8Array);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
}


const SignUp = () => {
    const { createAccount, updateUserProfile, googleLogin } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.files[0];
        const email = form.email.value;
        const password = form.password.value;

        try {

            const uint8Array = await fileToUint8Array(image);

            createAccount(email, password)
                .then((result) => {
                    const storageRef = ref(storage, `user-images/${result.user.uid}/${image.name}`);
                    uploadBytes(storageRef, uint8Array).then(() => {

                        getDownloadURL(storageRef).then((downloadURL) => {

                            updateUserProfile(name, downloadURL)
                            const userInfo = {name, profileImage: downloadURL, email, password}
                            axios.post('http://localhost:5000/users', userInfo)
                            .then(res=>{
                                console.log(res.data)
                                if(res.data.insertedId){
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Sign Up Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                      });
                                }
                            })
                        });
                    });
                   
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    };

    
    


    return (
        <div className=" flex justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Register
                </Typography>

                <form onSubmit={handleSignUp} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <Input
                            size="xl"
                            type="text"
                            name="name"
                            placeholder="Name"
                            className=" !border-blue-gray-200 focus:!border-t-gray-900 p-2"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Photo
                        </Typography>
                        <Input
                            size="xl"
                            type="file"
                            name="image"
                            placeholder="Image"
                            className=" !border-blue-gray-200 focus:!border-t-gray-900 p-2"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
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
                            value='Register'
                            className="bg-black text-xl font-bold text-white"
                            labelProps={{
                                className: "before:content-none after:content-none mt-6",
                            }}
                        />
                    </div>
                    <p className="text-center my-4">Already Have an Account? <Link className="text-orange-600" to="/login">Login</Link></p>
                </form>

                <div className="flex justify-center mb-7">
                    <button onClick={googleLogin} className=" btn text-sm  flex items-center gap-2"><p>Sign Up with Google</p><img className="w-6 h-6  " src="https://i.ibb.co/tKWsFHK/Google-G-Logo-svg.webp" alt="" /></button>
                </div>
            </Card>
        </div>
        
    );
};

export default SignUp;