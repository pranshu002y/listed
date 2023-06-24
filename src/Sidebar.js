import React from "react";
import { auth } from "./fb";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Sidebar = ()=>{
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await signOut(auth);
        navigate("/"); 
      } catch (error) {
        console.log("Error logging out:", error);
      }
    };
    return(
<div className="sidenav">
        <div className="sidenav-heading">
          <span>Board</span>
        </div>
        <div className="list-items">
          <ul>
            <li onClick={() =>(navigate("/dashboard"))} >Dashboard</li>
            <li onClick={() =>(navigate("/box"))}>Transactions</li>
            <li onClick={() =>(navigate("/combo"))}>Schedules</li>
            <li onClick={() =>(navigate("/user"))}>Users</li>
            <li onClick={() => {handleLogout();
}}>
  Logout
</li>
            <li className="help">Help</li>
            <li className="help-2">Contact us</li>
          </ul>
           
        </div>
      </div>
    )
}
export default Sidebar