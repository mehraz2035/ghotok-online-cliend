import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    CardHeader,
  } from "@material-tailwind/react";
  
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
  
  const SixProfile = () => {
    
    
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/premium-users')
          .then(res => {
            setData(res.data);
          })
      }, []);

      const users = data.slice(0,6)
      

  
    return (
      <div className="my-20 ">
        <h1 className="text-center text-4xl font-bold">Premium Members</h1>
  
        <div className="grid grid-cols-3 gap-10">
          {users?.map((premium) => (
            <Card key={premium._id} className="mt-10 w-[your-width] rounded-none mb-20">
              <CardBody>
                <CardHeader floated={false} className="h-80 rounded-none">
                  <img src={premium.profileImage} alt={`Profile of ${premium.biodataId}`} />
                </CardHeader>
                <div className="px-5 mt-3">
                  <Typography >
                    ID: {premium.biodataId}
                  </Typography>
                  <Typography>Gender: {premium.gender}</Typography>
                  <Typography>Permanent Division: {premium.permanentDivision}</Typography>
                  <Typography>Age: {premium.age}</Typography>
                  <Typography>Occupation: {premium.occupation}</Typography>
                </div>
              </CardBody>
              <CardFooter className="pt-3 pb-4">
                <Link to={`/biodataDetails/${premium._id}`}>
                  <Button size="sm" variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
  export default SixProfile;
  