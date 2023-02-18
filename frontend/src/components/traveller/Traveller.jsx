import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Snackbar,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import Axois from "axios";
import "./traveller.css";
import { BASE_URL } from "../../config";
const Traveller = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [numTravellers, setNumTravellers] = useState(null);
  const [cost, setCost] = useState(null);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [showBackDrop, setShowBackDrop] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const countries = [
    { value: "India" },
    { value: "Africa" },
    { value: "Europe" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    let dataObject = {
      name: fullName,
      email: email,
      country: place,
      numTravelers: numTravellers,
      currency: cost,
    };
    if (
      fullName.trim().length > 2 &&
      email.trim().length > 5 &&
      place.trim().length > 2 &&
      numTravellers > 0 &&
      cost > 0
    ) {
      setShowBackDrop(true);  
      Axois.post(`${BASE_URL}travel/createData`, dataObject)
        .then((res) => {
            setShowBackDrop(false);
            setOpenSnackBar(true);
            setSnackBarMessage("Data submitted Successfully!!");
        })
        .catch((err) => {
            setOpenSnackBar(true);
            setSnackBarMessage("Error while submitting data");
            console.log(err);
        });
    } else {
      setOpenSnackBar(true);
      setSnackBarMessage("Kindly enter all mandatory details");
    }
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={openSnackBar}
        autoHideDuration={4000}
        style={{color: "#f77728"}}
        onClose={() => setOpenSnackBar(false)}
        message={snackBarMessage}
      />
      <Backdrop
        sx={{ color: "#f77728", zIndex: (theme) => theme.zIndex.drawer + 10 }}
        open={showBackDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          className="textField"
          fullWidth
          label="Full Name*"
          name="Full Name*"
          type="text"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          sx={{ width: "45%", m: 1.5 }}
        ></TextField>
        <TextField
          fullWidth
          className="textField"
          label="Email Address*"
          name="Email Address*"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          sx={{ width: "45%", m: 1.5 }}
        ></TextField>
        <TextField
          className="textField"
          fullWidth
          select
          SelectProps={{
            native: true,
          }}
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          label="Where do you want to go?*"
          name="Where do you want to go?*"
          sx={{ width: "45%", m: 1.5 }}
        >
          <option value="" selected></option>
          {countries.map((item, index) => (
            <option key={index} value={item.value}>
              {item.value}
            </option>
          ))}
        </TextField>
        <TextField
          className="textField"
          fullWidth
          label="No. of travellers*"
          name="No. of travellers*"
          type="number"
          value={numTravellers}
          onChange={(e) => setNumTravellers(e.target.value)}
          sx={{ width: "45%", m: 1.5 }}
        ></TextField>
        <TextField
          fullWidth
          className="textField"
          label="Enter you budget in Dollars*"
          name="Enter you budget in Dollars*"
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          sx={{ width: "45%", m: 1.5 }}
        ></TextField>
        <Box>
          <Button
            style={{
              borderRadius: "12px",
              backgroundColor: "#f77728",
              padding: "10px 15px",
              cursor: "pointer",
              outline: "none",
              color: "#fff",
              marginBottom: "12px",
            }}
            type="submit"
          >
            + Add Travller
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Traveller;
