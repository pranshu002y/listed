import React from "react";
import "./linechart.css";
const Linechart = () => {
  return (
    <div className="graph">
      <div className="dashboard-heading">
          <span className="head">Activities</span>
          <div className="dashboard-space">
            
            <span>
             Guest
            </span>
            <span>
             User
            </span>
          </div>
        </div>
      <div className="new-1">
        <ul>
          <li>500</li>
          <li>400</li>
          <li>300</li>
          <li>200</li>
          <li>100</li>
          <li>0</li>
        </ul>

        <div class="line-chart">
          <div class="magicpattern"></div>
          <div className="magic"></div>
        </div>
      </div>

      <div className="new">
        <li>Week 1</li>
        <li>Week 2</li>
        <li>Week 3</li>
        <li>Week 4</li>
      </div>
    </div>
  );
};
export default Linechart;
