// import { useEffect, useState } from "react";

// const useBiodataDetails = () => {

//     const [biodataDetails, setBiodataDetails] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         fetch('https://ghotok-online-server.vercel.app/biodatas')
//             .then(res => res.json())
//             .then(data => {
//                 setBiodataDetails(data);
//                 setLoading(false);
//             });
//     }, [])
//     return [biodataDetails, loading]

// }

// export default useBiodataDetails;