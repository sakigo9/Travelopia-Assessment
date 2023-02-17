import React from 'react'
import "./home.css";
import Traveller from '../traveller/Traveller';
import Header from "./../header/Header";
const Home = () => {
  return (
      <>
        <Header />
    <div className="home__container">
        <div className="home__container--heading">
           <div className="heading-one">
           THE WORLD'S LEADING COLLECTION OF
           </div>
           <div className="heading-two">
           EXPERIENTIAL TRAVEL BRANDS
           </div>
        </div>
        <Traveller/>
    </div>
    </>
  )
}

export default Home