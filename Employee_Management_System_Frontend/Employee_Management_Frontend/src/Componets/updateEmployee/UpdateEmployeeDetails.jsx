import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Alert,
  Form,
} from "react-bootstrap";
import { UpdateEmployeeDetailsSchema } from "./UpdateEmployeeDetailsSchema";
import { EmployeeCountryName } from "../../../public/UtilData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  employeeManagement_base_URL,
  employeeManagement_employeeDetails_updateEmployeeDetails_URL,
} from "../../../public/ApiUrl";
function UpdateEmployeeDetails() {
  const navigate = useNavigate();
  if (
    !sessionStorage.getItem("isLoggedIn") ||
    sessionStorage.getItem("isLoggedIn") === "false"
  ) {
    navigate("/login");
  }
  const locationData = useLocation();
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: locationData.state.employeeData,
    onSubmit: (values) => {
      axios
        .put(
          employeeManagement_base_URL +
            employeeManagement_employeeDetails_updateEmployeeDetails_URL,
          values
        )
        .then((response) => {
          // console.log("All data has been updated successfully")
          if (
            response.data ===
            "employee successfully updated with employeeId:" + values.employeeId
          ) {
            toast.success("Employee Details Updated successfully!");
            setTimeout(() => {
              navigate(-1);
            }, 3000);
          } else {
            toast.warning("Oops! Employee data Unable is deu to server Errror");
          }
        })
        .catch((error) => {
          if (
            error.response.data.exceptionMessage ===
            "Employee with employee Id: " +
              values.employeeId +
              "does not exists"
          ) {
            toast.warning(
              "Oops!  Employee with employee Id:" +
                values.employeeId +
                " does not exists"
            );
          } else {
            toast.error("Oops! Something Went Wrong");
          }
        });
    },
    validationSchema: UpdateEmployeeDetailsSchema,
  });
  return (
    <div style={{ margin: "5px" }}>
      <Container style={{ marginLeft: "400px", display: "flex" }}>
        <Row>
          <Col>
            <Card
              style={{
                zIndex: "-1",
                position: "inherit",
                marginTop: "80px",
                width: "60rem",
                textAlign: "center",
                backgroundColor: "#1d2e3f",
                color: "white",
                height: "700px",
                marginLeft: "-200px",
              }}
            >
              <Card.Body>
                <Card.Title>Update Employee</Card.Title>
                {/* <Card.Img src=''></Card.Img> */}
                <Card.Text>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col>
                        <div style={{ padding: "2px" }}>
                          <label>Employee Id:</label>
                          <br></br>
                          <input
                            onBlur={handleBlur}
                            type="number"
                            value={locationData.state.employeeData.employeeId}
                            onChange={handleChange}
                            name="employeeId"
                            style={{
                              width: "400px",
                              height: "40px",
                              borderRadius: "10px",
                            }}
                          ></input>
                          {errors.employeeId && touched.employeeId ? (
                            <Alert
                              style={{
                                marginLeft: "25px",
                                marginTop: "2px",
                                paddingBottom: "30px",
                                height: "40px",
                                width: "400px",
                              }}
                              variant="danger"
                            >
                              {errors.employeeId}
                            </Alert>
                          ) : null}
                        </div>
                      </Col>
                      <Col>
                        <div style={{ padding: "2px" }}>
                          <label>Employee Email Id</label>
                          <br></br>
                          <input
                            onBlur={handleBlur}
                            type="text"
                            style={{
                              width: "400px",
                              height: "40px",
                              borderRadius: "10px",
                            }}
                            value={values.employeeEmail}
                            onChange={handleChange}
                            name="employeeEmail"
                          ></input>
                          <br></br>
                                                    {errors.employeeEmail && touched.employeeEmail ? <Alert style={{ marginLeft: '25px', marginTop: '2px', paddingBottom: '30px', height: '40px', width: '400px' }} variant='danger'>
                                                        {errors.employeeEmail}
                                                    </Alert> : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div style={{ padding: "2px" }}>
                          <label>Employee First Name</label>
                          <br></br>
                          <input
                            type="text"
                            onBlur={handleBlur}
                            style={{
                              width: "400px",
                              height: "40px",
                              borderRadius: "10px",
                            }}
                            value={values.employeeFirstName}
                            onChange={handleChange}
                            name="employeeFirstName"
                          ></input>
                          <br></br>
                          {errors.employeeFirstName &&
                          touched.employeeFirstName ? (
                            <Alert
                              style={{
                                marginLeft: "25px",
                                marginTop: "2px",
                                paddingBottom: "30px",
                                height: "40px",
                                width: "400px",
                              }}
                              variant="danger"
                            >
                              {errors.employeeFirstName}
                            </Alert>
                          ) : null}
                        </div>
                      </Col>
                      <Col>
                        <div style={{ padding: "2px" }}>
                          <label>Employee Last Name</label>
                          <br></br>
                          <input
                            onBlur={handleBlur}
                            type="text"
                            style={{
                              width: "400px",
                              height: "40px",
                              borderRadius: "10px",
                            }}
                            value={values.employeeLastName}
                            onChange={handleChange}
                            name="employeeLastName"
                          ></input>
                          <br></br>
                          {errors.employeeLastName &&
                          touched.employeeLastName ? (
                            <Alert
                              style={{
                                marginLeft: "25px",
                                marginTop: "2px",
                                paddingBottom: "30px",
                                height: "40px",
                                width: "400px",
                              }}
                              variant="danger"
                            >
                              {errors.employeeLastName}
                            </Alert>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div style={{ padding: "2px" }}>
                          <label>Employee Address City</label>
                          <br></br>
                          <input
                            type="text"
                            value={values.employeeAddressCity}
                            style={{
                              width: "400px",
                              height: "40px",
                              borderRadius: "10px",
                            }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="employeeAddressCity"
                          ></input>
                          <br></br>
                          {errors.employeeAddressCity &&
                          touched.employeeAddressCity ? (
                            <Alert
                              style={{
                                marginLeft: "25px",
                                marginTop: "2px",
                                paddingBottom: "30px",
                                height: "40px",
                                width: "400px",
                              }}
                              variant="danger"
                            >
                              {errors.employeeAddressCity}
                            </Alert>
                          ) : null}
                        </div>
                      </Col>
                      <Col>
                        <div style={{ padding: "2px" }}>
                          <label>Employee Address ZipCode</label>
                          <br></br>
                          <input
                            type="text"
                            value={values.employeeAddressZipCode}
                            style={{
                              width: "400px",
                              height: "40px",
                              borderRadius: "10px",
                            }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="employeeAddressZipCode"
                          ></input>
                          <br></br>
                          {errors.employeeAddressZipCode &&
                          touched.employeeAddressZipCode ? (
                            <Alert
                              style={{
                                marginLeft: "25px",
                                marginTop: "2px",
                                paddingBottom: "30px",
                                height: "40px",
                                width: "400px",
                              }}
                              variant="danger"
                            >
                              {errors.employeeAddressZipCode}
                            </Alert>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div style={{ padding: "2px" }}>
                          <label>Salary Per month </label>
                          <br></br>
                          <input
                            type="number"
                            value={values.employeeSalaryPerMonth}
                            style={{
                              width: "400px",
                              height: "40px",
                              borderRadius: "10px",
                            }}
                            onChange={handleChange}
                            name="employeeSalaryPerMonth"
                            onBlur={handleBlur}
                          ></input>
                          <br></br>
                          {errors.employeeSalaryPerMonth &&
                          touched.employeeSalaryPerMonth ? (
                            <Alert
                              style={{
                                marginLeft: "25px",
                                marginTop: "2px",
                                paddingBottom: "30px",
                                height: "40px",
                                width: "400px",
                              }}
                              variant="danger"
                            >
                              {errors.employeeSalaryPerMonth}
                            </Alert>
                          ) : null}
                        </div>
                      </Col>
                      <Col>
                        <div style={{ padding: "2px" }}>
                          <label>Select Country</label>
                          <Form.Select
                            name="employeeCountry"
                            value={values.employeeCountry}
                            onChange={handleChange}
                            style={{
                              marginLeft: "30px",
                              width: "400px",
                              height: "40px",
                              borderRadius: "10px",
                            }}
                          >
                            {EmployeeCountryName.map((CountryName, index) => (
                              <option
                                key={index}
                                onBlur={handleBlur}
                                value={CountryName}
                              >
                                {CountryName}
                              </option>
                            ))}
                            {errors.employeeCountry ? (
                              <Alert
                                style={{
                                  marginLeft: "25px",
                                  marginTop: "2px",
                                  paddingBottom: "30px",
                                  height: "40px",
                                  width: "400px",
                                }}
                                variant="danger"
                              >
                                {errors.employeeCountry}
                              </Alert>
                            ) : null}
                          </Form.Select>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>
                            <div style={{ marginLeft: "-280px" }}>
                              {" "}
                              Employee Gender
                            </div>
                          </Col>
                          <Col>
                            <div></div>
                          </Col>
                        </Row>
                        <Row>
                          <Col style={{ display: "flex" }}>
                            <span style={{ marginLeft: "40px" }}>
                              Male{" "}
                              <Form.Check
                                checked={
                                  values.employeeGender === "Male"
                                    ? true
                                    : false
                                }
                                name="employeeGender"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="radio"
                                value="Male"
                              />
                            </span>
                            <span style={{ marginLeft: "30px" }}>
                              Female
                              <Form.Check
                                checked={
                                  values.employeeGender === "Female"
                                    ? true
                                    : false
                                }
                                onBlur={handleBlur}
                                name="employeeGender"
                                onChange={handleChange}
                                type="radio"
                                value="Famale"
                              />
                            </span>
                            <span style={{ marginLeft: "30px" }}>
                              Other
                              <Form.Check
                                checked={
                                  values.employeeGender === "Other"
                                    ? true
                                    : false
                                }
                                onBlur={handleBlur}
                                name="employeeGender"
                                onChange={handleChange}
                                type="radio"
                                value="Other"
                              />
                            </span>
                          </Col>
                          <Col></Col>
                          <Col>
                          </Col>
                          <Col>
                            <div></div>
                          </Col>

                          <Col>
                            <div style={{ marginRight: "20px" }}>
                              <Button
                                style={{
                                  backgroundColor: "red",
                                  margin: "2px",
                                }}
                                onClick={() => {
                                  navigate(-1);
                                }}
                                disabled={false}
                              >
                                Cancel
                              </Button>
                            </div>
                          </Col>
                          <Col>
                            <div style={{ marginRight: "40px" }}>
                              <Button
                                style={{ margin: "2px" }}
                                type="submit"
                                disabled={false}
                              >
                                Update
                              </Button>
                            </div>
                          </Col>
                        </Row>

                        {errors.employeeGender && touched.employeeGender ? (
                          <span>
                            <Alert
                              style={{
                                marginLeft: "25px",
                                marginTop: "2px",
                                paddingBottom: "30px",
                                height: "40px",
                                width: "400px",
                              }}
                              variant="danger"
                            >
                              {errors.employeeGender}
                            </Alert>
                          </span>
                        ) : null}
                      </Col>
                    </Row>
                  </form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default UpdateEmployeeDetails;
