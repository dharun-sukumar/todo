import React from "react";
import ProgressBar from "./Activities";
import { WiTime3 } from "react-icons/wi";

function Content() {
  return (
    <div className="content">
      <div className="recent-activities"><h3>Recent Activities</h3></div>
        <div className="activity-card">
          <h3>App Development</h3>
          <div className="date">From : <span>20.12.2003</span></div>
          <ProgressBar />
          <div className="time-remaining">
          <WiTime3 style={{fontSize: "14px", position: "relative", top: "3px"}} /><span> 2 weeks</span> left
          </div>
      </div>
    </div>
  );
}
export default Content;