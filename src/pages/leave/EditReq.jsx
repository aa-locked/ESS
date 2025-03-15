import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const EditReq = () => {
  const { leaveReqId } = useParams();
  const navigate = useNavigate();
  const [reqDtl, setReqDtl] = useState(null);

  useEffect(() => {
    axios
      .get(`https://67d2a19190e0670699be721d.mockapi.io/api/v1/Res/${leaveReqId}`)
      .then((res) => {
        setReqDtl(res.data);
      })
      .catch((err) => console.error(err));
  }, [leaveReqId]);

  const validationSchema = Yup.object({
    empcode: Yup.string().required("Employee Code is Required!"),
    empname: Yup.string().required("Employee Name is Required!"),
    designation: Yup.string().required("Designation is Required!"),
    department: Yup.string().required("Department is Required!"),
    site: Yup.string().required("Sitecode is Required!"),
    reasonforleave: Yup.string().required("Reason For Leave is Required!"),
    startdate: Yup.date().required("Start Date is Required!"),
    enddate: Yup.date().required("End Date is Required!"),
    ttldays: Yup.number().required("Total Days is Required!"),
    submitto: Yup.string().required("Submit To is Required!"),
  });

  if (!reqDtl) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card p-4 shadow">
            <h3 className="text-left mb-4">Leave Edit Form</h3>
            <Formik
              initialValues={{
                empcode: reqDtl.EmpCode || "",
                empname: reqDtl.EmpName || "",
                designation: reqDtl.Designation || "",
                department: reqDtl.Department || "",
                site: reqDtl.Site || "",
                plcr: reqDtl.PLCr || "",
                mlcr: reqDtl.MLCr || "",
                reasonforleave: reqDtl.LeaveReason || "",
                // startdate: reqDtl.StartDate ,
                // enddate: reqDtl.EndDate ,
                ttldays: reqDtl.TotalDays || "",
                submitto: reqDtl.SubmitTo || "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                let postData = {
                  EmpCode: parseInt(values.empcode),
                  EmpName: values.empname,
                  Designation: values.designation,
                  Department: values.department,
                  Site: values.site,
                  PLCr: parseInt(values.plcr),
                  MLCr: parseInt(values.mlcr),
                  LeaveReason: values.reasonforleave,
                  StartDate: values.startdate,
                  EndDate: values.enddate,
                  TotalDays: parseInt(values.ttldays),
                  SubmitTo: parseInt(values.submitto),
                };

                axios
                  .put(
                    `https://67d2a19190e0670699be721d.mockapi.io/api/v1/Res/${leaveReqId}`,
                    postData
                  )
                  .then(() => {
                    navigate("/leave-dtl");
                  })
                  .catch((err) => console.error(err))
                  .finally(() => setSubmitting(false));
              }}
              enableReinitialize
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="row">
                    <div className="col-sm-3 mb-3">
                      <label className="form-label">Emp Code</label>
                      <Field type="text" name="empcode" className="form-control" readOnly />
                      <ErrorMessage name="empcode" component="div" className="text-danger" />
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

                  <div className="row">
                    <div className="col-sm-3 mb-3">
                      <label className="form-label">Site</label>
                      <Field as="select" name="site" className="form-control">
                        <option value="">--Select--</option>
                        <option value="MUMB">MUMB</option>
                        <option value="BIAL">BIAL</option>
                        <option value="GIAL">GIAL</option>
                      </Field>
                      <ErrorMessage name="site" component="div" className="text-danger" />
                    </div>

                    <div className="col-sm-3 mb-3">
                      <label className="form-label">Reason For Leave</label>
                      <Field type="text" name="reasonforleave" className="form-control" />
                      <ErrorMessage name="reasonforleave" component="div" className="text-danger" />
                    </div>

                    <div className="col-sm-3 mb-3">
                      <label className="form-label">Start Date</label>
                      <Field type="date" name="startdate" className="form-control" />
                      <ErrorMessage name="startdate" component="div" className="text-danger" />
                    </div>

                    <div className="col-sm-3 mb-3">
                      <label className="form-label">End Date</label>
                      <Field type="date" name="enddate" className="form-control" />
                      <ErrorMessage name="enddate" component="div" className="text-danger" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 mb-3">
                      <label className="form-label">Total Days</label>
                      <Field type="number" name="ttldays" className="form-control" />
                      <ErrorMessage name="ttldays" component="div" className="text-danger" />
                    </div>

                    <div className="col-sm-3 mb-3">
                      <label className="form-label">Submit To</label>
                      <Field as="select" name="submitto" className="form-control">
                        <option value="">--Select--</option>
                        <option value="1">N Santosh Kumar</option>
                        <option value="2">Dinesh Dokania</option>
                      </Field>
                      <ErrorMessage name="submitto" component="div" className="text-danger" />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                    Update Request
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReq;
