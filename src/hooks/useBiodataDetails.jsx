// import { useEffect, useState } from "react";

// const useBiodataDetails = () => {

//     const [biodataDetails, setBiodataDetails] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         fetch('http://localhost:5000/biodatas')
//             .then(res => res.json())
//             .then(data => {
//                 setBiodataDetails(data);
//                 setLoading(false);
//             });
//     }, [])
//     return [biodataDetails, loading]

// }

// export default useBiodataDetails;