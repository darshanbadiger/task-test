import React, { useEffect, useState } from "react";

const DisplayDetails = () => {
  const [details, setdetails] = useState([]);

  useEffect(() => {
    getdetails();
  }, []);

  const getdetails = async () => {
    let result = await fetch("http://localhost:5000/personal-details");
    result = await result.json();
    setdetails(result);
    console.log(result);
  };

  const searchHandle = async (e) => {
    let key = e.target.value;
    let result = await fetch(`http://localhost:5000/personal-details/${key}`);
    result = await result.json();
    if (result) {
      setdetails(result);
    } else {
      getdetails();
    }
  };

  return (
    <div className="App">
      <h2 className="text-decoration-underline mt-2">User Details</h2>
      <div className="row mb-3">
        <div className="col-2">
          <input
            type=" "
            className="form-control"
            placeholder="Search by Name"
            onChange={searchHandle}
          />
        </div>
      </div>
      <div className="displaydata">
        <ul>
          <li>S No</li>
          <li>Name</li>
          <li>Email</li>
          <li>DOB/Age</li>
          <li>Mobile</li>
          <li>Occupation</li>
          <li>Blood Group</li>
        </ul>

        {details.length > 0 ? (
          details.map((item, index) => (
            <ul key={item._id}>
              <li>{index + 1}</li>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.DOB}</li>
              <li>{item.mobile}</li>
              <li>{item.Occupation}</li>
              <li>{item.blood}</li>
            </ul>
          ))
        ) : (
          <h2>No data Found</h2>
        )}
      </div>
    </div>
  );
};

export default DisplayDetails;
