import  { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const BiodatasPage = () => {
  const [biodatasPage, setBiodatasPage] = useState([]);
  const [filters, setFilters] = useState({
    age: "",
    biodataType: "",
    division: "",
  });

  useEffect(() => {
    axios.get("https://ghotok-online-server.vercel.app/biodatasAllCart").then((res) => {
      setBiodatasPage(res.data);
    });
  }, []);

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  const filteredBiodatas = biodatasPage.filter((biodata) => {
    return (
      (filters.age === "" || Number(biodata.age) === Number(filters.age)) &&
      (filters.biodataType === "" ||
        biodata.gender.toLowerCase() === filters.biodataType.toLowerCase()) &&
      (filters.division === "" ||
        biodata.permanentDivision.toLowerCase() ===
          filters.division.toLowerCase())
    );
  });
  

  return (
    <div>
      <Helmet>
        <title>Ghotok online - Biodatas</title>
      </Helmet>

      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center gap-5 h-36">
          <h1 className="font-bold text-xl text-center mt-5">Filter</h1>

          <label className="w-4/5 h-14 font-bold mb-1 ">
            Age Range
            <input
              className="border border-black p-1 w-full"
              type="number"
              placeholder="Enter Age"
              value={filters.age}
              onChange={(e) => handleFilterChange("age", e.target.value)}
            />
          </label>

          <label className="w-4/5 font-bold h-16 mt-1">
            Biodata Type
            <select
              className="border border-black p-1 w-full"
              value={filters.biodataType}
              onChange={(e) =>
                handleFilterChange("biodataType", e.target.value)
              }
            >
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>

          <label className="w-4/5 font-bold h-14 mt-1">
            Division
            <select
              className="border border-black p-1 w-full"
              value={filters.division}
              onChange={(e) => handleFilterChange("division", e.target.value)}
            >
              <option value="">All</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattagram">Chattagram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Maymansign">Maymansign</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </label>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-5">
          {filteredBiodatas.map((biodata) => (
            <Card key={biodata._id} className="w-fit rounded-none">
              <CardBody>
                <CardHeader
                  floated={false}
                  className="h-fit rounded-none"
                >
                  <img
                    src={biodata.profileImage}
                    alt="profile-picture"
                  />
                </CardHeader>
                <div className="px-5">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="my-2"
                  >
                    {biodata.name}
                  </Typography>
                  <Typography>ID : {biodata.biodataId}</Typography>
                  <Typography>
                    Gendar : {biodata.gender}
                  </Typography>
                  <Typography>
                    Permanent Division : {biodata.permanentDivision}
                  </Typography>
                  <Typography>Age : {biodata.age}</Typography>
                  <Typography>
                    Occupation : {biodata.occupation}
                  </Typography>
                </div>
              </CardBody>
              <CardFooter className="py-2 px-2 ">
                <Link to={`/biodataDetails/${biodata._id}`}>
                  <Button
                    size="sm"
                    variant="text"
                    className="flex items-center gap-2"
                  >
                    View Profile
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiodatasPage;
