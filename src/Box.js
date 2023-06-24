import React, { useEffect, useState } from "react";
import "./box.css"
import v1 from "../src/assets/v1.svg";
import v2 from "../src/assets/v2.svg";
import v3 from "../src/assets/v3.svg";
import v4 from "../src/assets/v4.svg";
const   Box = ()=>{

    const [products,setPro] = useState();
    useEffect(()=>{
      fetch("https://api.unsplash.com/photos/?client_id=lCRj-Mv0lFa6C2e5D1KntRtPIviTnTt1en2VCePfzU8")
      .then(r =>r.json())
      .then(post =>setPro(post))
      
    },[])

  console.log(products)
    return(
        <div className="box">
        <div className="box-1">
          <span className="img-likes">
            <img src={v1} />
          </span>
          
          <div className="likes">
            <span className="likes-1">Total Revenues</span>
            <span className="likes-2">{ products && products[0].likes}</span>
          </div>
            
        </div>

        <div className="box-2">
          <span className="img-likes">
            <img src={v2} />
          </span>
          <div className="likes">
            <span className="likes-1">Total Transactions</span>
            <span className="likes-2">{ products && products[0].user.total_collections}
</span>
          </div>
        </div>

        <div className="box-3">
          <span className="img-likes">
            <img src={v3} />
          </span>
          <div className="likes">
            <span className="likes-1">Total Likes</span>
            <span className="likes-2">{ products && products[0].user.total_photos}</span>
          </div>
        </div>

        <div className="box-4">
          <span className="img-likes">
            <img src={v4} />
          </span>
          <div className="likes">
            <span className="likes-1">Total Users</span>
            <span className="likes-2">{ products && products.length}</span>
          </div>
        </div>
      </div>
    )
}
export default Box;