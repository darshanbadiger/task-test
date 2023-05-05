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
      <div className="row justify-content-between mb-3">
        <div className="col-2">
          <h3>Task Test</h3>
        </div>
        <div className="col-3">
          <h3>Onito Technologies</h3>
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
