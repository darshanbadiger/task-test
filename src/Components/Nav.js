import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const enterdata = () => {
    navigate("/personal-details");
  };
  const diplaydata = () => {
    navigate("/display-details");
  };
  return (
    <div>
      <div className="row justify-content-around mb-3">
        <div className="col-2">
          <h2>Task Test</h2>
        </div>
        <div className="col-2">
          <h2>ONITO Technologies</h2>
        </div>
        <div className="col-2">
          <button className="btn btn-primary" onClick={enterdata}>
            Enter Details
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-primary" onClick={diplaydata}>
            Search Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
