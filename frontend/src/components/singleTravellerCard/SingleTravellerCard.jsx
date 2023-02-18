import React from 'react'
import './single.css';

const SingleTravellerCard = ({prod}) => {
  return (
    <div className="single__card">
       <span>{prod.name}</span>
       <span>{prod.email}</span>
       <span>{prod.country}</span>
       <span>{prod.numTravelers}</span>
       <span>{"$ "}{prod.currency}</span>
    </div>
  )
}

export default SingleTravellerCard