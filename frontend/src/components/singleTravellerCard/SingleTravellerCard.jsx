import React from "react";
import "./single.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import PublicIcon from '@mui/icons-material/Public';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from '@mui/icons-material/Group';

const SingleTravellerCard = ({ prod }) => {
  return (
    <div className="single__card">
      <div className="details">
        <AccountCircleIcon />
        <span className="title">{prod.name}</span>
      </div>
      <div className="details">
        <MailIcon />
        <span className="title">{prod.email}</span>
      </div>
      <div className="details">
        <PublicIcon />
        <span className="title">{prod.country}</span>
      </div>
      <div className="details">
        <GroupIcon />
        <span className="title">{prod.numTravelers}</span>
      </div>
      <div className="details">
        <AttachMoneyIcon fontSize="small"/>
        <span className="title">
          {prod.currency}
        </span>
      </div>
    </div>
  );
};

export default SingleTravellerCard;
