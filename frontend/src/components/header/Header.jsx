import React from "react";
import "./header.css";
import { Button } from "@material-ui/core";
import {useNavigate} from "react-router-dom"

const Header = () => {
   const navigate=useNavigate();
  return (
    <header className="header">
      <div className="brand">Travelopia</div>
      <Button
        style={{
          borderRadius: "12px",
          backgroundColor: "#f77728",
          padding: "10px 15px",
          cursor: "pointer",
          outline: "none",
        }}
        onClick={() => {
          navigate("/history")
        }}
      >
        View History
      </Button>
    </header>
  );
};

export default Header;
