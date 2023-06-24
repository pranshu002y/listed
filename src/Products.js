import React, { useEffect, useState } from "react";
import ss from "../src/assets/ss.png";
import green from "../src/assets/green.svg";
import yellow  from "../src/assets/yellow.svg";
import red  from "../src/assets/red.svg";
const Products =()=>{
  const [products ,setPro] =useState();
  useEffect(()=>{
    fetch("https://api.unsplash.com/photos/?client_id=lCRj-Mv0lFa6C2e5D1KntRtPIviTnTt1en2VCePfzU8")
    .then(r =>r.json())
    .then(post=> setPro(post))
  },[])
  console.log(products)
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
                <img  src={green} /> Basic Tees<h4>{products && products[0].likes}%</h4>
                </span>

                <span>
                <img  src={yellow} /> Custom Short Pants <h4>{products && products[1].likes}%</h4>
                </span>

                <span>
                  {" "}
                  <img  src={red} />  Super Hoodies<h4>{products && products[3].likes}%</h4>
                </span>
              </div>
            </div>
          </div>
    )
}
export default Products