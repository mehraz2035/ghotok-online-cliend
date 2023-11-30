import React, { useState, useEffect } from 'react';

const SuccessCounter = () => {
  const [totalBiodataCount, setTotalBiodataCount] = useState(0);
  const [femaleBiodataCount, setFemaleBiodataCount] = useState(0);
  const [maleBiodataCount, setMaleBiodataCount] = useState(0);
  const [marriagesCompletedCount, setMarriagesCompletedCount] = useState(0);

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
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  return (
    <div className="counter-section flex justify-center items-center my-20 gap-16  py-14 bg-[#F3F3F3]">
      <div className="total-biodata text-center">
        <h2 className="text-gray-700 text-2xl font-bold">Total Biodata</h2>
        <p className="text-blue-500 text-4xl font-bold py-4">{totalBiodataCount}</p>
      </div>
      <div className="girls-biodata text-center">
        <h2 className="text-gray-700 text-2xl font-bold">Female Biodata</h2>
        <p className="text-blue-500 text-4xl font-bold py-4">{femaleBiodataCount}</p>
      </div>
      <div className="boys-biodata text-center">
        <h2 className="text-gray-700 text-2xl font-bold">Male Biodata</h2>
        <p className="text-blue-500 text-4xl font-bold py-4">{maleBiodataCount}</p>
      </div>
      <div className="marriages-completed text-center">
        <h2 className="text-gray-700 text-2xl font-bold">Marriages Completed</h2>
        <p className="text-blue-500 text-4xl font-bold py-4">{marriagesCompletedCount}</p>
      </div>
    </div>
  );
};

export default SuccessCounter;
