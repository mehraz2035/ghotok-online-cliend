


import  { useState, useEffect } from 'react';


const AdminDashboard = () => {
    const [totalBiodata, setTotalBiodata] = useState(0);
    const [girlsBiodata, setGirlsBiodata] = useState(0);
    const [boysBiodata, setBoysBiodata] = useState(0);
    const [marriagesCompleted, setMarriagesCompleted] = useState(0);

    // Simulating data fetching from a server/database
    useEffect(() => {
        // Replace this with actual API calls to fetch data
        // For simplicity, using setTimeout to simulate an asynchronous operation
        const fetchData = () => {
            setTimeout(() => {
                // Sample data
                const fetchedData = {
                    totalBiodata: 1000,
                    girlsBiodata: 500,
                    boysBiodata: 500,
                    marriagesCompleted: 200,
                };
                
                setTotalBiodata(fetchedData.totalBiodata);
                setGirlsBiodata(fetchedData.girlsBiodata);
                setBoysBiodata(fetchedData.boysBiodata);
                setMarriagesCompleted(fetchedData.marriagesCompleted);
            }, 1000); // Simulating a delay of 1 second
        };

        fetchData();
    }, []);

    return (
        <div className="counter-section flex justify-center items-center my-20 gap-16  py-14 bg-[#F3F3F3] uppercase">
            <div className="total-biodata text-center">
                <h2 className="text-gray-700 text-2xl font-bold">Total Biodata</h2>
                <p className="text-blue-500 text-4xl font-bold py-4">{totalBiodata}</p>
            </div>
            <div className="girls-biodata text-center">
                <h2  className="text-gray-700  text-2xl font-bold">Girls Biodata</h2>
                <p className="text-blue-500 text-4xl font-bold py-4">{girlsBiodata}</p>
            </div>
            <div className="boys-biodata text-center">
                <h2 className="text-gray-700  text-2xl font-bold">Boys Biodata</h2>
                <p className="text-blue-500 text-4xl font-bold py-4">{boysBiodata}</p>
            </div>
            <div className="marriages-completed text-center">
                <h2 className="text-gray-700  text-2xl font-bold"> Premium biodata</h2>
                <p className="text-blue-500 text-4xl font-bold py-4">{marriagesCompleted}</p>
            </div>
            <div className="marriages-completed text-center">
                <h2 className="text-gray-700  text-2xl font-bold"> Total revenue</h2>
                <p className="text-blue-500 text-4xl font-bold py-4">{marriagesCompleted}</p>
            </div>
        </div>
    );
};

export default AdminDashboard;

