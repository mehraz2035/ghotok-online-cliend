import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";



const EditBiodata = () => {

    const { user } = useContext(AuthContext);

    const [editBiodata, setEditBiodata] = useState([]);

    const url = `http://localhost:5000/userEdit?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setEditBiodata(data))
    }, [url])
    console.log(editBiodata)



    const handleUpdate = async (event) => {
        if (event) {
            event.preventDefault();

            const form = event.target;
            const gender = form.gender.value;
            const name = form.name.value;
            const profileImage = form.profileImage.value;
            const dateofbirth = form.dateofbirth.value;
            const height = form.height.value;
            const weight = form.weight.value;
            const age = form.age.value;
            const occupation = form.occupation.value;
            const race = form.race.value;
            const fathersName = form.fathersName.value;
            const mothersName = form.mothersName.value;
            const permanentDivision = form.presentDivision.value;
            const presentDivision = form.presentDivision.value;
            const married = form.married.value;
            const expectedPartnerAge = form.expectedPartnerAge.value;
            const expectedPartnerHeight = form.expectedPartnerHeight.value;
            const expectedPartnerWeight = form.expectedPartnerWeight.value;
            const mobileNumber = form.mobileNumber.value;


            const editBiodata = {
                gender,
                profileImage,
                name,
                dateofbirth,
                height,
                weight,
                age,
                occupation,
                race,
                fathersName,
                mothersName,
                permanentDivision,
                presentDivision,
                married,
                expectedPartnerAge,
                expectedPartnerHeight,
                expectedPartnerWeight,
                email: user?.email,
                mobileNumber


            };

            console.log(editBiodata);

            axios.put(`http://localhost:5000/userEdit/${user.email}`, editBiodata)
                .then(res => {
                    console.log(res.data)

                })

            axios.post(`http://localhost:5000/bio-data/`, editBiodata)
                .then(res => {
                    console.log(res.data)
                })

            // Swal.fire({
            //     position: "top-end",
            //     icon: "success",
            //     title: "Edit Successfully",
            //     showConfirmButton: false,
            //     timer: 1500
            // });
        }
    }
    return (
        <div className="m-20">
            <h1 className=" text-center font-bold my-10">Edit Biodata Now</h1>



            <div className="border-2 w-[700px]">
                <form onSubmit={handleUpdate} className="max-w-xxl  mx-auto p-6 bg-white rounded-md shadow-md ">
                    <div className=" grid grid-cols-2  ">
                        <div className="mt-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span>Gender</span>
                            </label>
                            <select name="gender" placeholder="Gender" defaultValue={user.gender} required>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option >
                                <option value="Other">All</option>
                            </select>
                        </div>
                        <div className="mt-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                <span>Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" defaultValue={user.name} />
                        </div>
                        <div className="mt-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span >Profile Image Link </span>
                            </label>
                            <input type="text" name="profileImage" placeholder="URL" defaultValue={user.profileImage} />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span>Date of birth</span>
                            </label>
                            <input type="date" name="dateofbirth" placeholder="Date of birth" defaultValue={user.dateofbirth} required />
                        </div>
                        <div className="mt-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                <span > Height</span>
                            </label>
                            <input type="number" name="height" placeholder="Height" defaultValue={user.height} required />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span>Weight</span>
                            </label>
                            <input type="number" name="weight" placeholder="Weight" defaultValue={user.weight} required />
                        </div>
                        <div className="mt-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                <span >Age</span>
                            </label>
                            <input type="number" name="age" placeholder="Age" defaultValue={user.age} />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span >Occupation</span>
                            </label>
                            <select name="occupation" placeholder="Occupation" defaultValue={user.occupation} required>
                                <option value="Student">Student</option>
                                <option value="Job">Job</option >
                                <option value="House wife">House wife</option>
                            </select>
                        </div>
                        <div className="mt-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                <span >Race</span>
                            </label>
                            <select name="race" placeholder="Race" defaultValue={user.age} required>
                                <option value="Bangali">Bangali</option>
                                <option value="Chakma">Chakma</option >
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mt-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                <span >Fathers Name</span>
                            </label>
                            <input type="text" name="fathersName" placeholder="Fathers Name" defaultValue={user.fathersName} />
                        </div>
                        <div className="mt-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span >Mothers name</span>
                            </label>
                            <input type="text" name="mothersName" placeholder="Mothers name" defaultValue={user.mothersName} />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span className="label-text">Permanent Division</span>
                            </label>
                            <select required name="permanentDivision" defaultValue={user.permanentDivision}>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chattagram">Chattagram</option >
                                <option value="Rangpur">Rangpur</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Maymansign">Maymansign</option>
                                <option value="Sylhet">Sylhet</option>

                            </select>
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span className="label-text">Present Division</span>
                            </label>
                            <select required name="presentDivision" defaultValue={user.presentDivision} >
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chattagram">Chattagram</option >
                                <option value="Rangpur">Rangpur</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Maymansign">Maymansign</option>
                                <option value="Sylhet">Sylhet</option>

                            </select>

                        </div>

                        <div className="mt-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span>Are you married?</span>
                            </label>
                            <select required name="married" defaultValue={user.married} >
                                <option value="Married">Married</option>
                                <option value="ChattagramSingle">Single</option >
                                

                            </select>
                        </div>
                        <div className="mt-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span>Expected Partner Age</span>
                            </label>
                            <input type="number" name="expectedPartnerAge" placeholder="Age" defaultValue={user.expectedPartnerAge} />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span >Expected Partner Height</span>
                            </label>
                            <input type="number" name="expectedPartnerHeight" placeholder="Height" defaultValue={user.expectedPartnerHeight} required />
                        </div>
                        <div className="mt-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span>Expected Partner Weight</span>
                            </label>
                            <input type="number" name="expectedPartnerWeight" placeholder="Weight" defaultValue={user.expectedPartnerWeight} required />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                <span >Contact Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Mobile Number" readOnly />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input type="number" name="mobileNumber" placeholder="Mobile Number" defaultValue={user.mobileNumber} required />
                        </div>
                    </div>
                    <div className=" flex justify-center mt-10  ">
                        <input type="submit"  value="Publish " className="border-2 border-black w-full p-2 font-bold text-white uppercase  bg-black h-10" />
                    </div>
                </form>
            
            </div>




        </div>
    );
};

export default EditBiodata;