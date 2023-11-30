import Swal from "sweetalert2";
import useFavourites from "../../../hooks/useFavourites";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const FavouritesBiodata = () => {

    const [favouritesBiodata, refetch] = useFavourites();
    const axiosSecure = useAxiosSecure();


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/favourites/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <h1 className=" text-center font-bold my-10">Favourites Biodata</h1>

            <table className="text-center ">
                <thead className="border-2">
                    <tr>
                        <th className="border-2 border-black p-2">Name</th>
                        <th className="border-2  border-black p-2">Biodata Id</th>
                        <th className="border-2  border-black p-2">Permanent Address</th>
                        <th className="border-2  border-black p-2">Occupation</th>
                        <th className="border-2  border-black p-2">Delete</th>
                    </tr>
                </thead>



                {
                    favouritesBiodata.map(itam => <tbody key={itam._id} className="text-center">

                        <th className="border-2  border-black p-2"><tr>{itam.name}</tr> </th>
                        <th className="border-2  border-black p-2"><tr>{itam.biodataId}</tr></th>
                        <th className="border-2  border-black p-2"><tr>{itam.permanentDivision}</tr></th>
                        <th className="border-2  border-black p-2"><tr>{itam.occupation}</tr></th>
                        <th className="border-2  border-black p-2"><button className="bg-black h-8 px-4  text-white" onClick={() => handleDelete(itam._id)}>Delete</button></th>

                    </tbody>
                    )
                }



            </table>
        </div>
    );
};

export default FavouritesBiodata;