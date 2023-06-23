import React from "react";
import ss from "../src/assets/ss.png";
const Products =()=>{
    return(
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
    )
}
export default Products