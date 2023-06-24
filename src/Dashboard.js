import React from "react";
import "./dashboard.css";
import notification from "../src/assets/notification.svg";
import img1 from "../src/assets/im.png";
import Linechart from "./Linechart";
import Box from "./Box";
import Products from "./Products";
import Combo from "./Combo";

import { useNavigate } from "react-router";


const Dashboard = () => {
  const navigate=useNavigate()

  
  
  

  return (
    <div className="container">
      
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
            <div>
  
</div>
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
