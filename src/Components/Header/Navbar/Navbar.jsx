import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
 return (
  <div>
      <nav className="flex py-3 justify-between">
        <Logo></Logo>                      
       <ul className="flex items-center gap-5 text-xl font-medium">
          <li>
          <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
  }
   >
  Home
   </NavLink>                  
         </li>

         <li>
          <NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
  }
   >
  Donation
   </NavLink>                  
         </li> 

         
         <li>
          <NavLink
  to="/statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
  }
   >
  Statistics
   </NavLink>                  
         </li> 

       </ul>
    </nav>                                                                                   
  </div>
 );
};

export default Navbar;