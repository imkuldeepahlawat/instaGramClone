import React from "react";
import "./Homepage.css";
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";
const Homepage = () => {
  return (
    <div className="homepage">
      {/* sidebar */}
      <div className="homepage__nav">
        <Sidenav />
      </div>

      {/* timeline */}
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
};

export default Homepage;
