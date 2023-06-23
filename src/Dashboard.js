import React from "react";
import "./dashboard.css";
import notification from "../src/assets/notification.svg";
import img1 from "../src/assets/im.png";

import ss from "../src/assets/ss.png";
import Linechart from "./Linechart";
import Box from "./Box";

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
          <div className="products">
            <div className="dashboard-heading">
              <span className="head-2">Top products</span>
              <span>
                <select name="date" id="months" className="select">
                  <option value="may-june">May-june 2021</option>
                  <option value="saab">June-july 2021</option>
                  <option value="mercedes">july-August 2021</option>
                  <option value="audi">August-September 2021</option>
                </select>
              </span>
            </div>
            <div className="chart-container">
              <div className="chart-box">
              <img id="rotate-image" src={ss} />
              </div>

              <div className="dots">
                <span>
                  Basic Tees<h4>55%</h4>
                </span>

                <span>
                  Custom Short Pants <h4>33%</h4>
                </span>

                <span>
                  {" "}
                  Super Hoodies<h4>14%</h4>
                </span>
              </div>
            </div>
          </div>
          <div className="schedule">
            <div className="dashboard-heading">
              <span className="head-2">Today’s schedule</span>
              <span className="seel">See All</span>
            </div>
          <div className="sch">
          <div className="event-1">
              <span className="slogan-head">
                Meeting with suppliers from Kuta Bali
              </span>
              <span className="event-date">14.00-15.00</span>
              <span className="event-time">at Sunset Road, Kuta, Bali</span>
            </div>
            <div className="event-2">
              <span className="slogan-head">
                Meeting with suppliers from Kuta Bali
              </span>
              <span className="event-date">14.00-15.00</span>
              <span className="event-time">at Sunset Road, Kuta, Bali</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
