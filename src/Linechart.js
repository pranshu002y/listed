import React, { useState } from "react";
import "./linechart.css";
import green from "../src/assets/green.svg";
import red from "../src/assets/red.svg";

const Linechart = () => {
  const [selectedWeek, setSelectedWeek] = useState("May-june 2021");

  const handleWeekChange = (e) => {
    setSelectedWeek(e.target.value);
  };

  const renderWeeks = () => {
    const weeks = ["May-june 2021", "June-july 2021", "july-August 2021", "August-September 2021"];
    return weeks.map((week, index) => (
      <option key={index} value={week}>
        {week}
      </option>
    ));
  };

  const renderListItems = () => {
    const data = {
      "May-june 2021": [500, 400, 300, 200, 100, 0],
      "June-july 2021": [600, 450, 350, 250, 150, 50],
      "july-August 2021": [400, 300, 200, 100, 50, 10],
      "August-September 2021": [550, 380, 270, 190, 80, 20]
    };

    const selectedData = data[selectedWeek] || [];
    return selectedData.map((item, index) => <li key={index}>{item}</li>);
  };

  return (
    <div className="graph">
      <div className="dashboard-heading">
        <span className="head">Activities</span>
       
        <div className="dashboard-space">
          <span>
            <img src={green} /> Guest
          </span>
          <span>
            <img src={red} /> User
          </span>
        </div>
       
      </div>
      <select className="sse"   value={selectedWeek} onChange={handleWeekChange}>
          {renderWeeks()}
        </select>
      <div className="new-1">
        <ul>{renderListItems()}</ul>

        <div className="line-chart">
        {selectedWeek === "May-june 2021" && (
    <>
      <div className="magicpattern"></div>
      <div className="magic"></div>
    </>
  )}
          {selectedWeek === "June-july 2021" && 
          <>
          <div className="magic-2"></div>
          <div className="magic-3"></div>
          </>
          }

{selectedWeek === "july-August 2021" && (
    <>
      <div className="magic-4"></div>
      <div className="magic-5"></div>
    </>
  )}

{selectedWeek === "August-September 2021" && (
    <>
      <div className="magic-6"></div>
    </>
  )}


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
