import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";


const EditBiodata = () => {
    const { user } = useContext(AuthContext);
    const [editBiodata, setEditBiodata] = useState([]);
    const url = `https://ghotok-online-server.vercel.app/biodatased?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setEditBiodata(data))
    }, [url])

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <div className="m-20">
            <h1 className=" text-center font-bold ">Edit Biodata</h1>


            {editBiodata.map((editBio) => (
                   <div key={editBio._id} > <h1>{editBio.name}</h1> </div>
                    ))}

            <div className="border-2 w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="gap-2 grid">

                    <select {...register("biodataType")} className="border border-black">
                        <option value="male">Male</option>
                        <option value="female">Female</option >
                        <option value="all">All</option>
                    </select>
                    <input {...register("name")}  className="border border-black"/>
                    <input type="file" {...register("profileImage")}  className="border border-black"/>
                    <input type="date" {...register("dateOfBirth")} className="border border-black" />
                    <input type="number" {...register("height")} className="border border-black"/>
                    <input type="number" {...register("weight")}className="border border-black" />
                    <input type="number" {...register("age")} className="border border-black"/>
                    <input {...register("occupation")} className="border border-black"/>
                    <input {...register("race")}className="border border-black" />
                    <input {...register("fathersName")} className="border border-black"/>
                    <input {...register("mothersName")} className="border border-black"/>
                    <select {...register("permanentDivision")} className="border border-black"> 
                        <option value="dhaka">Dhaka</option>
                        <option value="chattagram">Chattagram</option >
                        <option value="rangpur">Rangpur</option>
                        <option value="barisal">Barisal</option>
                        <option value="khulna">Khulna</option>
                        <option value="maymansign">Maymansign</option>
                        <option value="sylhet">Sylhet</option>
                    </select>

                    <input type="submit" className="border border-black" />
                </form>
            </div>
        </div>
    );
};

export default EditBiodata;