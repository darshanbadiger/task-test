import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const TableDisplay = () => {
  const [details, setdetails] = useState([]);
  const [search, setSearch] = useState("");
  const [filterdetails, setfilterdetails] = useState([]);

  useEffect(() => {
    getdetails();
  }, []);

  const getdetails = async () => {
    let result = await fetch("http://localhost:5000/personal-details");
    result = await result.json();
    setdetails(result);
    setfilterdetails(result);
    console.log(result);
  };

  useEffect(() => {
    const result = details.filter((name1) => {
      return name1.name.toLowerCase().match(search.toLowerCase());
    });

    setfilterdetails(result);
  }, [search]);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email ID",
      selector: (row) => row.email,
    },
    {
      name: "DOB/Age",
      selector: (row) => row.DOB,
    },
    {
      name: "Occupation",
      selector: (row) => row.Occupation,
    },
    {
      name: "Blood Group",
      selector: (row) => row.blood,
    },
  ];

  return (
    <div>
      <DataTable
        title="Personal Details"
        columns={columns}
        data={filterdetails}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        highlightOnHover
        actions={<button className="btn btn-success">Export</button>}
        subHeader
        subHeaderComponent={
          <input
            type="text"
            className="w-25 form-control"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
        subHeaderAlign="center"
        // subHeaderAlign="left"
      />
    </div>
  );
};

export default TableDisplay;
