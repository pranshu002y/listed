import React from "react";
import "./dashboard.css";
import notification from "../src/assets/notification.svg";
import img1 from "../src/assets/im.png";


import Linechart from "./Linechart";
import Box from "./Box";
import Products from "./Products";
import Combo from "./Combo";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="sidenav">
        <div className="sidenav-heading">
          <span>Board</span>
        </div>
        <div className="list-items">
          <ul>
            <li>Dashboard</li>
            <li>Transactions</li>
            <li>Schedules</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
      <div className="container-2">
        <div className="dashboard-heading">
          <span className="head">Dashboard</span>
          <div className="dashboard-space">
            <span>
              <input className="search" type="search" placeholder="search" />
            </span>
            <span>
              <img src={notification} />
            </span>
            <span>
              <img src={img1} className="im" />
            </span>
          </div>
        </div>

       <Box/>

        <div className="charts"><Linechart/></div>

        <div className="combo">
         <Products/>
          <Combo/>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
