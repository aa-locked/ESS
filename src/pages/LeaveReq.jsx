import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const LeaveReq = () => {
    const validationSchema = Yup.object({
        empcode: Yup.string().required("Employee Code is Required!"),
        empname: Yup.string().required("Employee Name is required!"),
        designation:Yup.string().required("Designation is Required!"),
        department:Yup.string().required("Department is Required!"),
        site:Yup.string().required("Sitecode is Required!"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
      });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card p-4 shadow">
            <h3 className="text-left mb-4">Leave Request Form</h3>
            <Formik
              initialValues={{
                empcode: "12558",
                empname: "Aalok Rajeshkumar Dubey",
                designation:"OFFICER - PROGRAMMING",
                department:"ITS",
                site:"1",
                plcr:10,
                mlcr:5,
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("Form Data:", values);
                alert("Registration Successful!");
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                    <div className='row'>
                        <div className=" col-sm-3  mb-3">
                            <label className="form-label">Emp Code</label>
                            <Field type="text" name="empcode" className="form-control" readOnly  />
                            <ErrorMessage name="empcode" component="div" className="text-danger"  />
                         </div>

                        <div className="col-sm-3 mb-3">
                            <label className="form-label">Employee Name</label>
                            <Field type="text" name="empname" className="form-control" readOnly />
                            <ErrorMessage name="empname" component="div" className="text-danger" />
                        </div>
                        <div className="col-sm-3 mb-3">
                            <label className="form-label">Designation</label>
                            <Field type="text" name="designation" className="form-control" readOnly />
                            <ErrorMessage name="designation" component="div" className="text-danger" />
                        </div>
                        <div className="col-sm-3 mb-3">
                            <label className="form-label">Department</label>
                            <Field type="text" name="department" className="form-control" readOnly />
                            <ErrorMessage name="department" component="div" className="text-danger" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-sm-3 mb-3">
                            <label className="form-label">Site</label>
                            <Field as="select" name="site" className="form-control">
                                <option value="-1">--Select--</option> 
                                <option value="1">MUMB</option>
                                <option value="2">BIAL</option>
                                <option value="3">GIAL</option>
                            </Field>
                            <ErrorMessage name="site" component="div" className="text-danger" />
                        </div>
                        <div className="col-sm-3 mb-3">
                            <label className="form-label">PL Cr</label>
                            <Field type="text" name="plcr" className="form-control" readOnly />
                            <ErrorMessage name="plcr" component="div" className="text-danger" />
                        </div>
                        <div className="col-sm-3 mb-3">
                            <label className="form-label">ML Cr</label>
                            <Field type="text" name="mlcr" className="form-control" readOnly />
                            <ErrorMessage name="mlcr" component="div" className="text-danger" />
                        </div>
                        <div className="col-sm-3 mb-3">
                            <label className="form-label">Nature of Leave</label>
                            <Field as="select" name="natureofleave" className="form-control">
                                <option value="-1">--Select--</option> 
                                <option value="1">MUMB</option>
                                <option value="2">BIAL</option>
                                <option value="3">GIAL</option>
                            </Field>
                            <ErrorMessage name="natureofleave" component="div" className="text-danger" />
                        </div>
                    </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <Field type="password" name="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <Field type="password" name="confirmPassword" className="form-control" />
                    <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                  </div>

                  <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                    Register
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaveReq
