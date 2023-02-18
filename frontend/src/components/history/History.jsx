import React, { useEffect, useState } from "react";
import Axois from "axios";
import { BASE_URL } from "../../config";
import SingleTravellerCard from "../singleTravellerCard/SingleTravellerCard";
import {Button,Backdrop,CircularProgress} from '@mui/material';
import {useNavigate} from "react-router-dom"
import "./history.css";
const History = () => {
  const [previousData, setPreviousData] = useState([]);
  const [showBackDrop, setShowBackDrop] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    (async function () {
        setShowBackDrop(true);  
      let result = await Axois.get(`${BASE_URL}travel/getData`);
      console.log(result.data.data);
      setPreviousData(result.data.data);
      setShowBackDrop(false);
    })();
  }, []);
  return (
      <>
      <Backdrop
        sx={{ color: "#f77728", zIndex: (theme) => theme.zIndex.drawer + 10 }}
        open={showBackDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    <div className="history__container">
      <div className="history__container--header">
        Previous recorded travellers history
      </div>
      <Button
        style={{
          borderRadius: "12px",
          backgroundColor: "#f77728",
          padding: "10px 15px",
          cursor: "pointer",
          outline: "none",
          width:"200px",
          color:"#fff"
        }}
        onClick={() => {
          navigate("/")
        }}
      >
        Go Back
      </Button>
    </div>
    <div className="card__container">
        {previousData.map((prod) => (
          <SingleTravellerCard prod={prod} key={prod._id} />
        ))}
      </div>
    </>
  );
};

export default History;
