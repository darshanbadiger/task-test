import React, { useState } from "react";

const PersonalDetails = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [sex, setsex] = useState("");
  const [blood, setblood] = useState("");
  const [marriage, setmarriage] = useState("");
  const [DOB, setdob] = useState("");
  const [guardian_guard, setguard] = useState("");
  const [guardian_guardname, setguardname] = useState("");
  const [contact, setcontact] = useState("");
  const [mobile, setmobile] = useState("");
  const [govt_id_type, settype] = useState("");
  const [govt_id_data, setdata] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [country, setcountry] = useState("");

  const savedata = async () => {
    let result = await fetch("http://localhost:5000/personal-details", {
      method: "post",
      body: JSON.stringify({
        name,
        email,
        sex,
        blood,
        marriage,
        DOB,
        guardian_guard,
        guardian_guardname,
        contact,
        mobile,
        govt_id_type,
        govt_id_data,
        Occupation,
        country,
      }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result.name);
  };
  return (
    <div>
      <h2 className="text-decoration-underline">Personal Details</h2>
      <form>
        <div className="row justify-content-end mb-3 mt-3">
          <div className="col-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div className="col-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Sex
            </label>

            <select
              className="form-select"
              onChange={(e) => setsex(e.target.value)}
              aria-label="Default select example"
            >
              <option defaultValue={sex}>Enter Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="col-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Date of Birth or Age
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setdob(e.target.value)}
              value={DOB}
              id="exampleInputEmail1"
              placeholder="DD/MM/YYYY or Age in Years"
            />
          </div>
        </div>

        <div className="row justify-content-start mb-3 mt-3">
          <div className="col">
            <div className="row">
              <div className="col-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Mobile Number
                </label>
              </div>
              <div className="col-5">
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setmobile(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Mobile Number"
                />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <div className="col-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Govt ID
                </label>
              </div>

              <div className="col-4">
                <select
                  className="form-select"
                  value={govt_id_type}
                  onChange={(e) => settype(e.target.value)}
                  aria-label="Default select example"
                >
                  <option defaultValue={govt_id_type}>Select Govt ID</option>
                  <option value="Adhaar">Adhaar</option>
                  <option value="PAND Card">PAN Card</option>
                  <option value="DL">Driving License</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-5">
                <input
                  type="text"
                  value={govt_id_data}
                  onChange={(e) => setdata(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Details"
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-decoration-underline mt-2"> Contact Details</h2>

        <div className="row justify-content-end mb-3 mt-3">
          <div className="col-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Guardians Details
            </label>

            <select
              className="form-select"
              onChange={(e) => setguard(e.target.value)}
              aria-label="Default select example"
            >
              <option defaultValue={guardian_guard}>Select Guardians</option>
              <option value="Parents">Parents</option>
              <option value="Relatives">Relatives</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              value={guardian_guardname}
              onChange={(e) => setguardname(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Guardian Name"
            />
          </div>

          <div className="col-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email ID
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter Email Address"
            />
          </div>

          <div className="col-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Emergency Contact Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
              placeholder="Emergency Contact No"
            />
          </div>
        </div>

        <h2 className="text-decoration-underline mt-2"> Other Details</h2>

        <div className="row justify-content-start">
          <div className="col">
            <div className="row">
              <div className="col-1">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Occupation
                </label>
              </div>
              <div className="col-2">
                <input
                  type="email"
                  value={Occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Occupation"
                />
              </div>
              <div className="col-1">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Religion
                </label>
              </div>
              <div className="col-2">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Religion"
                />
              </div>
              <div className="col-1">Marital Status</div>
              <div className="col-2">
                <select
                  className="form-select"
                  onChange={(e) => setmarriage(e.target.value)}
                  aria-label="Default select example"
                >
                  <option defaultValue={marriage}>Marital Status</option>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Widow">Widow</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>
              <div className="col-1">Blood Group</div>
              <div className="col-2">
                <select
                  className="form-select"
                  onChange={(e) => setblood(e.target.value)}
                  aria-label="Default select example"
                >
                  <option defaultValue={blood}>Group</option>
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

        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nationality
                </label>
              </div>
              <div className="col-4">
                <select
                  className="form-select"
                  onChange={(e) => setcountry(e.target.value)}
                >
                  <option defaultValue={country}>Select Country</option>
                  <option defaultValue="India">India</option>
                  <option value="Pak">Pakistan</option>
                  <option value="China">China</option>
                  <option value="Nepal">Nepal</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-end">
          <div className="col-2">
            <button className="btn btn-danger">Cancel</button>
            <button
              type="button"
              className="btn btn-success"
              onClick={savedata}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
