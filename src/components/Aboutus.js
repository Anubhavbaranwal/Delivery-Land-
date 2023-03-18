import React, { useState } from "react";
import Profile from "./Profile";
import { Outlet, Link } from "react-router-dom";
import food from "../../assets/burger-image.png";
const About = () => {
  const [showProfile, setShowProfile] = useState(true);
  return (
    <div className="about">
      <p className="my-4 text-center">
        {showProfile ? (
          <>
           <Link to={"/Aboutus"}>
            
              <button
                className="bg-yellow-400 border rounded px-2 h-10 "
                onClick={() => setShowProfile(false)}
              >
                Show the Profile
              </button>
             
            </Link>
          </>
        ) : (
          <Link to={"Profile"}>
            <button
              className="bg-yellow-400 border rounded px-2 h-10 "
              onClick={() => setShowProfile(true)}
            >
              Hide The Profile
            </button>
            <Profile />
          </Link>
        )}
      </p>
      <div className="flex justify-around ">
        <div className="justify-center  ">
          <h1>
            <span className="text-6xl my-8 space-y-10 font-bold text-neutral-800 ">
              {" "}
              Welcome to <br /> The world of <br />{" "}
            </span>
          </h1>
          <h1 className="my-2">
            <span className="bg-amber-400  rounded-lg text-6xl">
              Tasty & Fresh Food
            </span>
          </h1>
          <h4 className="text-2xl  text-neutral-800">
            "Better you will feel if you eat a healthy Food meal from{" "}
            <span className="text-2xl text-amber-400"> Delivery Land</span>"
          </h4>
        </div>
        <div className="about-right">
          <img src={food} alt="Food Image" />
        </div>
      </div>
    </div>
  );
};
export default About;
