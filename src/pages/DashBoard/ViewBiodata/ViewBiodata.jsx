import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const ViewBiodata = () => {
    const { user } = useContext(AuthContext);

    const [viewBiodata, setViewBiodata] = useState([]);
    const url = `http://localhost:5000/userEdit?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setViewBiodata(data))
    }, [url]);

    return (
        <div>
            <table className="table-auto w-[900px] mt-24">
                <thead className="border border-black">
                    <tr className="border border-black">
                        <th className="border px-4 py-2">Field</th>
                        <th className="border px-4 py-2">Value</th>
                    </tr>
                </thead>


                {viewBiodata.map((item, index) => (
                <tbody key={index}>
                    
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Name</td>
                            <td className="border px-4 py-2">{item.name}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Biodata Type</td>
                            <td className="border px-4 py-2">{item.gendar}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.dateofbirth}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        <tr  className="border border-black">
                            <td className="border px-4 py-2">Date of birth</td>
                            <td className="border px-4 py-2">{item.email}</td>
                        </tr>
                        
                   
                </tbody>
                 ))}


            </table>
        </div>
    );
};

export default ViewBiodata;
