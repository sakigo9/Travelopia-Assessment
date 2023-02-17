import React,{useEffect,useState} from 'react';
import Axois from 'axios';
import {BASE_URL} from "../../config"
import "./history.css";
const History = () => {
    const [previousData,setPreviousData]=useState([]);
    useEffect(()=>{
      (async function(){
          let result=await Axois.get(`${BASE_URL}travel/getData`);
          console.log(result.data.data);
          setPreviousData(result.data.data);
      })()
    },[])
  return (
    <div className="history__container">
        <div className="history__container--header">
             Previous recorded travellers history
        </div>
    </div>
  )
}

export default History