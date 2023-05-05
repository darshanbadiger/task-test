import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EnterData = () => {
  const onSubmit = (values, props) => {
    console.log(values);
    props.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      DOB: "",
      sex: "",
      mobile: "",
      govt_id_type: "",
      govt_id_data: "",
      country: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, "Minimum of 4 characters required")
        .max(25)
        .required("This Field is required"),
      DOB: Yup.string().required("This field is required"),
      sex: Yup.string().required("Select one type"),
      mobile: Yup.string()
        .min(10, "Enter Proper Mobile Number")
        .max(12, "Enter Proper Mobile Number")
        .required("This field is required"),
      govt_id_type: Yup.string().required("Select One Govt ID"),
      govt_id_data: Yup.string()
        .min(10, "minimum 10 characters")
        .max(12, "maximum 12 characters")
        .required("This field is required")

        .required("This field is required"),
      country: Yup.string().required("Select one Country"),
      email: Yup.string()
        .email("Please enter validd email")
        .required("This field is required"),
    }),
    onSubmit,
  });
  //   console.log(formik.values);
  //   console.log(formik.errors);
  //   console.log(formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row mb-3">
          <div className="col-1">
            <label>Name:</label>
          </div>
          <div className="col-2">
            <input
              name="name"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Enter Name"
            />
            {formik.touched.name && formik.errors.name && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.name}
              </p>
            )}
          </div>

          <div className="col-1">
            <label>DOB/Age:</label>
          </div>
          <div className="col-2">
            <input
              name="DOB"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.DOB}
              placeholder="DD/MM/YYYY or Age"
            />
            {formik.errors.DOB && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.DOB}
              </p>
            )}
          </div>

          <div className="col-1">
            <label>Sex:</label>
          </div>
          <div className="col-2">
            <select
              name="sex"
              className="form-select"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.sex}
            >
              <option defaultValue="Select Gender">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {formik.errors.sex && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.sex}
              </p>
            )}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-1">
            <label>Mobile:</label>
          </div>
          <div className="col-2">
            <input
              name="mobile"
              placeholder="Mobile Number"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile}
            />
            {formik.touched.mobile && formik.errors.mobile && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.mobile}
              </p>
            )}
          </div>
          <div className="col-1">
            <label>Govt ID:</label>
          </div>
          <div className="col-2">
            <select
              defaultValue="select"
              name="govt_id_type"
              className="form-select"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.govt_id_type}
            >
              <option defaultValue="">Select ID Proof</option>
              <option value="adhaar">Adhaar</option>
              <option value="PAN">PAN Card</option>
            </select>
            {formik.touched.govt_id_type && formik.errors.govt_id_type && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.govt_id_type}
              </p>
            )}
          </div>
          <div className="col-2">
            <input
              name="govt_id_data"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.govt_id_data}
            />
            {formik.touched.govt_id_data && formik.errors.govt_id_data && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.govt_id_data}
              </p>
            )}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-1">
            <label>Country:</label>
          </div>
          <div className="col-2">
            <select
              name="country"
              className="form-select"
              defaultValue="select"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            >
              <option defaultValue="select">Select Country</option>
              <option value="india">India</option>
              <option value="pak">Pakistan</option>
              <option value="china">China</option>
              <option value="USA">USA</option>
            </select>
            {formik.touched.country && formik.errors.country && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.country}
              </p>
            )}
          </div>

          <div className="col-1">
            <label>Email ID</label>
          </div>
          <div className="col-2">
            <input
              name="email"
              placeholder="Email ID"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p style={{ color: "red", font: "12px" }}>
                {formik.errors.email}
              </p>
            )}
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnterData;
