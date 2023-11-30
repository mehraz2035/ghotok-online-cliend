


import { useState, useEffect } from 'react';


const AdminDashboard = () => {
    const [totalBiodataCount, setTotalBiodataCount] = useState(0);
    const [femaleBiodataCount, setFemaleBiodataCount] = useState(0);
    const [maleBiodataCount, setMaleBiodataCount] = useState(0);
    const [marriagesCompletedCount, setMarriagesCompletedCount] = useState(0);
    const [premiumUser, setPremiumUser] = useState(0)
    const [moneyCounts, setMoneyCounts] = useState(0)

    useEffect(() => {
        // Define your API endpoint
        const apiUrl = 'http://localhost:5000/count-documents'; // Update this with your actual API endpoint

        // Fetch data from the API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setTotalBiodataCount(data.allBiodataCount || 0);
                setFemaleBiodataCount(data.femaleBiodataCount || 0);
                setMaleBiodataCount(data.maleBiodataCount || 0);
                setMarriagesCompletedCount(data.marriagesCompletedCount || 0);
                setPremiumUser(data.premiumUser || 0)

                setMoneyCounts(data.moneyCount || 0)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures useEffect runs once on component mount

    const money = (moneyCounts * 500)


    return (
        <div className="counter-section flex justify-center items-center my-20 gap-16  py-14 bg-[#F3F3F3] uppercase">
            <div className="total-biodata text-center">
                <h2 className="text-gray-700 text-2xl font-bold">Total Biodata</h2>
                <p className="text-blue-500 text-4xl font-bold py-4">{totalBiodataCount}</p>
            </div>
            <div className="girls-biodata text-center">
                <h2 className="text-gray-700  text-2xl font-bold">Girls Biodata</h2>
                <p className="text-blue-500 text-4xl font-bold py-4">{femaleBiodataCount}</p>
            </div>
            <div className="boys-biodata text-center">
                <h2 className="text-gray-700  text-2xl font-bold">Boys Biodata</h2>
                <p className="text-blue-500 text-4xl font-bold py-4">{maleBiodataCount}</p>
            </div>
            <div className="marriages-completed text-center">
                <h2 className="text-gray-700  text-2xl font-bold"> Premium biodata</h2>
                <p className="text-blue-500 text-4xl font-bold py-4">{premiumUser}</p>
            </div>
            <div className="marriages-completed text-center">
                <h2 className="text-gray-700  text-2xl font-bold"> Total revenue</h2>
                <p className="text-blue-500 text-4xl font-bold py-4">{money}</p>
            </div>
        </div>
    );
};

export default AdminDashboard;

