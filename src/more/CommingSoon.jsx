import React from "react";
import "./CommingSoon.css";
import BottomTab from "./BottomTab";
import MetaData from "./Metadata";

const CommingSoon = () => {
  return (
    <>
      <MetaData title="comming soon" />
      <div>
        <div className="bg">
          <span dataText="Comming" className="first">
            Comming<span dataText="Soon....">Soon....</span>
          </span>
          <div className="one">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <BottomTab />
    </>
  );
};

export default CommingSoon;
