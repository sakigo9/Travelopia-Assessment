import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Snackbar,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import "./traveller.css";
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
    alert("Submitted Data :", cost, fullName, numTravellers, place, email);
  };

  useEffect(() => {
    console.log(cost, fullName, numTravellers, place, email);
  }, [cost, fullName, numTravellers, place, email]);
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackBar(false)}
        message={snackBarMessage}
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 10 }}
        open={showBackDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
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
