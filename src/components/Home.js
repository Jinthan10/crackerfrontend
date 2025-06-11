import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
function Home() {
 
  return (
       <div className="container">
         <h2>Welcome to Crackers world! new build</h2>
         <p>
           Discover the world of delicious crackers. From classic favorites to
           innovative flavors, we have something for everyone!
         </p>
 
         {/* Links to other sections */}
         <div className="dashboard-container">
           <div className="dashboard-col">
             <Link to="/api/products">Explore Our Products</Link>
           </div>
           <div className="dashboard-col">
             <Link to="/aboutus">Learn More About Us</Link>
           </div>
           <div className="dashboard-col">
             <Link to="/contactus">Contact Us</Link>
           </div>
         </div>
       </div>
     );
   }
 
export default Home;
