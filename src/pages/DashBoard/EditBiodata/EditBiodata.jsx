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
            const expectedPartnerAge = form.expectedPartnerAge.value;
            const expectedPartnerHeight = form.expectedPartnerHeight.value;
            const expectedPartnerWeight = form.expectedPartnerWeight.value;
            const mobileNumber = form.mobileNumber.value;


            const editProfile = {
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
                expectedPartnerAge,
                expectedPartnerHeight,
                expectedPartnerWeight,
                email: user?.email,
                mobileNumber


            };

            console.log(editProfile);

            axios.put(`http://localhost:5000/userEdit/${user.email}`, editProfile)
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
            <h1 className=" text-center font-bold ">Edit Biodata</h1>

            {editBiodata.map((editBio) => (
                <div key={editBio._id} >
                    <h1>{editBio.name}</h1>
                    <h1>{editBio.email}</h1>
                    <img src={editBio.
                        profileImage
                    } alt="" />
                </div>
            ))}

            <div className="border-2 w-full">
                <form onSubmit={handleUpdate} >
                    <div >
                        <label>
                            <span>Gender</span>
                        </label>
                        <select name="gender" placeholder="Gender"  required>
                            <option value="male">Male</option>
                            <option value="female">Female</option >
                            <option value="all">All</option>
                        </select>
                    </div>
                    <div >
                        <label >
                            <span>Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name"  />
                    </div>
                    <div >
                        <label >
                            <span >Profile Image Link </span>
                        </label>
                        <input type="text" name="profileImage" placeholder="URL" />
                    </div>
                    <div>
                        <label >
                            <span>Date of birth</span>
                        </label>
                        <input type="date" name="dateofbirth" placeholder="Food Image"  required />
                    </div>
                    <div >
                        <label >
                            <span > Height</span>
                        </label>
                        <input type="number" name="height" placeholder="Height"  required />
                    </div>
                    <div >
                        <label>
                            <span>Weight</span>
                        </label>
                        <input type="number" name="weight" placeholder="Weight"  required />
                    </div>
                    <div >
                        <label >
                            <span >Age</span>
                        </label>
                        <input type="number" name="age" placeholder="Age"  />
                    </div>
                    <div>
                        <label>
                            <span >Occupation</span>
                        </label>
                        <select name="occupation" placeholder="Occupation"  required>
                            <option value="student">Student</option>
                            <option value="job">Job</option >
                            <option value="houseWife">House wife</option>
                        </select>
                    </div>
                    <div >
                        <label >
                            <span >Race</span>
                        </label>
                        <select name="race" placeholder="Race" required>
                            <option value="bangali">Bangali</option>
                            <option value="chakma">Chakma</option >
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div >
                        <label >
                            <span >Fathers Name</span>
                        </label>
                        <input type="text" name="fathersName" placeholder="Fathers Name" />
                    </div>
                    <div >
                        <label >
                            <span >Mothers name</span>
                        </label>
                        <input type="text" name="mothersName" placeholder="Mothers name" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Permanent Division</span>
                        </label>
                        <select required name="permanentDivision" >
                            <option value="dhaka">Dhaka</option>
                            <option value="chattagram">Chattagram</option >
                            <option value="rangpur">Rangpur</option>
                            <option value="barisal">Barisal</option>
                            <option value="khulna">Khulna</option>
                            <option value="maymansign">Maymansign</option>
                            <option value="sylhet">Sylhet</option>

                        </select>
                    </div>
                    <div >
                        <label >
                            <span className="label-text">Present Division</span>
                        </label>
                        <select required name="presentDivision" >
                            <option value="dhaka">Dhaka</option>
                            <option value="chattagram">Chattagram</option >
                            <option value="rangpur">Rangpur</option>
                            <option value="barisal">Barisal</option>
                            <option value="khulna">Khulna</option>
                            <option value="maymansign">Maymansign</option>
                            <option value="sylhet">Sylhet</option>

                        </select>

                    </div>

                    <div >
                        <label >
                            <span>Expected Partner Age</span>
                        </label>
                        <input type="number" name="expectedPartnerAge" placeholder="Age"  />
                    </div>
                    <div>
                        <label >
                            <span >Expected Partner Height</span>
                        </label>
                        <input type="number" name="expectedPartnerHeight" placeholder="Height"  required />
                    </div>
                    <div >
                        <label >
                            <span>Expected Partner Weight</span>
                        </label>
                        <input type="number" name="expectedPartnerWeight" placeholder="Weight" required />
                    </div>
                    <div >
                        <label >
                            <span >Contact Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Mobile Number"  readOnly />
                    </div>
                    <div >
                        <label >
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <input type="number" name="mobileNumber" placeholder="Mobile Number"  required />
                    </div>
                    <div >
                        <input className="btn btn-warning" type="submit" value="Publish " />
                    </div>
                </form>
            </div>




        </div>
    );
};

export default EditBiodata;