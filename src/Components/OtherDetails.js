import React, { useState } from "react";

const OtherDetails = () => {
  const [blood, setblood] = useState("");

  return (
    <div>
      <form>
        <div className="row justify-content-start">
          <div className="col">
            <div className="row">
              <div className="col-1">
                <label for="exampleInputEmail1" class="form-label">
                  Occupation
                </label>
              </div>
              <div className="col-2">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Occupation"
                />
              </div>
              <div className="col-1">
                <label for="exampleInputEmail1" class="form-label">
                  Religion
                </label>
              </div>
              <div className="col-2">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Religion"
                />
              </div>
              <div className="col-1">Marital Status</div>
              <div className="col-2">
                <select
                  className="form-select"
                  onChange={(e) => {
                    const selectblood = e.target.value;
                    console.log(selectblood);
                    setblood(selectblood);
                  }}
                  aria-label="Default select example"
                >
                  <option>Marital Status</option>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Other">Other</option>
                </select>
                {blood}
              </div>
              <div className="col-1">Blood Group</div>
              <div className="col-2">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Group</option>
                  <option value="O">O</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-2">
            <button className="btn btn-danger">Cancel</button>
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OtherDetails;
