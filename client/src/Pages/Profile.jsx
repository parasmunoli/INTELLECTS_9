import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { resume } from "../Utils/links";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-first">
        <div className="user-info">
          <img
            src="https://th.bing.com/th/id/OIP.WpnGIPj1DKAGo-CP64znTwHaHa?rs=1&pid=ImgDetMain"
            alt=""
          />
          <div>
            <h1>Lilly</h1>
            <p>University</p>
          </div>
        </div>
        <div className="profile-edit">
          <button className="profile-edit-first">Edit Profile</button>
          <button className="profile-edit-second">View Profile</button>
        </div>
      </div>
      <h3>Personal Information</h3>
      <div className="personal-info-1">
        <div className="email">
          <MdOutlineEmail />
        </div>
        <div className="personal-info-details">
          <h4>Email</h4>
          XYZ@gmail.com
        </div>
      </div>
      <div className="personal-info-2">
        <div className="location">
          <FaLocationDot />
        </div>
        <div className="personal-info-details">
          <h4>Location</h4>
          Indore
        </div>
      </div>
      <div className="resume">Resume</div>
      <div className="application">
        <h3>Application</h3>
        <div>
          {resume.map((data, index) => {
            return (
              <div className="application-grid">
                <img src={data.img} alt="" />
                <div>
                  <h4>{data.heading}</h4>
                  <p>{data.desc}</p>
                </div>
                <h4>{data.response}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
