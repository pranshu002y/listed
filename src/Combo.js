import React, { useEffect, useState } from "react";
const Combo =()=>{
  const [products ,setPro] =useState();
  useEffect(()=>{
    fetch("https://api.unsplash.com/photos/?client_id=lCRj-Mv0lFa6C2e5D1KntRtPIviTnTt1en2VCePfzU8")
    .then(r =>r.json())
    .then(post=> setPro(post))
  },[])
  console.log(products)
    return(
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
          <span className="event-date">{products && products[0].user.updated_at}</span>
          <span className="event-time">{products && products[0].user.location}</span>
        </div>
        <div className="event-2">
          <span className="slogan-head">
            Meeting with suppliers from Kuta Bali
          </span>
          <span className="event-date">{products && products[1].user.updated_at}</span>
          <span className="event-time">{products && products[1].user.location}</span>
        </div>
      </div>
      </div>
    )
}
export default Combo